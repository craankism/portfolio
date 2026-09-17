import type { JSX } from "react";
import scPreview1 from "../../assets/scPreview1.png";
import scPreview2 from "../../assets/scPreview2.png";
import scPreview3 from "../../assets/scPreview3.png";
import scPreview4 from "../../assets/scPreview4.png";
import scPreview5 from "../../assets/scPreview5.png";
import scPreview6 from "../../assets/scPreview6.png";
import scPreview7 from "../../assets/scPreview7.png";
import scPreview8 from "../../assets/scPreview8.png";

import { Grid, Typography } from "@mui/material";
import GithubLogoLink from "../reusables/GithubLogoLink";
import BulletList from "../reusables/BulletList";
import ImageSlider from "../reusables/ImageSlider";

const images: string[] = [
  scPreview1,
  scPreview2,
  scPreview3,
  scPreview4,
  scPreview5,
  scPreview6,
  scPreview7,
  scPreview8,
];

const keyFeatures = [
  "Real-time collaborative document editing (Yjs/Hocuspocus)",
  "Local AI assistant with GPU/CPU auto-detection",
  "Secure object storage via MinIO",
  "Role-based access control with Super Admin provisioning",
  "AES encryption for sensitive data",
  "JWT authentication with refresh tokens",
];

const techStack = [
  "React (TypeScript) + Material UI + Zustand",
  "Spring Boot 4.1 (Java) + Hibernate/JPA",
  "Hocuspocus v2.15.3 (Node.js v22)",
  "PostgreSQL + MinIO",
  "Ollama AI (qwen2.5-coder)",
  "Nginx + Docker Compose",
];

const SchroedingersChat = (): JSX.Element => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ textAlign: "center", alignItems: "center", pt: { xs: 2, md: 3 } }}
    >
      <Grid size={12}>
        <Typography variant="h1">Schroedinger's Chat</Typography>
      </Grid>
      <Grid size={12}>
        <GithubLogoLink href="https://github.com/craankism/schroedingers_chat" />
      </Grid>
      <ImageSlider
        images={images}
        alt="Screenshot of Schroedinger's Chat application"
        imgStyle={{ maxWidth: "100%", height: "auto" }}
      />

      <Grid size={12}>
        Schroedinger's Chat is a fully self-hosted, privacy-focused chat and
        collaboration platform with built-in local AI capabilities. It combines
        real-time collaborative document editing, secure file storage,
        role-based access control, and AI-powered assistance powered by Ollama
        (qwen2.5-coder), all running entirely on your own infrastructure. The
        platform features AES encryption for data at rest, JWT-based
        authentication with refresh token support, and automatic GPU detection
        for optimal AI model selection.
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
        <BulletList title="Key Features:" items={keyFeatures} />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
        <BulletList title="Tech Stack:" items={techStack} />
      </Grid>
    </Grid>
  );
};

export default SchroedingersChat;
