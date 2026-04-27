import { create } from 'zustand';

interface GlobalStore {
  isAuthenticated: boolean;
  userId: string | null;
  isPro: boolean;
  setAuthenticated: (value: boolean) => void;
  setUserId: (id: string | null) => void;
  setIsPro: (value: boolean) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  isAuthenticated: false,
  userId: null,
  isPro: false,
  setAuthenticated: (value) => set({ isAuthenticated: value }),
  setUserId: (id) => set({ userId: id }),
  setIsPro: (value) => set({ isPro: value }),
}));