import { KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { authStyles } from '../authStyles';


export default function EmailScreen() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNext = () => {
    if (emailIsValid) {
      // save email to state/store or context, then route
      router.push('/(auth)/sign-up/password');
    }
  };

  return (
    <ThemedView style={authStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={authStyles.inner}>
        <ThemedText type="title" style={authStyles.name_header}>
          Please enter your email
        </ThemedText>

        <TextInput
          style={authStyles.input}
          placeholder="you@example.com"
          placeholderTextColor="#999"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity
          onPress={handleNext}
          disabled={!emailIsValid}
          style={[
            authStyles.button,
            { opacity: emailIsValid ? 1 : 0.5 },
          ]}
        >
          <ThemedText style={authStyles.buttonText}>Next</ThemedText>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}