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
  const [Nickname, setNickname] = useState('');

  const handleNext = () => {
    if (Nickname.trim()) {
      updateUserData({ nickname: Nickname });
      router.push('/(auth)/sign-up/email');
    }
  };

  return (
    <ThemedView style={authStyles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={authStyles.inner}>
        <ThemedText type="title" style={authStyles.name_header}>
          Do you go by a preferred nickname?
        </ThemedText>

        <TextInput
          style={[authStyles.input, {marginRight: 8}]}
          placeholder="Nickname"
          placeholderTextColor="#999"
          onChangeText={setNickname}
          value={Nickname}
        />

        <TouchableOpacity style={[authStyles.button, !Nickname && authStyles.buttonDisabled]} onPress={handleNext} disabled={!Nickname}>
          <ThemedText style={authStyles.buttonText}>Next</ThemedText>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

