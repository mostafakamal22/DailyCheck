import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '../translation';

import { Stack } from 'expo-router';
import { ThemeProvider } from '../components/ThemeContext';

export const unstable_settings = {
  initialRouteName: 'login',
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="login" options={{ headerShown: false, header: () => null }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(employee-tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(moderator-tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
