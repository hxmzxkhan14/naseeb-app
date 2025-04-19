import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Platform, TextStyle, StyleSheet } from 'react-native';
import { UserSignupProvider } from '@/context/UserSignupContext';


export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
    <UserSignupProvider>
    <ThemeProvider value={DarkTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'black',
          },
        }}
      />
    </ThemeProvider>
    </UserSignupProvider>
  );
}