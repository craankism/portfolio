import { Box } from "@mui/material";
import type { JSX } from "react";
import { useMemo, useRef } from "react";
import SchroedingersChat from "./projects/SchroedingersChat";
import WateringSystem from "./projects/WateringSystem";
import Calc from "./projects/Calc";
import Sorter from "./projects/Sorter";
import Todo from "./projects/Todo";
import DiscordBot from "./projects/DiscordBot";
import { usePropStore } from "../stores/PropStore";
import { useScrollToSection } from "../hooks/useScrollToSection";

const Projects = (): JSX.Element => {
  const { selectedProject, setSelectedProject } = usePropStore();

  const schroedingersRef = useRef<HTMLDivElement>(null);
  const wateringRef = useRef<HTMLDivElement>(null);
  const calcRef = useRef<HTMLDivElement>(null);
  const sorterRef = useRef<HTMLDivElement>(null);
  const todoRef = useRef<HTMLDivElement>(null);
  const discordRef = useRef<HTMLDivElement>(null);

  const projectRefs = useMemo(
    () => ({
      "Schroedinger's Chat": schroedingersRef,
      "Watering System": wateringRef,
      Calculator: calcRef,
      Sorter: sorterRef,
      "To-Do List": todoRef,
      "Discord Bot": discordRef,
    }),
    [],
  );

  // Longer delay than About: this page renders more/heavier project
  // sections, so it needs extra time before scrollIntoView measures correctly
  useScrollToSection(
    selectedProject,
    () => setSelectedProject(null),
    projectRefs,
    500,
  );

  return (
    <Box sx={{ mt: 10, textAlign: "center", alignItems: "center" }}>
      <title>Projects</title>

      <Box ref={schroedingersRef} sx={{ scrollMarginTop: 60 }}>
        <SchroedingersChat />
      </Box>

      <Box ref={wateringRef} sx={{ scrollMarginTop: 60 }}>
        <WateringSystem />
      </Box>

      <Box ref={calcRef} sx={{ scrollMarginTop: 60 }}>
        <Calc />
      </Box>

      <Box ref={sorterRef} sx={{ scrollMarginTop: 60 }}>
        <Sorter />
      </Box>

      <Box ref={todoRef} sx={{ scrollMarginTop: 60 }}>
        <Todo />
      </Box>

      <Box ref={discordRef} sx={{ scrollMarginTop: 60 }}>
        <DiscordBot />
      </Box>
    </Box>
  );
};

export default Projects;
