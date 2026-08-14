import type { JSX } from "react";
import githubLogo from "../../assets/GitHub_Invertocat_Black.svg";
import discordBotICS from "../../assets/discord_bot_ics.png";
import discordBotPopup from "../../assets/discord_bot_popup.png";
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
import { ArrowRight } from "@mui/icons-material";
import {
  githubLogoStyleMD,
  githubLogoStyleXS,
} from "../../constants/githubLogoStyle";

const DiscordBot = (): JSX.Element => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
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
        <Box
          onClick={() =>
            window.open("https://github.com/craankism/discord-bot", "_blank")
          }
          sx={{ cursor: "pointer" }}
        >
          <img
            className="content-item logo"
            src={githubLogo}
            alt="GitLab Link to Repository"
            style={isMdUp ? githubLogoStyleMD : githubLogoStyleXS}
          />
        </Box>
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
        <List className="content-item list-start">
          <ListSubheader>Technologies used:</ListSubheader>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="JavaScript" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Node" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="discord.js" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Discord" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Docker/Docker Compose" />
          </ListItem>
        </List>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src={discordBotPopup}
          alt="Full photo of discord pop up"
        />
      </Grid>

      <Grid size={12}>
        <img
          src={discordBotICS}
          alt="Full photo of the discord ics response"
        />
      </Grid>
    </Grid>
  );
};

export default DiscordBot;
