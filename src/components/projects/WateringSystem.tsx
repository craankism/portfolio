import type { JSX } from "react";
import githubLogo from "../../assets/GitHub_Lockup_Black.svg";
import wateringSystem1 from "../../assets/watering_system1.jpg";
import wateringSystem2 from "../../assets/watering_system2.jpg";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

const WateringSystem = (): JSX.Element => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ textAlign: "center", alignItems: "center", pt: { xs: 2, md: 3 } }}
    >
      <title>Watering System</title>
      <Grid size={6}>
        <Typography variant="h1">Watering System</Typography>
      </Grid>
      <Grid size={6}>
        <a href="https://github.com/craankism/automatic_watering_system">
          <img
            className="content-item logo"
            src={githubLogo}
            alt="GitHub Link to Repository"
          />
        </a>
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
        <List className="content-item list-start">
          <Typography variant="h2">Hardware used:</Typography>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Arduino Uno R4 WiFi" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Modulino Thermo" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Modulino Buzzer" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Soil moisture sensor (capacitive)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="OLED Display (128x64 SSD1306)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Breadboard" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Water pump" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Water rings" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Silicone hose" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Relay module" />
          </ListItem>
        </List>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          className="content-item phone-photo"
          src={wateringSystem1}
          alt="Full photo of the watering system"
          loading="lazy"
        />
      </Grid>
      <Grid size={12}>
        <img
          className="content-item phone-photo"
          src={wateringSystem2}
          alt="Full photo of the watering system"
          loading="lazy"
        />
      </Grid>
    </Grid>
  );
};

export default WateringSystem;
