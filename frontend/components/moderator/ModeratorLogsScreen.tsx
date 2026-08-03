import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { AlertTriangle, CheckCircle2, Clock3, FileText, Search } from 'lucide-react-native';

type LogEntry = {
  title: string;
  detail: string;
  time: string;
  status: string;
  statusClass: string;
};

const logEntries: LogEntry[] = [
  {
    title: 'Face verification passed',
    detail: 'Employee #WS-48291 checked in at HQ',
    time: '09:02 AM',
    status: 'Verified',
    statusClass: 'bg-green-900/30 text-green-400',
  },
  {
    title: 'Geo-fence violation',
    detail: 'Employee #WS-33120 left the allowed area',
    time: '08:41 AM',
    status: 'Review',
    statusClass: 'bg-tertiary-container/20 text-tertiary',
  },
  {
    title: 'Attendance submitted late',
    detail: 'Employee #WS-21809 submitted after cutoff',
    time: '07:15 AM',
    status: 'Flagged',
    statusClass: 'bg-red-900/30 text-red-400',
  },
];

export default function ModeratorLogsScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="px-4 pb-8">
      <View className="mt-4 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 shadow-sm">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-lg font-semibold text-on-surface">Attendance Review</Text>
            <Text className="mt-1 text-sm text-on-surface-variant">
              Validate check-ins, geofence events, and exceptions
            </Text>
          </View>
          <View className="rounded-full bg-primary/10 p-3">
            <FileText size={18} color="#003d9b" />
          </View>
        </View>

        <View className="mt-4 flex-row items-center rounded-2xl border border-outline-variant/40 bg-surface-container-low px-3 py-3">
          <Search size={18} color="#737685" />
          <Text className="ml-2 text-sm text-on-surface-variant">Search logs...</Text>
        </View>
      </View>

      <View className="mt-4 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-4 shadow-sm">
        {logEntries.map((entry) => (
          <View
            key={entry.title}
            className="mt-2 flex-row items-start justify-between rounded-xl border border-outline-variant/30 bg-surface-container-low p-3">
            <View className="flex-row items-start">
              <View className="mr-3 h-10 w-10 items-center justify-center rounded-lg bg-secondary-container">
                {entry.status === 'Verified' ? (
                  <CheckCircle2 size={18} color="#003d9b" />
                ) : (
                  <AlertTriangle size={18} color="#7b2600" />
                )}
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-on-surface">{entry.title}</Text>
                <Text className="text-sm text-on-surface-variant">{entry.detail}</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-sm text-on-surface-variant">{entry.time}</Text>
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
