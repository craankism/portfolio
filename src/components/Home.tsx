import type { JSX } from "react";
import { useNavigate } from "react-router";
import turtleDuck from "../assets/turtle_duck.jpg";
import { Box, Button, Grid, Stack } from "@mui/material";
import ProjectMenuModal from "./modals/ProjectsMenuModal";
import { buttonStyle } from "../constants/buttonStyle";
import { usePropStore } from "../stores/PropStore";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const { setOpenProjectsModal } = usePropStore();
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
              sx={{ ...buttonStyle, minHeight: "80px", fontSize: "1.5rem" }}
              onClick={() => navigate("/about")}
            >
              About me
            </Button>
            <Button
              fullWidth
              sx={{ ...buttonStyle, minHeight: "80px", fontSize: "1.5rem" }}
              onClick={() => setOpenProjectsModal(true)}
            >
              Projects
            </Button>
            <Button
              fullWidth
              sx={{ ...buttonStyle, minHeight: "80px", fontSize: "1.5rem" }}
              onClick={() =>
                window.open("https://github.com/craankism", "_blank")
              }
            >
              GitHub
            </Button>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Button
            onClick={() =>
              window.open("https://github.com/craankism", "_blank")
            }
            sx={{ "&:hover": { background: "none" } }}
          >
            <Box
              component="img"
              src={turtleDuck}
              alt="Turtle Duck from Avatar"
              sx={{
                width: {xs: "70vw",md: "30vw"},
                borderRadius: "50%",
                "&:hover": {
                  boxShadow: "0 0 20px #333333",
                },
              }}
            />
          </Button>
        </Grid>
      </Grid>
      <ProjectMenuModal />
    </>
  );
};

export default Home;
