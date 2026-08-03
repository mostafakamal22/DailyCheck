import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'expo-router';
import { MoonStar, SunMedium } from 'lucide-react-native';
import { z } from 'zod';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  ShieldCheck,
  UserRound,
} from 'lucide-react-native';

import { useTheme } from './ThemeContext';

type LoginFormValues = {
  employeeId: string;
  password: string;
  rememberMe: boolean;
};

const loginSchema: z.ZodType<LoginFormValues> = z.object({
  employeeId: z.string().trim().min(1, 'Employee ID is required'),
  password: z.string().trim().min(1, 'Password is required'),
  rememberMe: z.boolean().default(false),
});

export default function LoginPage() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const { themeMode, toggleTheme } = useTheme();
  const isDark = colorScheme === 'dark' || themeMode === 'dark';
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'error' | 'success'>('success');

  const {
    control,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    defaultValues: {
      employeeId: '',
      password: '',
      rememberMe: false,
    },
  });

  const employeeIdValue = watch('employeeId');
  const passwordValue = watch('password');

  const theme = isDark
    ? {
        background: 'bg-[#101419]',
        surface: 'bg-[#181c22]',
        surfaceElevated: 'bg-[#262a30]',
        surfaceInput: 'bg-[#31353b]',
        text: 'text-[#e0e2ea]',
        textMuted: 'text-[#c0c7d4]',
        border: 'border-[#404752]',
        accent: 'bg-[#a2c9ff]',
        accentText: 'text-[#00315b]',
        secondaryText: 'text-[#8a919d]',
        footerText: 'text-[#8a919d]',
        mutedBorder: 'border-[#404752]/20',
      }
    : {
        background: 'bg-[#f8f9fb]',
        surface: 'bg-[#ffffff]',
        surfaceElevated: 'bg-[#e7e8ea]',
        surfaceInput: 'bg-[#f8f9fb]',
        text: 'text-[#191c1e]',
        textMuted: 'text-[#434654]',
        border: 'border-[#c3c6d6]',
        accent: 'bg-[#003d9b]',
        accentText: 'text-[#ffffff]',
        secondaryText: 'text-[#737685]',
        footerText: 'text-[#737685]',
        mutedBorder: 'border-[#c3c6d6]/30',
      };

  const getFieldStatus = (fieldName: 'employeeId' | 'password') => {
    const value = fieldName === 'employeeId' ? employeeIdValue : passwordValue;
    const hasError = Boolean(errors[fieldName]);
    const hasValue = (value ?? '').toString().length > 0;

    if (hasError) {
      return {
        containerClass: 'border-error/70 bg-error-container/10',
        iconColor: isDark ? '#ffb4ab' : '#ba1a1a',
      };
    }

    if (hasValue) {
      return {
        containerClass: `border-primary/40 ${isDark ? 'bg-surface-container-highest' : 'bg-surface'}`,
        iconColor: isDark ? '#a2c9ff' : '#003d9b',
      };
    }

    return {
      containerClass: `${theme.surfaceInput} border ${theme.border}`,
      iconColor: isDark ? '#8a919d' : '#737685',
    };
  };

  const handleLogin = async (data: LoginFormValues) => {
    const result = loginSchema.safeParse(data);

    if (!result.success) {
      const firstError = result.error.issues[0];
      setStatusType('error');
      setStatusMessage(firstError?.message ?? 'Please check your credentials.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);
    clearErrors();

    await new Promise((resolve) => setTimeout(resolve, 900));

    const normalizedId = data.employeeId.trim();

    if (normalizedId === '2222') {
      setStatusType('success');
      setStatusMessage('Welcome back, Employee. Your attendance access is ready.');
      router.replace('/(employee-tabs)/home');
    } else if (normalizedId === '1111') {
      setStatusType('success');
      setStatusMessage('Welcome back, Moderator. Your dashboard access is ready.');
      router.replace('/(moderator-tabs)/home');
    } else {
      setStatusType('error');
      setStatusMessage('Invalid credentials. Please verify your Employee ID and try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <KeyboardAvoidingView
      className={`flex-1 ${theme.background}`}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        className={theme.background}>
        <View className="flex-1 items-center justify-center px-4 py-8">
          <View
            className={`w-full max-w-[440px] rounded-xl border ${theme.mutedBorder} p-6 ${theme.surface} ${isDark ? 'shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'shadow-[0_2px_8px_rgba(0,0,0,0.04)]'}`}>
            <View className="mb-8 items-center">
              <View className="mb-2 self-end">
                <Pressable
                  onPress={toggleTheme}
                  className={`rounded-full border p-2 ${isDark ? 'border-[#404752] bg-[#262a30]' : 'border-[#c3c6d6] bg-[#f3f4f6]'}`}>
                  {themeMode === 'dark' ? (
                    <SunMedium size={16} color="#a2c9ff" />
                  ) : (
                    <MoonStar size={16} color="#003d9b" />
                  )}
                </Pressable>
              </View>
              <View
                className={`mb-4 h-14 w-14 items-center justify-center rounded-xl ${theme.accent} ${isDark ? 'shadow-[0_8px_20px_rgba(0,0,0,0.35)]' : 'shadow-md'}`}>
                <ShieldCheck size={28} color={isDark ? '#00315b' : '#ffffff'} />
              </View>
              <Text className={`text-[24px] font-semibold ${theme.text}`}>WorkSync</Text>
              <Text className={`mt-1 text-sm ${theme.textMuted}`}>
                Enterprise Attendance Portal
              </Text>
            </View>

            <View className="space-y-4">
              {statusMessage ? (
                <View
                  className={`rounded-xl border p-3 ${statusType === 'error' ? 'border-[#ffb4ab]/20 bg-[#93000a]/20' : 'border-[#a2c9ff]/20 bg-[#003663]/20'}`}>
                  <View className="flex-row items-start">
                    {statusType === 'error' ? (
                      <BadgeCheck size={18} color={isDark ? '#ffb4ab' : '#ba1a1a'} />
                    ) : (
                      <CheckCircle2 size={18} color={isDark ? '#a2c9ff' : '#003d9b'} />
                    )}
                    <Text
                      className={`ml-2 flex-1 text-sm ${statusType === 'error' ? 'text-[#ffb4ab]' : 'text-[#a2c9ff]'}`}>
                      {statusMessage}
                    </Text>
                  </View>
                </View>
              ) : null}

              <Controller
                control={control}
                name="employeeId"
                render={({ field }) => {
                  const fieldStatus = getFieldStatus('employeeId');
                  return (
                    <View>
                      <Text
                        className={`mb-2 ml-1 text-xs font-semibold uppercase tracking-[0.2em] ${theme.textMuted}`}>
                        Employee ID
                      </Text>
                      <View
                        className={`flex-row items-center rounded-xl border px-4 py-3 ${fieldStatus.containerClass}`}>
                        <UserRound size={18} color={fieldStatus.iconColor} />
                        <TextInput
                          value={field.value}
                          onChangeText={field.onChange}
                          onBlur={field.onBlur}
                          placeholder="Enter your ID"
                          placeholderTextColor={isDark ? '#8a919d' : '#737685'}
                          autoCapitalize="none"
                          keyboardType="number-pad"
                          className={`ml-3 flex-1 text-sm ${theme.text}`}
                        />
                      </View>
                      {errors.employeeId ? (
                        <Text className="ml-1 mt-2 text-xs text-error">
                          {errors.employeeId.message}
                        </Text>
                      ) : null}
                    </View>
                  );
                }}
              />

              <Controller
                control={control}
                name="password"
                render={({ field }) => {
                  const fieldStatus = getFieldStatus('password');
                  return (
                    <View>
                      <View className="mb-2 flex-row items-center justify-between px-1">
                        <Text
                          className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.textMuted}`}>
                          Password
                        </Text>
                        <Text className="text-xs font-semibold text-primary">Forgot?</Text>
                      </View>
                      <View
                        className={`flex-row items-center rounded-xl border px-4 py-3 ${fieldStatus.containerClass}`}>
                        <Lock size={18} color={fieldStatus.iconColor} />
                        <TextInput
                          value={field.value}
                          onChangeText={field.onChange}
                          onBlur={field.onBlur}
                          placeholder="••••••••"
                          placeholderTextColor={isDark ? '#8a919d' : '#737685'}
                          secureTextEntry={!showPassword}
                          className={`ml-3 flex-1 text-sm ${theme.text}`}
                          autoCapitalize="none"
                        />
                        <Pressable onPress={() => setShowPassword((value) => !value)}>
                          {showPassword ? (
                            <EyeOff size={18} color={fieldStatus.iconColor} />
                          ) : (
                            <Eye size={18} color={fieldStatus.iconColor} />
                          )}
                        </Pressable>
                      </View>
                      {errors.password ? (
                        <Text className="ml-1 mt-2 text-xs text-error">
                          {errors.password.message}
                        </Text>
                      ) : null}
                    </View>
                  );
                }}
              />

              <Controller
                control={control}
                name="rememberMe"
                render={({ field }) => (
                  <Pressable
                    onPress={() => field.onChange(!field.value)}
                    className="flex-row items-center py-1">
                    <View
                      className={`mr-2 h-5 w-5 items-center justify-center rounded border ${theme.border} ${field.value ? 'bg-[#a2c9ff]' : isDark ? 'bg-[#31353b]' : 'bg-[#f8f9fb]'}`}>
                      {field.value ? <CheckCircle2 size={16} color="#ffffff" /> : null}
                    </View>
                    <Text className={`text-sm ${theme.textMuted}`}>Remember Me</Text>
                  </Pressable>
                )}
              />

              <Pressable
                onPress={handleSubmit(handleLogin as any)}
                className={`flex-row items-center justify-center rounded-xl px-4 py-3 ${theme.accent}`}
                disabled={isSubmitting}>
                {isSubmitting ? (
                  <ActivityIndicator color={isDark ? '#00315b' : '#ffffff'} />
                ) : (
                  <ArrowRight size={18} color={isDark ? '#00315b' : '#ffffff'} />
                )}
                <Text className={`ml-2 text-sm font-semibold ${theme.accentText}`}>
                  {isSubmitting ? 'Signing in...' : 'Login'}
                </Text>
              </Pressable>
            </View>

            <View className="mt-8 border-t border-outline-variant/30 pt-6">
              <Text
                className={`mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] ${theme.textMuted}`}>
                Or Sign In With
              </Text>
              <View className="flex-row">
                <Pressable
                  className={`mr-3 flex-1 items-center justify-center rounded-xl border ${theme.border} px-3 py-3 ${theme.surfaceElevated}`}>
                  <Text className={`text-sm font-semibold ${theme.text}`}>Microsoft</Text>
                </Pressable>
                <Pressable
                  className={`flex-1 items-center justify-center rounded-xl border ${theme.border} px-3 py-3 ${theme.surfaceElevated}`}>
                  <Text className={`text-sm font-semibold ${theme.text}`}>Okta</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <Text className={`mt-5 text-sm ${theme.textMuted}`}>
            Need help? <Text className="font-semibold text-primary">Contact HR Support</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
