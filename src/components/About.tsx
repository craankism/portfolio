import { Box } from "@mui/material";
import type { JSX } from "react";
import { useMemo, useRef } from "react";
import { usePropStore } from "../stores/PropStore";
import { useScrollToSection } from "../hooks/useScrollToSection";
import Me from "./about/Me";
import Diploma from "./about/Diploma";

const About = (): JSX.Element => {
  const { selectedAbout, setSelectedAbout } = usePropStore();

  const diplomaRef = useRef<HTMLDivElement>(null);
  const meRef = useRef<HTMLDivElement>(null);

  const sectionRefs = useMemo(() => ({ Me: meRef, Diploma: diplomaRef }), []);

  useScrollToSection(
    selectedAbout,
    () => setSelectedAbout(null),
    sectionRefs,
    100,
  );

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
