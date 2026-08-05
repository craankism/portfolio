import Modal from "@mui/material/Modal";
import type { JSX } from "@emotion/react/jsx-runtime";
import { usePropStore } from "../../stores/PropStore";
import { Button, Stack } from "@mui/material";
import { buttonStyle } from "../../constants/buttonStyle";
import { useNavigate } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "#F5DCC6",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const projects = [
  "Schroedinger's Chat",
  "Watering System",
  "Calculator",
  "Sorter",
  "To-Do List",
  "Discord Bot",
];

const ProjectMenuModal = (): JSX.Element => {
  const { openProjectsModal, setOpenProjectsModal, setSelectedProject } =
    usePropStore();
  const navigate = useNavigate();
  const handleClose = () => setOpenProjectsModal(false);

  const handleProjectClick = (project: string) => {
    setSelectedProject(project);
    setOpenProjectsModal(false);
    navigate("/projects");
  };

  return (
    <Modal
      open={openProjectsModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack sx={style} spacing={2}>
        {projects.map((project) => (
          <Button
            key={project}
            sx={buttonStyle}
            onClick={() => handleProjectClick(project)}
          >
            {project}
          </Button>
        ))}
      </Stack>
    </Modal>
  );
};

export default ProjectMenuModal;
