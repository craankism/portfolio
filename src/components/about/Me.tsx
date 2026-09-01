import type { JSX } from "react";
import { useEffect } from "react";
import githubLogo from "../../assets/GitHub_Lockup_Black.svg";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { Circle } from "@mui/icons-material";

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

const Me = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid
      container
      spacing={2}
      sx={{ textAlign: "center", alignItems: "center", pt: { xs: 2, md: 3 } }}
    >
      <Grid size={12}>
        <Typography variant="h1">Me</Typography>
      </Grid>
      <Grid size={6}>
        <a href="https://github.com/craankism">
          <img src={githubLogo} alt="GitHub Link to Repository" />
        </a>
      </Grid>
      <Grid size={6}>
        <Box sx={{ width: { md: "25vw" } }}>
          <img
            src="https://roadmap.sh/card/wide/687e7516d8402b4cbdcdfc33?variant=dark&roadmaps=java%2Cjavascript%2Csql%2Cfull-stack"
            alt="roadmap.sh profile roadmap"
          />
        </Box>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ textAlign: "center", alignItems: "start" }}
      >
        <Grid size={12}>
          Hey, I'm Sascha "craankism" Schwellnus, a passionate Full-Stack
          Developer. I successfully completed the Full-Stack Developer program
          at <a href="https://codersbay.wien/">CODERS.BAY Vienna</a> with
          excellent success in July 2026. My trained profession is electrical
          engineering with a focus on operational technology. I committed to
          change my career path, as I found my true passion in coding. The main
          aspect that fascinates me is the ability to create something out of
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
              <ListSubheader>{section.title}</ListSubheader>
              {section.items.map((item, index) => (
                <ListItem key={`${section.title}-${index}`}>
                  {typeof item === "string" ? (
                    <>
                      <ListItemIcon>
                        <Circle sx={{ fontSize: "0.5rem" }} />
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

export default Me;
