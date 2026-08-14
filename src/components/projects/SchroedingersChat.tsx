import { useState, type JSX } from "react";
import githubLogo from "../../assets/GitHub_Invertocat_Black.svg";
import scPreview1 from "../../assets/scPreview1.png";
import scPreview2 from "../../assets/scPreview2.png";
import scPreview3 from "../../assets/scPreview3.png";
import scPreview4 from "../../assets/scPreview4.png";
import scPreview5 from "../../assets/scPreview5.png";
import scPreview6 from "../../assets/scPreview6.png";
import scPreview7 from "../../assets/scPreview7.png";
import scPreview8 from "../../assets/scPreview8.png";

import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
  ListSubheader,
} from "@mui/material";
import { ArrowRight, ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  githubLogoStyleXS,
  githubLogoStyleMD,
} from "../../constants/githubLogoStyle";

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

const SchroedingersChat = (): JSX.Element => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

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
        <Box
          onClick={() =>
            window.open(
              "https://github.com/craankism/schroedingers_chat",
              "_blank",
            )
          }
          sx={{ cursor: "pointer" }}
        >
          <img
            className="content-item logo"
            src={githubLogo}
            alt="GitLab Link to Repository"
            style={isMdUp ? githubLogoStyleMD : githubLogoStyleXS}
          />
        </Box>
      </Grid>
      <Grid
        container
        spacing={0}
        size={12}
        sx={{ alignItems: "stretch", justifyContent: "center" }}
      >
        <Grid size={1} sx={{ display: "flex" }}>
          <Button
            onClick={() =>
              setCurrentImageIndex(
                (prev) => (prev - 1 + images.length) % images.length,
              )
            }
            sx={{
              minWidth: { xs: "auto", sm: "64px" },
              p: { xs: 0.5, sm: 1 },
              height: "100%",
            }}
          >
            <ChevronLeft />
          </Button>
        </Grid>
        <Grid size={10}>
          <Box sx={{ px: { xs: 0.5, sm: 1 } }}>
            <img
              src={images[currentImageIndex]}
              alt="Screenshot of Schroedinger's Chat application"
              loading="lazy"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid size={1} sx={{ display: "flex" }}>
          <Button
            onClick={() =>
              setCurrentImageIndex((prev) => (prev + 1) % images.length)
            }
            sx={{
              minWidth: { xs: "auto", sm: "64px" },
              p: { xs: 0.5, sm: 1 },
              height: "100%",
            }}
          >
            <ChevronRight />
          </Button>
        </Grid>
      </Grid>

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
        <List className="content-item list-start">
          <ListSubheader>Key Features:</ListSubheader>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Real-time collaborative document editing (Yjs/Hocuspocus)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Local AI assistant with GPU/CPU auto-detection" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Secure object storage via MinIO" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Role-based access control with Super Admin provisioning" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="AES encryption for sensitive data" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="JWT authentication with refresh tokens" />
          </ListItem>
        </List>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
        <List className="content-item list-start">
          <ListSubheader>Tech Stack:</ListSubheader>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="React (TypeScript) + Material UI + Zustand" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Spring Boot 4.1 (Java) + Hibernate/JPA" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Hocuspocus v2.15.3 (Node.js v22)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="PostgreSQL + MinIO" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Ollama AI (qwen2.5-coder)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Nginx + Docker Compose" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default SchroedingersChat;
