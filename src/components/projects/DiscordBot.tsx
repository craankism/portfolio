import type { JSX } from "react";
import TopNav from "../nav/TopNav";

const DiscordBot = (): JSX.Element => {
  return (
    <>
      <head>
        <title>Discord Bot</title>
      </head>

      <body className="combine_containers">
        <TopNav />
        <main className="content">
          <h1 className="content-item">Discord Bot</h1>
          <a href="https://github.com/craankism/discord-bot">
            <img
              className="content-item logo"
              src="../src/assets/GitHub_Lockup_Black.svg"
              alt="GitHub Link to Repository"
            />
          </a>
          <p className="content-item">
            I created a discord bot, to create appointments with a simple
            command. If you type /calendar in discord, the bot answers with a
            pop-up form, where you can enter details of the appointment. After
            the details are submitted, the bot processes the data and returns an
            ics file. The bot can run on a server via docker.
          </p>
          <ul className="content-item list-start">
            <h2>Technologies used:</h2>
            <li>JavaScript</li>
            <li>Node</li>
            <li>discord.js</li>
            <li>Discord</li>
            <li>Docker</li>
          </ul>
          <img
            className="content-item phone-photo"
            id="discord_bot_popup"
            src="../static/img/discord_bot_popup.png"
            alt="Full photo of discord pop up"
          />

          <img
            className="content-item phone-photo"
            src="../static/img/discord_bot_ics.png"
            alt="Full photo of the discord ics response"
          />
        </main>
      </body>
    </>
  );
};

export default DiscordBot;
