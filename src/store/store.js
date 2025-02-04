import { create } from 'zustand';
import { data } from '../data/data';

export const useStore = create((set) => ({
  selectedMap: null,
  mapData: null,
  random: () => set(() => {
    const newId = Math.floor(Math.random() * 7) + 1;
    return {
      selectedMap: newId,
      mapData: data.find(item => Number(item.id) === newId)
    };
  }),
}));

console.log("Données :" + data )