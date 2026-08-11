import Modal from "@mui/material/Modal";
import type { JSX } from "@emotion/react/jsx-runtime";
import { usePropStore } from "../../stores/PropStore";
import { Button, Stack } from "@mui/material";
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

const about = ["Me", "Diploma"];

const AboutMenuModal = (): JSX.Element => {
  const { openAboutModal, setOpenAboutModal, setSelectedAbout } =
    usePropStore();
  const navigate = useNavigate();
  const handleClose = () => setOpenAboutModal(false);

  const handleAboutClick = (about: string) => {
    setSelectedAbout(about);
    setOpenAboutModal(false);
    navigate("/about");
  };

  return (
    <Modal
      open={openAboutModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack sx={style} spacing={2}>
        {about.map((about) => (
          <Button key={about} onClick={() => handleAboutClick(about)}>
            {about}
          </Button>
        ))}
      </Stack>
    </Modal>
  );
};

export default AboutMenuModal;
