import Modal from "@mui/material/Modal";
import type { JSX } from "@emotion/react/jsx-runtime";
import { usePropStore } from "../../stores/PropStore";
import { Button, Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router";
import { modalStyle } from "../../constants/modalStyle";

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
      <Stack sx={modalStyle} spacing={2}>
        <Button
          onClick={() => {
            setOpenAboutModal(false);
            navigate("/about");
          }}
        >
          About me
        </Button>
        <Divider />
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
