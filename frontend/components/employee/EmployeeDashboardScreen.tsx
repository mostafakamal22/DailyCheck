import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import {
  BellRing,
  CalendarDays,
  Clock3,
  History,
  LogIn,
  LogOut,
  MapPin,
} from 'lucide-react-native';

type QuickAction = {
  title: string;
  icon: React.ElementType;
  colorClass: string;
  textClass: string;
  disabled?: boolean;
};

type RecentLog = {
  title: string;
  time: string;
  duration: string;
  status: string;
  statusClass: string;
};

const quickActions: QuickAction[] = [
  {
    title: 'Check In',
    icon: LogIn,
    colorClass: 'bg-primary',
    textClass: 'text-on-primary',
  },
  {
    title: 'Check Out',
    icon: LogOut,
    colorClass: 'bg-surface-container-high',
    textClass: 'text-on-surface',
    disabled: true,
  },
  {
    title: 'Leave Request',
    icon: CalendarDays,
    colorClass: 'bg-surface-container-lowest border border-outline-variant/50',
    textClass: 'text-on-surface',
  },
  {
    title: 'History',
    icon: History,
    colorClass: 'bg-surface-container-lowest border border-outline-variant/50',
    textClass: 'text-on-surface',
  },
];

const recentLogs: RecentLog[] = [
  {
    title: 'Yesterday, Oct 23',
    time: '09:02 AM — 06:15 PM',
    duration: '09h 13m',
    status: 'Present',
    statusClass: 'text-primary bg-primary-container/10',
  },
  {
    title: 'Friday, Oct 20',
    time: '08:55 AM — 05:45 PM',
    duration: '08h 50m',
    status: 'Present',
    statusClass: 'text-primary bg-primary-container/10',
  },
  {
    title: 'Thursday, Oct 19',
    time: 'No entry recorded',
    duration: '--',
    status: 'Absent',
    statusClass: 'text-error bg-error-container/20',
  },
];

export default function EmployeeDashboardScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="px-4 pb-8">
      <View className="mt-4 flex-row items-center justify-between rounded-2xl bg-surface-container-lowest p-4 shadow-sm">
        <View>
          <Text className="text-lg font-semibold text-on-surface">Welcome back, Sarah</Text>
          <Text className="text-sm text-on-surface-variant">Employee ID: #WS-48291</Text>
        </View>
        <View className="h-11 w-11 items-center justify-center rounded-full bg-secondary-container">
          <BellRing size={20} color="#535f73" />
        </View>
      </View>

      <View className="mt-4 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 shadow-sm">
        <View className="flex-row items-start justify-between">
          <View>
            <Text className="text-xs font-semibold uppercase tracking-[0.2em] text-outline">
              Today
            </Text>
            <Text className="mt-2 text-3xl font-semibold text-on-surface">08:45 AM</Text>
          </View>
          <View className="rounded-full bg-error-container px-3 py-1">
            <Text className="text-xs font-semibold uppercase text-on-error-container">
              Not Checked In
            </Text>
          </View>
        </View>

        <View className="mt-4 flex-row items-center">
          <MapPin size={18} color="#535f73" />
          <Text className="ml-2 text-sm text-on-surface-variant">
            HQ - Main Campus, North Block
          </Text>
        </View>
      </View>

      <View className="mt-5 flex-row flex-wrap">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Pressable
              key={action.title}
              disabled={action.disabled}
              className={`mb-3 mr-3 w-[47%] items-center justify-center rounded-2xl p-4 ${action.colorClass} ${action.disabled ? 'opacity-50' : ''}`}
              style={{ minHeight: 110 }}>
              <View className="mb-2 h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Icon size={24} color={action.title === 'Check In' ? '#ffffff' : '#003d9b'} />
              </View>
              <Text className={`text-sm font-semibold ${action.textClass}`}>{action.title}</Text>
            </Pressable>
          );
        })}
      </View>

      <View className="mt-2 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-4 shadow-sm">
        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-lg font-semibold text-on-surface">Recent Logs</Text>
          <Text className="text-sm font-semibold text-primary">View All</Text>
        </View>

        {recentLogs.map((log) => (
          <View
            key={log.title}
            className="mt-2 flex-row items-center justify-between rounded-xl border border-outline-variant/30 bg-surface-container-low p-3">
            <View className="flex-row items-center">
              <View className="mr-3 h-10 w-10 items-center justify-center rounded-lg bg-secondary-container">
                <Clock3 size={18} color="#535f73" />
              </View>
              <View>
                <Text className="text-sm font-semibold text-on-surface">{log.title}</Text>
                <Text className="text-sm text-on-surface-variant">{log.time}</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-base font-semibold text-on-surface">{log.duration}</Text>
              <View className={`mt-1 rounded-full px-2 py-1 ${log.statusClass}`}>
                <Text className="text-[11px] font-semibold">{log.status}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
