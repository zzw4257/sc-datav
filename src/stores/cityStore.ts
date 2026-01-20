import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CityGeoJSON } from "@/types/map";

export interface CityConfig {
  id: string;
  name: string;
  geoJson: CityGeoJSON;
  mapTextureUrl: string;
  normalMapTextureUrl: string;
  stats: Record<string, { population?: number; [key: string]: any }>;
}

interface CityState {
  cities: CityConfig[];
  addCity: (city: CityConfig) => void;
  removeCity: (id: string) => void;
  getCity: (id: string) => CityConfig | undefined;
}

export const useCityStore = create<CityState>()(
  persist(
    (set, get) => ({
      cities: [],
      addCity: (city) =>
        set((state) => ({
          cities: [...state.cities, city],
        })),
      removeCity: (id) =>
        set((state) => ({
          cities: state.cities.filter((c) => c.id !== id),
        })),
      getCity: (id) => get().cities.find((c) => c.id === id),
    }),
    {
      name: "city-storage",
    }
  )
);
