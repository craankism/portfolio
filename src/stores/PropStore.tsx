import { create } from "zustand";

type PropState = {
  openProjectsModal: boolean;
  setOpenProjectsModal: (open: boolean) => void;
  selectedProject: string | null;
  setSelectedProject: (project: string | null) => void;
};

export const usePropStore = create<PropState>((set) => ({
  openProjectsModal: false,
  selectedProject: null,

  setOpenProjectsModal: (open: boolean) => {
    set({ openProjectsModal: open });
  },

  setSelectedProject: (project: string | null) => {
    set({ selectedProject: project });
  },
}));
