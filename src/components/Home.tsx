import type { JSX } from "react";
import turtleDuck from "../assets/turtle_duck.jpg";
import { Box, Button, Grid, Stack } from "@mui/material";
import ProjectMenuModal from "./modals/ProjectsMenuModal";
import { usePropStore } from "../stores/PropStore";
import AboutMenuModal from "./modals/AboutMenuModal";

const Home = (): JSX.Element => {
  const { setOpenProjectsModal, setOpenAboutModal } = usePropStore();
  return (
    <>
      <Grid
        container
        sx={{
          textAlign: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <title>Portfolio</title>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack>
            <Button
              fullWidth
              sx={{ minHeight: "80px", fontSize: "1.5rem" }}
              onClick={() => setOpenAboutModal(true)}
            >
              About me
            </Button>
            <Button
              fullWidth
              sx={{ minHeight: "80px", fontSize: "1.5rem" }}
              onClick={() => setOpenProjectsModal(true)}
            >
              Projects
            </Button>
            <Button
              fullWidth
              sx={{ minHeight: "80px", fontSize: "1.5rem" }}
              onClick={() =>
                window.open("https://github.com/craankism", "_blank")
              }
            >
              GitHub
            </Button>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
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
              src={turtleDuck}
              alt="GitLab Link to Repository"
              style={{ width: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
      <ProjectMenuModal />
      <AboutMenuModal />
    </>
  );
};

export default Home;
