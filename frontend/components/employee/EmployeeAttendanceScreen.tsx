import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CalendarDays, CheckCircle2, Clock3, History, MapPin } from 'lucide-react-native';

type AttendanceEntry = {
  title: string;
  range: string;
  duration: string;
  status: string;
  statusClass: string;
};

const attendanceEntries: AttendanceEntry[] = [
  {
    title: 'Monday, Oct 28',
    range: '08:55 AM — 05:45 PM',
    duration: '08h 50m',
    status: 'Present',
    statusClass: 'text-primary bg-primary-container/10',
  },
  {
    title: 'Friday, Oct 25',
    range: '09:05 AM — 06:10 PM',
    duration: '09h 05m',
    status: 'Present',
    statusClass: 'text-primary bg-primary-container/10',
  },
  {
    title: 'Thursday, Oct 24',
    range: 'No record',
    duration: '--',
    status: 'Absent',
    statusClass: 'text-error bg-error-container/20',
  },
];

export default function EmployeeAttendanceScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="px-4 pb-8">
      <View className="mt-4 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 shadow-sm">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-lg font-semibold text-on-surface">Attendance Overview</Text>
            <Text className="mt-1 text-sm text-on-surface-variant">
              Your weekly presence summary
            </Text>
          </View>
          <View className="rounded-full bg-primary/10 p-3">
            <CalendarDays size={20} color="#003d9b" />
          </View>
        </View>

        <View className="mt-5 flex-row">
          <View className="mr-3 flex-1 rounded-2xl bg-surface-container-low p-4">
            <Text className="text-3xl font-semibold text-on-surface">92%</Text>
            <Text className="mt-1 text-sm text-on-surface-variant">On-time rate</Text>
          </View>
          <View className="flex-1 rounded-2xl bg-surface-container-low p-4">
            <Text className="text-3xl font-semibold text-on-surface">4</Text>
            <Text className="mt-1 text-sm text-on-surface-variant">Days present</Text>
          </View>
        </View>
      </View>

      <View className="mt-4 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 shadow-sm">
        <View className="flex-row items-center">
          <CheckCircle2 size={20} color="#003d9b" />
          <Text className="ml-2 text-base font-semibold text-on-surface">Current Shift</Text>
        </View>
        <View className="mt-3 rounded-2xl bg-primary/10 p-4">
          <Text className="text-sm font-semibold text-primary">09:00 AM — 06:00 PM</Text>
          <View className="mt-2 flex-row items-center">
            <MapPin size={16} color="#535f73" />
            <Text className="ml-2 text-sm text-on-surface-variant">HQ - North Block</Text>
          </View>
        </View>
      </View>

      <View className="mt-4 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-4 shadow-sm">
        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-lg font-semibold text-on-surface">Recent Activity</Text>
          <View className="flex-row items-center">
            <History size={16} color="#535f73" />
            <Text className="ml-1 text-sm text-on-surface-variant">History</Text>
          </View>
        </View>

        {attendanceEntries.map((entry) => (
          <View
            key={entry.title}
            className="mt-2 flex-row items-center justify-between rounded-xl border border-outline-variant/30 bg-surface-container-low p-3">
            <View className="flex-row items-center">
              <View className="mr-3 h-10 w-10 items-center justify-center rounded-lg bg-secondary-container">
                <Clock3 size={18} color="#535f73" />
              </View>
              <View>
                <Text className="text-sm font-semibold text-on-surface">{entry.title}</Text>
                <Text className="text-sm text-on-surface-variant">{entry.range}</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-base font-semibold text-on-surface">{entry.duration}</Text>
              <View className={`mt-1 rounded-full px-2 py-1 ${entry.statusClass}`}>
                <Text className="text-[11px] font-semibold">{entry.status}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
