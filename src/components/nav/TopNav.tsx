import { type JSX } from "react";
import cv from "../../assets/cv.pdf";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router";
import { usePropStore } from "../../stores/PropStore";
import ProjectMenuModal from "../modals/ProjectsMenuModal";
import { buttonStyle } from "../../constants/buttonStyle";

const TopNav = (): JSX.Element => {
  const navigate = useNavigate();
  const { setOpenProjectsModal } = usePropStore();

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
          <Button sx={buttonStyle} onClick={() => navigate("/")}>
            Home
          </Button>
          <Button sx={buttonStyle} onClick={() => navigate("/about")}>
            About
          </Button>
          <Button sx={buttonStyle} onClick={() => setOpenProjectsModal(true)}>
            Projects
          </Button>
          <Button
            sx={buttonStyle}
            onClick={() =>
              window.open("https://github.com/craankism", "_blank")
            }
          >
            GitHub
          </Button>
          <Button sx={buttonStyle} onClick={() => window.open(cv, "_blank")}>
            Resume
          </Button>
        </Toolbar>
      </AppBar>
      <ProjectMenuModal />
    </Box>
  );
};

export default TopNav;
