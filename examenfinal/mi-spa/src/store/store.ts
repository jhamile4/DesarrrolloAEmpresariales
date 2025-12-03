import { create } from 'zustand';


export interface Item {
    id: number;
    title: string;
    body: string;
}

interface StoreState {
    items: Item[];
    page: number;
    perPage: number;
    setItems: (items: Item[]) => void;
    setPage: (page: number) => void;
}
export const useStore = create<StoreState>((set: any) => ({
    items: [],
    page: 1,
    perPage: 6,
    setItems: (items: Item[]) => set({ items }),
    setPage: (p: number) => set({ page : p}),
}));