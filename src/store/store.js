import { create } from 'zustand';

export const useStore = create((set) => ({
  selectedMap: null,
  random: () => set((state) => ({selectedMap : (Math.floor(Math.random() * 7 + 1))})),
}))