import { Box } from "@mui/material";
import type { JSX } from "react";
import { useEffect, useRef } from "react";
import SchroedingersChat from "./projects/SchroedingersChat";
import WateringSystem from "./projects/WateringSystem";
import Calc from "./projects/Calc";
import Sorter from "./projects/Sorter";
import Todo from "./projects/Todo";
import DiscordBot from "./projects/DiscordBot";
import { usePropStore } from "../stores/PropStore";

const Projects = (): JSX.Element => {
  const { selectedProject, setSelectedProject } = usePropStore();

  const schroedingersRef = useRef<HTMLDivElement>(null);
  const wateringRef = useRef<HTMLDivElement>(null);
  const calcRef = useRef<HTMLDivElement>(null);
  const sorterRef = useRef<HTMLDivElement>(null);
  const todoRef = useRef<HTMLDivElement>(null);
  const discordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const projectRefs: Record<
      string,
      React.RefObject<HTMLDivElement | null>
    > = {
      "Schroedinger's Chat": schroedingersRef,
      "Watering System": wateringRef,
      Calculator: calcRef,
      Sorter: sorterRef,
      "To-Do List": todoRef,
      "Discord Bot": discordRef,
    };

    // Delay scroll to ensure components are rendered
    const timeoutId = setTimeout(() => {
      if (projectRefs[selectedProject]) {
        projectRefs[selectedProject].current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setSelectedProject(null);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [selectedProject, setSelectedProject]);

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
