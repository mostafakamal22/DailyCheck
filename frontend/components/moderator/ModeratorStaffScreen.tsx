import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Filter, MoreHorizontal, Search, UserRound } from 'lucide-react-native';

type EmployeeRow = {
  id: string;
  name: string;
  role: string;
  phone: string;
  status: string;
  statusClass: string;
};

const employees: EmployeeRow[] = [
  {
    id: 'WS-1024',
    name: 'Eleanor P. Vance',
    role: 'Software Engineer',
    phone: '+1 (555) 234-8902',
    status: 'Present',
    statusClass: 'bg-green-900/30 text-green-400',
  },
  {
    id: 'WS-1025',
    name: 'Julian M. Castro',
    role: 'Product Designer',
    phone: '+1 (555) 871-3345',
    status: 'Remote',
    statusClass: 'bg-blue-900/30 text-blue-400',
  },
  {
    id: 'WS-1026',
    name: 'Maya Rodriguez',
    role: 'HR Specialist',
    phone: '+1 (555) 092-7712',
    status: 'Absent',
    statusClass: 'bg-red-900/30 text-red-400',
  },
  {
    id: 'WS-1027',
    name: 'Marcus L. Thorne',
    role: 'Account Manager',
    phone: '+1 (555) 443-1289',
    status: 'Present',
    statusClass: 'bg-green-900/30 text-green-400',
  },
  {
    id: 'WS-1028',
    name: 'Sophia J. Kim',
    role: 'DevOps Lead',
    phone: '+1 (555) 662-1009',
    status: 'On Leave',
    statusClass: 'bg-tertiary-container/20 text-tertiary',
  },
];

export default function ModeratorStaffScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="px-4 pb-8">
      <View className="mt-4 flex-row items-center justify-between rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-4 shadow-sm">
        <View>
          <Text className="text-lg font-semibold text-on-surface">Employee Directory</Text>
          <Text className="text-sm text-on-surface-variant">
            Manage your organization’s staff profiles
          </Text>
        </View>
        <View className="rounded-full bg-primary/10 p-3">
          <UserRound size={18} color="#003d9b" />
        </View>
      </View>

      <View className="mt-4 flex-row items-center gap-2">
        <View className="flex-1 flex-row items-center rounded-2xl border border-outline-variant/40 bg-surface-container-lowest px-3 py-3 shadow-sm">
          <Search size={18} color="#737685" />
          <Text className="ml-2 text-sm text-on-surface-variant">Search employees...</Text>
        </View>
        <View className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-3 shadow-sm">
          <Filter size={18} color="#003d9b" />
        </View>
      </View>

      <View className="mt-4 overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest shadow-sm">
        {employees.map((employee) => (
          <View
            key={employee.id}
            className="flex-row items-center justify-between border-b border-outline-variant/20 px-4 py-3 last:border-b-0">
            <View className="flex-row items-center">
              <View className="mr-3 h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                <Text className="text-sm font-semibold text-primary">
                  {employee.name.charAt(0)}
                </Text>
              </View>
              <View>
                <Text className="text-sm font-semibold text-on-surface">{employee.name}</Text>
                <Text className="text-sm text-on-surface-variant">{employee.role}</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-xs text-on-surface-variant">{employee.phone}</Text>
              <View className={`mt-1 rounded-full px-2 py-1 ${employee.statusClass}`}>
                <Text className="text-[11px] font-semibold">{employee.status}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View className="mt-4 flex-row items-center justify-between rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-4 shadow-sm">
        <Text className="text-sm text-on-surface-variant">Showing 1 - 5 of 240 employees</Text>
        <MoreHorizontal size={18} color="#737685" />
      </View>
    </ScrollView>
  );
}
