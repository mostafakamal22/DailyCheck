import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import {
  AlertTriangle,
  BellRing,
  FileText,
  Group,
  PlusCircle,
  ShieldCheck,
} from 'lucide-react-native';

type SummaryCardProps = {
  title: string;
  value: string;
  subtext: string;
  icon: React.ElementType;
  accent: string;
};

const summaryCards: SummaryCardProps[] = [
  {
    title: 'Total Employees',
    value: '1,248',
    subtext: '+2.4%',
    icon: Group,
    accent: 'text-primary',
  },
  {
    title: 'Present Today',
    value: '1,112',
    subtext: '89%',
    icon: ShieldCheck,
    accent: 'text-tertiary',
  },
  {
    title: 'Absent Today',
    value: '96',
    subtext: '96 New',
    icon: AlertTriangle,
    accent: 'text-error',
  },
  {
    title: 'Late Employees',
    value: '40',
    subtext: 'Critical',
    icon: BellRing,
    accent: 'text-tertiary-container',
  },
];

const quickActions = [
  { label: 'Add Employee', icon: PlusCircle, tone: 'bg-primary text-on-primary' },
  {
    label: 'Attendance Reports',
    icon: FileText,
    tone: 'bg-secondary-container text-on-secondary-container',
  },
  { label: 'Send Broadcast', icon: BellRing, tone: 'bg-surface-container-high text-on-surface' },
];

const alerts = [
  { title: '5+ Consecutive Absences', detail: 'Sarah Jenkins • Dept: Design', color: 'bg-error' },
  { title: 'Geo-fence Violation', detail: 'Mike Ross • Out of bounds', color: 'bg-tertiary' },
];

export default function ModeratorDashboardScreen() {
  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="px-4 pb-8"
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}>
      <View className="mt-4 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-4 shadow-sm">
        <Text className="text-lg font-semibold text-on-surface">Moderator Dashboard</Text>
        <Text className="mt-1 text-sm text-on-surface-variant">
          Real-time attendance overview for June 12, 2024
        </Text>
      </View>

      <View className="mt-4 flex-row flex-wrap">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <View
              key={card.title}
              className="mb-3 mr-3 w-[47%] rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-4 shadow-sm">
              <View className="mb-3 flex-row items-center justify-between">
                <View className="rounded-lg bg-primary/10 p-2">
                  <Icon size={18} color="#003d9b" />
                </View>
                <Text className={`text-xs font-semibold ${card.accent}`}>{card.subtext}</Text>
              </View>
              <Text className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                {card.title}
              </Text>
              <Text className="mt-1 text-2xl font-semibold text-on-surface">{card.value}</Text>
            </View>
          );
        })}
      </View>

      <View className="mt-2 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-4 shadow-sm">
        <View className="mb-3 flex-row items-center justify-between">
          <View>
            <Text className="text-lg font-semibold text-on-surface">Weekly Attendance Summary</Text>
            <Text className="text-sm text-on-surface-variant">Average attendance rate: 94.2%</Text>
          </View>
          <View className="rounded-lg bg-surface-container-high px-3 py-2">
            <Text className="text-xs font-semibold text-on-surface">Last 7 Days</Text>
          </View>
        </View>

        <View className="mt-4 flex-row items-end justify-between gap-2">
          {['92%', '95%', '94%', '98%', '88%', '45%', '42%'].map((value, index) => {
            const heights = [85, 92, 88, 98, 75, 40, 35];
            return (
              <View key={value} className="flex-1 items-center">
                <View
                  className="w-full rounded-t-lg bg-primary/30"
                  style={{ height: `${heights[index]}%` as const, minHeight: 36 }}
                />
                <Text className="mt-2 text-xs text-on-surface-variant">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      <View className="mt-4 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-4 shadow-sm">
        <Text className="text-lg font-semibold text-on-surface">Quick Actions</Text>
        <View className="mt-3 gap-2">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <View
                key={action.label}
                className={`flex-row items-center rounded-xl p-3 ${action.tone}`}>
                <Icon size={18} />
                <Text className="ml-2 font-semibold">{action.label}</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View className="mt-4 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-4 shadow-sm">
        <Text className="text-lg font-semibold text-on-surface">Recent Alerts</Text>
        <View className="mt-3 gap-3">
          {alerts.map((alert) => (
            <View
              key={alert.title}
              className="flex-row gap-2 border-b border-outline-variant/20 pb-3">
              <View className={`mt-1 h-2.5 w-2.5 rounded-full ${alert.color}`} />
              <View>
                <Text className="text-sm font-semibold text-on-surface">{alert.title}</Text>
                <Text className="text-sm text-on-surface-variant">{alert.detail}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
