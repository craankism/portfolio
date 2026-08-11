import { create } from "zustand";

type PropState = {
  openProjectsModal: boolean;
  setOpenProjectsModal: (open: boolean) => void;
  selectedProject: string | null;
  setSelectedProject: (project: string | null) => void;
  openAboutModal: boolean;
  setOpenAboutModal: (open: boolean) => void;
  selectedAbout: string | null;
  setSelectedAbout: (about: string | null) => void;
};

export const usePropStore = create<PropState>((set) => ({
  openProjectsModal: false,
  selectedProject: null,
  openAboutModal: false,
  selectedAbout: null,

  setOpenProjectsModal: (open: boolean) => {
    set({ openProjectsModal: open });
  },

  setSelectedProject: (project: string | null) => {
    set({ selectedProject: project });
  },

  setOpenAboutModal: (open: boolean) => {
    set({ openAboutModal: open });
  },

  setSelectedAbout: (about: string | null) => {
    set({ selectedAbout: about });
  },
}));
