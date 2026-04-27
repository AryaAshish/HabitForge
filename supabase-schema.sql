-- Supabase Schema for HabitForge
-- Run this in Supabase SQL Editor

-- Users (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique not null,
  display_name text,
  avatar_url text,
  is_pro boolean default false,
  pro_expires_at timestamptz,
  streak_recovery_used_at date,
  timezone text default 'Asia/Kolkata',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Habits
create table public.habits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  name text not null,
  icon text not null,             -- emoji or icon key
  color text not null,            -- hex color
  frequency_type text not null,   -- 'daily' | 'weekly' | 'monthly'
  frequency_value int not null,   -- e.g. 3 for "3x per week"
  is_archived boolean default false,
  is_public boolean default false, -- visible to friends
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Habit Completions
create table public.habit_completions (
  id uuid primary key default gen_random_uuid(),
  habit_id uuid references public.habits(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  completed_date date not null,
  note text,
  created_at timestamptz default now(),
  unique(habit_id, completed_date)
);

-- Streaks (computed + cached)
create table public.habit_streaks (
  habit_id uuid references public.habits(id) on delete cascade primary key,
  current_streak int default 0,
  longest_streak int default 0,
  last_completed_date date,
  updated_at timestamptz default now()
);

-- Friends
create table public.friendships (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid references public.profiles(id) on delete cascade,
  addressee_id uuid references public.profiles(id) on delete cascade,
  status text default 'pending',  -- 'pending' | 'accepted' | 'blocked'
  created_at timestamptz default now(),
  unique(requester_id, addressee_id)
);

-- Challenges
create table public.challenges (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  habit_name text not null,
  habit_icon text not null,
  habit_color text not null,
  frequency_type text not null,
  frequency_value int not null,
  start_date date not null,
  end_date date not null,
  is_public boolean default false,
  created_at timestamptz default now()
);

-- Challenge Participants
create table public.challenge_participants (
  challenge_id uuid references public.challenges(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  joined_at timestamptz default now(),
  primary key(challenge_id, user_id)
);

-- AI Nudges Log
create table public.ai_nudges (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  nudge_text text not null,
  nudge_type text not null,   -- 'streak_at_risk' | 'milestone' | 'pattern' | 'encouragement'
  habit_id uuid references public.habits(id),
  was_shown boolean default false,
  was_acted_on boolean default false,
  created_at timestamptz default now()
);

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.habits enable row level security;
alter table public.habit_completions enable row level security;
alter table public.habit_streaks enable row level security;
alter table public.friendships enable row level security;
alter table public.challenges enable row level security;
alter table public.challenge_participants enable row level security;
alter table public.ai_nudges enable row level security;

-- RLS Policies (habits — user owns their data)
create policy "Users can CRUD own habits"
  on public.habits for all
  using (auth.uid() = user_id);

create policy "Users can view friends public habits"
  on public.habits for select
  using (
    is_public = true and
    user_id in (
      select case
        when requester_id = auth.uid() then addressee_id
        else requester_id
      end
      from public.friendships
      where (requester_id = auth.uid() or addressee_id = auth.uid())
        and status = 'accepted'
    )
  );

-- (Generate similar RLS policies for all other tables)