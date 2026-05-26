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

type AboutSection = {
  title: string;
  items: Array<string | JSX.Element>;
};

const aboutSections: AboutSection[] = [
  {
    title: "Programming languages/Frameworks I am familiar with:",
    items: [
      "Go",
      "JavaScript/TypeScript",
      "React(React Router, Zustand, MUI)",
      "Java",
      "Spring (Spring Boot, Spring Web, Spring Security)",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JPA & Hibernate",
    ],
  },
  {
    title: "Technologies I am familiar with:",
    items: [
      "Arduino",
      "Git & GitHub",
      "Linux",
      "CI/CD with GitHub Actions",
      "Docker",
      "Vite",
      "JSX",
      "OpenAPI/SwaggerUI",
      "JWT",
      "Siemens SIMATIC S7/LOGO!",
      "MS Office",
    ],
  },
  {
    title: "CODERS.BAY program:",
    items: [
      "Development of web applications",
      "Backend-Development",
      "Databases & Data Modeling",
      "Agile software development",
      "Basics in Requirements Engineering",
      <a href="https://codersbay.wien/ams-kurse">Link to program</a>,
    ],
  },
  {
    title: "Hobbies:",
    items: ["Gaming", "Japan", "Anime", "Coding", "Music"],
  },
  {
    title: "Favourite Music Genre:",
    items: [
      "Rap",
      "Drum and Bass",
      "House",
      "Nu Metal",
      "Metal Core",
      "JPop/JRock",
    ],
  },
];

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
        {aboutSections.map((section) => (
          <Grid
            key={section.title}
            size={{ xs: 12, md: 6 }}
            sx={{ textAlign: "left" }}
          >
            <List className="list-start">
              <Typography variant="h2">{section.title}</Typography>
              {section.items.map((item, index) => (
                <ListItem key={`${section.title}-${index}`}>
                  {typeof item === "string" ? (
                    <>
                      <ListItemIcon>
                        <ArrowRight />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </>
                  ) : (
                    item
                  )}
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default About;
