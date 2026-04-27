import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './types';
import { TodayScreen } from '../features/tracking/screens/TodayScreen';
import { AnalyticsScreen } from '../features/analytics/screens/AnalyticsScreen';
import { SocialScreen } from '../features/social/screens/SocialScreen';
import { SettingsScreen } from '../features/settings/screens/SettingsScreen';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={TodayScreen} />
      <Tab.Screen name="Stats" component={AnalyticsScreen} />
      <Tab.Screen name="Social" component={SocialScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
    </Tab.Navigator>
  );
}