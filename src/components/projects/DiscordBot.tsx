import type { JSX } from "react";
import discordBotICS from "../../assets/discord_bot_ics.png";
import discordBotPopup from "../../assets/discord_bot_popup.png";
import { Grid, Typography } from "@mui/material";
import GithubLogoLink from "../reusables/GithubLogoLink";
import BulletList from "../reusables/BulletList";

const technologies = [
  "JavaScript",
  "Node",
  "discord.js",
  "Discord",
  "Docker/Docker Compose",
];

const DiscordBot = (): JSX.Element => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ textAlign: "center", alignItems: "start", pt: { xs: 2, md: 3 } }}
    >
      <Grid size={12}>
        <Typography variant="h1">Discord Bot</Typography>
      </Grid>
      <Grid size={12}>
        <GithubLogoLink href="https://github.com/craankism/discord-bot" />
      </Grid>

      <Grid size={12}>
        <p>
          I created a discord bot, to create appointments with a simple command.
          If you type /calendar in discord, the bot answers with a pop-up form,
          where you can enter details of the appointment. After the details are
          submitted, the bot processes the data and returns an ics file. The bot
          can run on a server via docker.
        </p>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
        <BulletList title="Technologies used:" items={technologies} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img src={discordBotPopup} alt="Full photo of discord pop up" />
      </Grid>

      <Grid size={12}>
        <img src={discordBotICS} alt="Full photo of the discord ics response" />
      </Grid>
    </Grid>
  );
};

export default DiscordBot;
