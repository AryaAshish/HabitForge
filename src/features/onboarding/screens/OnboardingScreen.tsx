import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../core/design-system/tokens';

export function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HabitForge</Text>
      <Text style={styles.subtitle}>Build habits. Stay accountable. Together.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
  },
  title: {
    fontSize: Typography.fontSize.xl,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: Typography.fontSize.base,
    color: Colors.textSecondary,
  },
});