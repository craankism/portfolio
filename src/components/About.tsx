import { Box } from "@mui/material";
import type { JSX } from "react";
import { useEffect, useRef } from "react";
import { usePropStore } from "../stores/PropStore";
import Me from "./about/Me";
import Diploma from "./about/Diploma";

const About = (): JSX.Element => {
  const { selectedAbout, setSelectedAbout } = usePropStore();

  const diplomaRef = useRef<HTMLDivElement>(null);
  const meRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedAbout) return;

    const projectRefs: Record<
      string,
      React.RefObject<HTMLDivElement | null>
    > = {
      Me: meRef,
      Diploma: diplomaRef,
    };

    // Delay scroll to ensure components are rendered
    const timeoutId = setTimeout(() => {
      if (projectRefs[selectedAbout]) {
        projectRefs[selectedAbout].current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setSelectedAbout(null);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [selectedAbout, setSelectedAbout]);

  return (
    <Box sx={{ mt: 10, textAlign: "center", alignItems: "center" }}>
      <title>About</title>

      <Box ref={meRef} sx={{ scrollMarginTop: 60 }}>
        <Me />
      </Box>

      <Box ref={diplomaRef} sx={{ scrollMarginTop: 60 }}>
        <Diploma />
      </Box>
    </Box>
  );
};

export default About;
