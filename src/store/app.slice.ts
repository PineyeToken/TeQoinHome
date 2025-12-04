import { StateCreator } from 'zustand';

export interface AppSlice {
    reload: number;
    setReload: () => void;
}

export const createAppSlice: StateCreator<AppSlice> = set => ({
    reload: Math.random(),
    setReload: () => set({ reload: Math.random() })
});
