import { getCurrentTime } from "../api/time";
import { getQuote } from "../api/quote";
import { create } from "zustand";
import { getCurrentIP } from "../api/ip";

export const useClockStore = create((set) => ({
  time: null,
  quote: null,
  ip: null,
  isMoreActive: false,
  toggleMore: () => set(state => ({ isMoreActive: !state.isMoreActive })),
  fetchTime: async () => {
    try {
      const time = await getCurrentTime();
      set({ time });
    } catch (error) {
      console.error(error);
    }
  },
  fetchQuote: async () => {
    try {
      const quote = await getQuote();
      set({ quote });
    } catch (error) {
      console.error(error);
    }
  },
  fetchIP: async () => {
    try {
        const ip = await getCurrentIP();
        set({ ip});
    } catch(error) {
        console.error(error)
    }
  }
}));