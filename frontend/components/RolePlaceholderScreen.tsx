import { Text, useColorScheme, View } from 'react-native';
import { type LucideIcon } from 'lucide-react-native';

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function RolePlaceholderScreen({ title, description, icon: Icon }: Props) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View
      className={`flex-1 items-center justify-center px-6 ${isDark ? 'bg-background' : 'bg-background'}`}>
      <View
        className={`w-full max-w-[420px] rounded-2xl border p-8 ${isDark ? 'border-outline-variant/30 bg-surface-container-low' : 'border-outline-variant/40 bg-surface-container-lowest'}`}>
        <View
          className={`mb-6 h-16 w-16 items-center justify-center rounded-2xl ${isDark ? 'bg-primary' : 'bg-primary'}`}>
          <Icon size={28} color={isDark ? '#00315b' : '#ffffff'} />
        </View>
        <Text
          className={`text-[22px] font-semibold ${isDark ? 'text-on-surface' : 'text-on-surface'}`}>
          {title}
        </Text>
        <Text
          className={`mt-2 text-sm ${isDark ? 'text-on-surface-variant' : 'text-on-surface-variant'}`}>
          {description}
        </Text>
        <Text className={`mt-4 text-sm font-medium text-primary`}>
          This screen is ready for the next feature.
        </Text>
      </View>
    </View>
  );
}
