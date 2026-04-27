import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './types';
import { BottomTabNavigator } from './BottomTabNavigator';
import { AddHabitScreen } from '../features/habits/screens/AddHabitScreen';
import { HabitDetailScreen } from '../features/habits/screens/HabitDetailScreen';
import { PaywallScreen } from '../features/paywall/screens/PaywallScreen';
import { FriendProfileScreen } from '../features/social/screens/FriendProfileScreen';
import { ChallengeDetailScreen } from '../features/social/screens/ChallengeDetailScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="AddHabit" component={AddHabitScreen} />
      <Stack.Screen name="HabitDetail" component={HabitDetailScreen} />
      <Stack.Screen name="Paywall" component={PaywallScreen} />
      <Stack.Screen name="FriendProfile" component={FriendProfileScreen} />
      <Stack.Screen name="ChallengeDetail" component={ChallengeDetailScreen} />
    </Stack.Navigator>
  );
}