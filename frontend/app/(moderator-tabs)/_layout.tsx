import { Tabs } from 'expo-router';
import { FileText, Home, Shield, Users } from 'lucide-react-native';

import SharedTabActions from '../../components/SharedTabActions';

export default function ModeratorTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#003d9b',
        tabBarInactiveTintColor: '#737685',
        headerTitle: 'Moderator Workspace',
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
        name="staff"
        options={{
          title: 'Staff',
          tabBarIcon: ({ color, size }) => <Users color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="logs"
        options={{
          title: 'Logs',
          tabBarIcon: ({ color, size }) => <FileText color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="admin"
        options={{
          title: 'Admin',
          tabBarIcon: ({ color, size }) => <Shield color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
