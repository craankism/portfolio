import type { JSX } from "react";
import TopNav from "../nav/TopNav";
import githubLogo from "../../assets/GitHub_Lockup_Black.svg";
import wateringSystem1 from "../../assets/watering_system1.jpg";
import wateringSystem2 from "../../assets/watering_system2.jpg";

const WateringSystem = (): JSX.Element => {
  return (
    <>
      <head>
        <title>Watering System</title>
      </head>

      <body className="combine_containers">
        <TopNav />
        <main className="content">
          <h1 className="content-item">Watering System</h1>
          <a href="https://github.com/craankism/automatic_watering_system">
            <img
              className="content-item logo"
              src={githubLogo}
              alt="GitHub Link to Repository"
            />
          </a>
          <p className="content-item">
            This is my first Arduino project. I used the Arduino framework, but
            with VSCode as the IDE. So I had to integrate PlatformIO to manage
            the libraries and upload process. The system uses a soil moisture
            sensor to determine when to water the plant. When the moisture level
            drops below a certain threshold, the water pump is activated to
            water the plant for a set duration. It also has an OLED display to
            show the current soil moisture level, air humidity and show an
            alarm, if any of them drops below a certain threshold.
          </p>
          <ul className="content-item list-start">
            <h2>Hardware used:</h2>
            <li>Arduino Uno R4 WiFi</li>
            <li>Modulino Thermo</li>
            <li>Modulino Buzzer</li>
            <li>Soil moisture sensor (capacitive)</li>
            <li>OLED Display (128x64 SSD1306)</li>
            <li>Breadboard</li>
            <li>Water pump</li>
            <li>Water rings</li>
            <li>Silicone hose</li>
            <li>Relay module</li>
          </ul>
          <img
            className="content-item phone-photo"
            src={wateringSystem1}
            alt="Full photo of the watering system"
            loading="lazy"
          />

          <img
            className="content-item phone-photo"
            src={wateringSystem2}
            alt="Full photo of the watering system"
            loading="lazy"
          />
        </main>
      </body>
    </>
  );
};

export default WateringSystem;
