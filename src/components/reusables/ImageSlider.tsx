import { useState, type JSX } from "react";
import { Box, Button, Grid } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import type { SxProps, Theme } from "@mui/material/styles";

type ImageSliderProps = {
  images: string[];
  alt: string;
  boxSx?: SxProps<Theme>;
  imgStyle?: React.CSSProperties;
};

const navButtonSx = {
  minWidth: { xs: "auto", sm: "64px" },
  p: { xs: 0.5, sm: 1 },
  height: "100%",
};

const ImageSlider = ({
  images,
  alt,
  boxSx,
  imgStyle,
}: ImageSliderProps): JSX.Element => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // +images.length keeps the result positive before wrapping via modulo
  const showPrevious = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const showNext = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);

  return (
    <Grid
      container
      spacing={0}
      size={12}
      sx={{ alignItems: "stretch", justifyContent: "center" }}
    >
      <Grid size={1} sx={{ display: "flex" }}>
        <Button onClick={showPrevious} sx={navButtonSx}>
          <ChevronLeft />
        </Button>
      </Grid>
      <Grid size={10}>
        <Box sx={{ px: { xs: 0.5, sm: 1 }, ...boxSx }}>
          <img
            src={images[currentImageIndex]}
            alt={alt}
            loading="lazy"
            style={imgStyle}
          />
        </Box>
      </Grid>
      <Grid size={1} sx={{ display: "flex" }}>
        <Button onClick={showNext} sx={navButtonSx}>
          <ChevronRight />
        </Button>
      </Grid>
    </Grid>
  );
};

export default ImageSlider;
