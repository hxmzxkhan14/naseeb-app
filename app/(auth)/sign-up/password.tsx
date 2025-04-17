import { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { authStyles } from '../authStyles';

export default function PasswordScreen() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const isStrongPassword = (pw: string) => {
    return pw.length >= 8 && /[A-Z]/.test(pw) && /\d/.test(pw) || /[!@#$%^&*(),.?":{}|<>]/.test(pw);
  };

  const handleNext = () => {
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    if (!isStrongPassword(password)) {
      setError("Password isn't strong enough \n - minimum of 8 characters required\n - 1 uppercase character \n - 1 number or special character");
      return;
    }

    // TODO: Save password in global state or context here
    router.push('/(auth)/sign-up/phone');
    console.log("button was pressed")
  };

  return (
    <ThemedView style={authStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={authStyles.inner}
      >
        <ThemedText type="title" style={authStyles.name_header}>
          Create a Password
        </ThemedText>

        <TextInput
          style={authStyles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={authStyles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {error ? <Text style={authStyles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={authStyles.button} onPress={handleNext}>
          <Text style={authStyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}
