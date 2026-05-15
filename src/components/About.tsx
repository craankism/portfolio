import type { JSX } from "react";
import githubLogo from "../assets/GitHub_Lockup_Black.svg";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

const About = (): JSX.Element => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ textAlign: "center", alignItems: "center", pt: { xs: 2, md: 3 } }}
    >
      <title>About</title>
      <Grid size={6}>
        <a href="https://github.com/craankism">
          <img
            className="content-item logo"
            src={githubLogo}
            alt="GitHub Link to Repository"
          />
        </a>
      </Grid>
      <Grid size={6}>
        <a href="https://roadmap.sh">
          <img
            id="roadmap"
            className="content-item logo"
            src="https://roadmap.sh/card/wide/687e7516d8402b4cbdcdfc33?variant=dark&roadmaps=full-stack%2Cgolang%2Cjavascript%2Cjava"
            alt="Link to roadmap.sh"
          />
        </a>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ textAlign: "center", alignItems: "start" }}
      >
        <Grid size={12}>
          Hey, I'm Sascha "craankism" Schwellnus, a passionate, mostly
          self-taught, developer. I'm currently enrolled in a course for
          software development at{" "}
          <a href="https://codersbay.wien/">CODERS.BAY Vienna</a>, to be more
          specific, Fullstack-Development. My trained profession is electrical
          engineering with a focus on operational technology. I commited to
          change my career path, as I found my true passion in coding. The main
          aspect that fascinates me, is the ability to create something out of
          nothing with a deep logical thinking process. I love to solve problems
          and continuously learn new things.
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
          <List className="list-start">
            <Typography variant="h2">
              Programming languages/Frameworks I am familiar with:
            </Typography>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Go" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="JavaScript/TypeScript" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="React(React Router, Zustand, MUI)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Java" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Spring (Spring Boot, Spring Web, Spring Security)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="PostgreSQL" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="HTML" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="CSS" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="JPA & Hibernate" />
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
          <List className="list-start">
            <Typography variant="h2">
              Technologies I am familiar with:
            </Typography>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Arduino" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Git & GitHub" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Linux" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="CI/CD with GitHub Actions" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Docker" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Vite" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="JSX" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="OpenAPI/SwaggerUI" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="JWT" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Siemens S7/LOGO!" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="MS Office" />
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
          <List className="list-start">
            <Typography variant="h2">CODERS.BAY program:</Typography>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Development of web applications" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Backend-Development" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Databases & Data Modeling" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Agile software development" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Basics in Requirements Engineering" />
            </ListItem>
            <ListItem>
              <a href="https://codersbay.wien/ams-kurse">Link zum Kurs</a>
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
          <List className="list-start">
            <Typography variant="h2">Hobbies:</Typography>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Gaming" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Japan" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Anime" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Coding" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Music" />
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
          <List className="list-start">
            <Typography variant="h2">Favourite Music Genre:</Typography>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Rap" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Drum and Bass" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Nu Metal" />
            </ListItem>{" "}
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="Metal Core" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="JPop/JRock" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
