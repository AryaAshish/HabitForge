import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../../core/design-system/tokens';

export function AddHabitScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Habit</Text>
    </View>
  );
}

export function HabitDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Detail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  title: {
    fontSize: Typography.fontSize.xl,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
});