import { View, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { authStyles } from './authStyles';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={authStyles.container}>
  <View>
    <ThemedText type="title" style={authStyles.title}>
      Welcome to Naseeb
    </ThemedText>
    <ThemedText style={authStyles.subtitle}>
      A better way to find meaningful connections.
    </ThemedText>
  </View>

  <View style={authStyles.buttonGroup}>
    {/* Phone */}
    <Pressable
      onPress={() => router.push('../(auth)/sign-up/phone')}
      style={({ pressed }) => [
        authStyles.button,
        { opacity: pressed ? 0.6 : 1 },
      ]}
    >
      <View style={authStyles.oauthContent}>
        <Ionicons name="call" size={20} color="black" style={authStyles.icon} />
        <ThemedText style={authStyles.buttonText}>Continue with Phone</ThemedText>
      </View>
    </Pressable>

    {/* Google */}
    <Pressable
      onPress={() => console.log('Google OAuth')}
      style={({ pressed }) => [
        authStyles.oauthButton,
        { opacity: pressed ? 0.6 : 1 },
      ]}
    >
      <View style={authStyles.oauthContent}>
        <FontAwesome name="google" size={20} color="#DB4437" style={authStyles.icon} />
        <ThemedText style={authStyles.oauthText}>Continue with Google</ThemedText>
      </View>
    </Pressable>

    {/* Facebook */}
    <Pressable
      onPress={() => console.log('Facebook OAuth')}
      style={({ pressed }) => [
        authStyles.oauthButton,
        { opacity: pressed ? 0.6 : 1 },
      ]}
    >
      
      <View style={authStyles.oauthContent}>
        <FontAwesome name="facebook" size={20} color="#3b5998" style={authStyles.icon} />
        <ThemedText style={authStyles.oauthText}>Continue with Facebook</ThemedText>
      </View>
    </Pressable>
  </View>
</ThemedView>
  );
}
