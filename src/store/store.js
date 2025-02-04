import { create } from 'zustand';
import { data } from '../data/data';
import * as Haptics from "expo-haptics";

export const useStore = create((set) => ({
  selectedMap: null,
  mapData: null,
  maps: data,
  random: () => set(() => {
    const newId = Math.floor(Math.random() * 7) + 1;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    return {
      selectedMap: newId,
      mapData: data.find(item => Number(item.id) === newId)
    };
  }),
}));
