import { create } from "zustand";

interface Container {
  id: string;
  name: string;
  status: string;
  createdAt: string;
  imageName: string;
}

interface ContainerState {
  container: Container | null;
  setContainer: (container: Container) => void;
}

export const useContainerStore = create<ContainerState>((set) => ({
  container: null,
  setContainer: (container) => set({ container }),
}));
