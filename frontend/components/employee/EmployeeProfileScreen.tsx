import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ChevronRight, Clock3, Settings, ShieldCheck, UserRound } from 'lucide-react-native';

type ProfileItem = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
};

const profileItems: ProfileItem[] = [
  {
    title: 'Personal info',
    subtitle: 'Manage your contact and ID details',
    icon: UserRound,
  },
  {
    title: 'Security',
    subtitle: 'Password and two-factor settings',
    icon: ShieldCheck,
  },
  {
    title: 'Preferences',
    subtitle: 'Notifications and working hours',
    icon: Settings,
  },
  {
    title: 'Attendance history',
    subtitle: 'Review recent check-in records',
    icon: Clock3,
  },
];

export default function EmployeeProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="px-4 pb-8">
      <View className="mt-4 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 shadow-sm">
        <View className="flex-row items-center">
          <View className="mr-4 h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Text className="text-xl font-semibold text-primary">SL</Text>
          </View>
          <View className="flex-1">
            <Text className="text-lg font-semibold text-on-surface">Sarah Lee</Text>
            <Text className="text-sm text-on-surface-variant">Senior Operations Specialist</Text>
            <Text className="mt-1 text-sm text-primary">Employee ID: #WS-48291</Text>
          </View>
        </View>
      </View>

      <View className="mt-4 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-4 shadow-sm">
        {profileItems.map((item) => {
          const Icon = item.icon;
          return (
            <View
              key={item.title}
              className="flex-row items-center justify-between rounded-xl border border-outline-variant/30 bg-surface-container-low p-3">
              <View className="flex-row items-center">
                <View className="mr-3 h-10 w-10 items-center justify-center rounded-lg bg-secondary-container">
                  <Icon size={18} color="#535f73" />
                </View>
                <View>
                  <Text className="text-sm font-semibold text-on-surface">{item.title}</Text>
                  <Text className="text-sm text-on-surface-variant">{item.subtitle}</Text>
                </View>
              </View>
              <ChevronRight size={18} color="#737685" />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
