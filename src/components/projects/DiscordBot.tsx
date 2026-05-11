import type { JSX } from "react";
import githubLogo from "../../assets/GitHub_Lockup_Black.svg";
import discordBotICS from "../../assets/discord_bot_ics.png";
import discordBotPopup from "../../assets/discord_bot_popup.png";
import { Grid, Typography } from "@mui/material";

const DiscordBot = (): JSX.Element => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ textAlign: "center", alignItems: "center", pt: { xs: 2, md: 3 } }}
    >
      <title>Discord Bot</title>
      <Grid size={6}>
        <Typography variant="h1">Discord Bot System</Typography>
      </Grid>
      <Grid size={6}>
        <a href="https://github.com/craankism/discord-bot">
          <img
            className="content-item logo"
            src={githubLogo}
            alt="GitHub Link to Repository"
          />
        </a>
      </Grid>

      <Grid size={12}>
        <p className="content-item">
          I created a discord bot, to create appointments with a simple command.
          If you type /calendar in discord, the bot answers with a pop-up form,
          where you can enter details of the appointment. After the details are
          submitted, the bot processes the data and returns an ics file. The bot
          can run on a server via docker.
        </p>
      </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
        <ul className="content-item list-start">
          <h2>Technologies used:</h2>
          <li>JavaScript</li>
          <li>Node</li>
          <li>discord.js</li>
          <li>Discord</li>
          <li>Docker</li>
        </ul>
      </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
        <img
          className="content-item phone-photo"
          id="discord_bot_popup"
          src={discordBotPopup}
          alt="Full photo of discord pop up"
        />
      </Grid>

      <Grid size={12}>
        <img
          className="content-item phone-photo"
          src={discordBotICS}
          alt="Full photo of the discord ics response"
        />
      </Grid>
    </Grid>
  );
};

export default DiscordBot;
