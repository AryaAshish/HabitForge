import Config from 'react-native-config';
import { z } from 'zod';

const envSchema = z.object({
  SUPABASE_URL: z.string().url(),
  SUPABASE_ANON_KEY: z.string().min(1),
  ANTHROPIC_API_KEY: z.string().min(1),
  REVENUECAT_ANDROID_KEY: z.string().min(1),
  REVENUECAT_IOS_KEY: z.string().min(1),
  POSTHOG_API_KEY: z.string().min(1),
  POSTHOG_HOST: z.string().url(),
});

export const env = envSchema.parse(Config);

export type Env = z.infer<typeof envSchema>;