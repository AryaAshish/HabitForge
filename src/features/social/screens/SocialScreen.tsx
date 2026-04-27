import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../../core/design-system/tokens';

export function SocialScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Social</Text>
    </View>
  );
}

export function FriendProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friend Profile</Text>
    </View>
  );
}

export function ChallengeDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Challenge Detail</Text>
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