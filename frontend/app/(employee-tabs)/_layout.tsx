import { Tabs } from 'expo-router';
import { Clock3, Home, UserRound } from 'lucide-react-native';

import SharedTabActions from '../../components/SharedTabActions';

export default function EmployeeTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#003d9b',
        tabBarInactiveTintColor: '#737685',
        headerTitle: 'Employee Workspace',
        headerStyle: { backgroundColor: '#f8f9fb' },
        headerTintColor: '#003d9b',
        headerRight: () => <SharedTabActions />,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          title: 'Attendance',
          tabBarIcon: ({ color, size }) => <Clock3 color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <UserRound color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
