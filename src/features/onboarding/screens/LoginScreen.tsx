import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../core/design-system/tokens';

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
  },
});