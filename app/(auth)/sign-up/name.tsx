import { useRouter } from 'expo-router';
import { useState } from 'react';
import { TextInput, Platform, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { authStyles } from '../authStyles';
import { useUserSignup } from '@/context/UserSignupContext';


export default function NameScreen() {
  const { updateUserData } = useUserSignup();

  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNext = () => {
    if (firstName.trim() && lastName.trim()) {
      updateUserData({ firstName, lastName });
      router.push('/(auth)/sign-up/nickname');
    }
  };

  return (
    <ThemedView style={authStyles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={authStyles.inner}>
        <ThemedText type="title" style={authStyles.name_header}>
          What’s your name?
        </ThemedText>

        <TextInput
          style={[authStyles.input, {marginRight: 8}]}
          placeholder="First Name"
          placeholderTextColor="#999"
          onChangeText={setFirstName}
          value={firstName}
        />

        <TextInput
          style={[authStyles.input, {marginRight: 8}]}
          placeholder="Last Name"
          placeholderTextColor="#999"
          onChangeText={setLastName}
          value={lastName}
        />

        <TouchableOpacity style={[authStyles.button, !(firstName && lastName) && authStyles.buttonDisabled]} onPress={handleNext} disabled={!(firstName && lastName)}>
          <ThemedText style={authStyles.buttonText}>Next</ThemedText>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}