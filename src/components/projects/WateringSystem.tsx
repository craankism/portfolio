import type { JSX } from "react";
import githubLogo from "../../assets/GitHub_Invertocat_Black.svg";
import wateringSystem1 from "../../assets/watering_system1.jpg";
import wateringSystem2 from "../../assets/watering_system2.jpg";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Circle } from "@mui/icons-material";
import {
  githubLogoStyleMD,
  githubLogoStyleXS,
} from "../../constants/githubLogoStyle";

const WateringSystem = (): JSX.Element => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid
      container
      spacing={2}
      sx={{ textAlign: "center", alignItems: "start", pt: { xs: 2, md: 3 } }}
    >
      <Grid size={12}>
        <Typography variant="h1">Watering System</Typography>
      </Grid>
      <Grid size={12}>
        <Box
          onClick={() =>
            window.open(
              "https://github.com/craankism/automatic_watering_system",
              "_blank",
            )
          }
          sx={{ cursor: "pointer" }}
        >
          <img
            src={githubLogo}
            alt="GitLab Link to Repository"
            style={isMdUp ? githubLogoStyleMD : githubLogoStyleXS}
          />
        </Box>
      </Grid>

      <Grid size={12}>
        This is my first Arduino project. I used the Arduino framework, but with
        VSCode as the IDE. So I had to integrate PlatformIO to manage the
        libraries and upload process. The system uses a soil moisture sensor to
        determine when to water the plant. When the moisture level drops below a
        certain threshold, the water pump is activated to water the plant for a
        set duration. It also has an OLED display to show the current soil
        moisture level, air humidity and show an alarm, if any of them drops
        below a certain threshold.
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
        <List className="list-start">
          <ListSubheader>Hardware used:</ListSubheader>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Arduino Uno R4 WiFi" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Modulino Thermo" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Modulino Buzzer" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Soil moisture sensor (capacitive)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="OLED Display (128x64 SSD1306)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Breadboard" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Water pump" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Water rings" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Silicone hose" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Relay module" />
          </ListItem>
        </List>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src={wateringSystem1}
          alt="Full photo of the watering system"
          loading="lazy"
        />
        <img
          src={wateringSystem2}
          alt="Full photo of the watering system"
          loading="lazy"
        />
      </Grid>
    </Grid>
  );
};

export default WateringSystem;
