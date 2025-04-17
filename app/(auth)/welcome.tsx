import { View, Pressable, StyleSheet, Platform, TextStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText'
import { authStyles } from './authStyles';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={authStyles.container}>
      <ThemedText type="title" style={authStyles.title}>
        Welcome to Naseeb
      </ThemedText>
      <ThemedText style={authStyles.subtitle}>
        A better way to find meaningful connections.
      </ThemedText>

      <Pressable
        onPress={() => router.push('../(auth)/sign-up/name')}
        style={({ pressed }) => [
          authStyles.button,
          { opacity: pressed ? 0.6 : 1 },
        ]}
      >
        <ThemedText type="default" style={authStyles.buttonText}>
          Get Started
        </ThemedText>
      </Pressable>
    </ThemedView>
  );
}

