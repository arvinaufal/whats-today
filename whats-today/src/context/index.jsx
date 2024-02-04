import { create } from 'zustand'

export const usePage = create((set) => ({
    page: 1,
    setPage: (newPage) => set(() => ({ page: newPage })),
    removeAllpage: () => set({ page: 0 }),
}));