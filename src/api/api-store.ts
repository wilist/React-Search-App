import { create } from "zustand"

interface UseApiStoreType {
    apiToken: null|string;
    setApiToken: ({ apiToken }: { apiToken: UseApiStoreType['apiToken'] }) => void;
}

export const useApiStore = create<UseApiStoreType>((set) => ({
    apiToken: null,
    setApiToken: ({ apiToken }) => {
        set({ apiToken })
    },
}))