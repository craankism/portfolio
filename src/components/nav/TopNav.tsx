import { type JSX } from "react";
import cv from "../../assets/cv.pdf";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router";
import { usePropStore } from "../../stores/PropStore";
import ProjectMenuModal from "../modals/ProjectsMenuModal";
import AboutMenuModal from "../modals/AboutMenuModal";

const TopNav = (): JSX.Element => {
  const navigate = useNavigate();
  const { setOpenProjectsModal, setOpenAboutModal } = usePropStore();

  return (
    <Box sx={{ flexGrow: 1, order: -1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: "none",
          backdropFilter: "blur(5px)",
          borderBottom: "#333333 1px solid",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => setOpenAboutModal(true)}>About</Button>
          <Button onClick={() => setOpenProjectsModal(true)}>Projects</Button>
          <Button
            onClick={() =>
              window.open("https://github.com/craankism", "_blank")
            }
          >
            GitHub
          </Button>
          <Button onClick={() => window.open(cv, "_blank")}>Resume</Button>
        </Toolbar>
      </AppBar>
      <ProjectMenuModal />
      <AboutMenuModal />
    </Box>
  );
};

export default TopNav;
