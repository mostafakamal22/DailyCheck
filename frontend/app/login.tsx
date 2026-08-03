import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import LoginPage from '@/components/login';

export default function Modal() {
  return (
    <>
      <LoginPage />

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
