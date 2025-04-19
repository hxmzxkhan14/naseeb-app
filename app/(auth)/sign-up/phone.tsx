import React, { useRef, useState } from 'react';
import {
  TextInput,
  View,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { authStyles } from '../authStyles';
import { useUserSignup } from '@/context/UserSignupContext';
import { router } from 'expo-router';

export default function PhoneNumberScreen() {
  const { updateUserData } = useUserSignup();

  const [areaCode, setAreaCode] = useState('');
  const [prefix, setPrefix] = useState('');
  const [lineNumber, setLineNumber] = useState('');

  const areaRef = useRef<TextInput>(null);
  const prefixRef = useRef<TextInput>(null);
  const lineRef = useRef<TextInput>(null);

  const handleAreaCodeChange = (text: string) => {
    const digits = text.replace(/\D/g, '').slice(0, 3);
    setAreaCode(digits);
    if (digits.length === 3) prefixRef.current?.focus();
  };

  const handlePrefixChange = (text: string) => {
    const digits = text.replace(/\D/g, '').slice(0, 3);
    if (prefix.length === 1 && digits.length === 0) {
      areaRef.current?.focus();
    }
    setPrefix(digits);
    if (digits.length === 3) lineRef.current?.focus();
  };

  const handleLineNumberChange = (text: string) => {
    const digits = text.replace(/\D/g, '').slice(0, 4);
    if (lineNumber.length === 1 && digits.length === 0) {
      prefixRef.current?.focus();
    }
    setLineNumber(digits);
  };

  const isPhoneComplete =
    areaCode.length === 3 && prefix.length === 3 && lineNumber.length === 4;

 const phone = `+1${areaCode}${prefix}${lineNumber}`;
  const handleNext = () => {
    updateUserData({ phone });
    router.push('/sign-up/name')
    console.log('Submitting phone number:', phone);
    // You can now send `fullPhone` to your backend
  };

  return (
    <ThemedView style={authStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={authStyles.inner}
      >
        <ThemedText type="title" style={authStyles.name_header}>
          Enter Your Phone Number
        </ThemedText>

        <View style={styles.phoneContainer}>
          <TextInput
            ref={areaRef}
            style={styles.phoneSegment}
            keyboardType="number-pad"
            maxLength={3}
            value={areaCode}
            onChangeText={handleAreaCodeChange}
          />
          <TextInput
            ref={prefixRef}
            style={styles.phoneSegment}
            keyboardType="number-pad"
            maxLength={3}
            value={prefix}
            onChangeText={handlePrefixChange}
          />
          <TextInput
            ref={lineRef}
            style={styles.phoneSegment}
            keyboardType="number-pad"
            maxLength={4}
            value={lineNumber}
            onChangeText={handleLineNumberChange}
          />
        </View>

        <TouchableOpacity
          style={[
            authStyles.button,
            !isPhoneComplete && authStyles.buttonDisabled,
            { marginTop: 24 },
          ]}
          onPress={handleNext}
          disabled={!isPhoneComplete}
        >
          <ThemedText style={authStyles.buttonText}>Next</ThemedText>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  phoneContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  phoneSegment: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    width: 80,
    textAlign: 'center',
  },
});
