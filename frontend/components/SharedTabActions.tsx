import { Link, useRouter } from 'expo-router';
import { MoonStar, SunMedium, LogOut } from 'lucide-react-native';
import { Pressable, Text, useColorScheme, View } from 'react-native';

import { useTheme } from './ThemeContext';

export default function SharedTabActions() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { themeMode, toggleTheme } = useTheme();

  return (
    <View className="flex-row items-center gap-2">
      <Pressable
        onPress={toggleTheme}
        className={`rounded-full border px-3 py-2 ${isDark ? 'border-outline-variant bg-surface-container-high' : 'border-outline-variant bg-surface-container-low'}`}>
        {themeMode === 'dark' ? (
          <SunMedium size={16} color="#a2c9ff" />
        ) : (
          <MoonStar size={16} color="#003d9b" />
        )}
      </Pressable>

      <Pressable
        onPress={() => router.replace('/login')}
        className={`flex-row items-center rounded-full border px-3 py-2 ${isDark ? 'border-outline-variant bg-surface-container-high' : 'border-outline-variant bg-surface-container-low'}`}>
        <LogOut size={16} color={isDark ? '#ffb4ab' : '#ba1a1a'} />
        <Text
          className={`ml-2 text-sm font-medium ${isDark ? 'text-on-surface' : 'text-on-surface'}`}>
          Login
        </Text>
      </Pressable>
    </View>
  );
}
