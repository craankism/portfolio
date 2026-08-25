import Modal from "@mui/material/Modal";
import type { JSX } from "@emotion/react/jsx-runtime";
import { usePropStore } from "../../stores/PropStore";
import { Button, Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router";
import { Star } from "@mui/icons-material";
import { modalStyle } from "../../constants/modalStyle";

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
      <Stack sx={modalStyle} spacing={2}>
        <Button onClick={() => navigate("/projects")}>Projects</Button>
        <Divider />
        {projects.map((project) => (
          <Button key={project} onClick={() => handleProjectClick(project)}>
            {project === "Schroedinger's Chat" ? <Star /> : ""}
            {project}
          </Button>
        ))}
      </Stack>
    </Modal>
  );
};

export default ProjectMenuModal;
