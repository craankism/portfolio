import type { JSX } from "react";
import wateringSystem1 from "../../assets/watering_system1.jpg";
import wateringSystem2 from "../../assets/watering_system2.jpg";
import { Grid, Typography } from "@mui/material";
import GithubLogoLink from "../reusables/GithubLogoLink";
import BulletList from "../reusables/BulletList";

const hardware = [
  "Arduino Uno R4 WiFi",
  "Modulino Thermo",
  "Modulino Buzzer",
  "Soil moisture sensor (capacitive)",
  "OLED Display (128x64 SSD1306)",
  "Breadboard",
  "Water pump",
  "Water rings",
  "Silicone hose",
  "Relay module",
];

const WateringSystem = (): JSX.Element => {
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
        <GithubLogoLink href="https://github.com/craankism/automatic_watering_system" />
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
        <BulletList title="Hardware used:" items={hardware} />
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
