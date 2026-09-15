import type { JSX } from "react";
import { useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { Circle } from "@mui/icons-material";
import DiplomaImg1 from "../../assets/Diplom Full-Stack Developer1.jpg";
import DiplomaImg2 from "../../assets/Diplom Full-Stack Developer2.jpg";
import ImageSlider from "../reusables/ImageSlider";

type AboutSection = {
  title: string;
  items: Array<string | JSX.Element>;
};

const aboutSections: AboutSection[] = [
  {
    title: "Web Technologies:",
    items: [
      "HTML, CSS, Bootstrap",
      "JavaScript/TypeScript",
      "React (with Vite, JSX, Zustand/Redux Toolkit, Material UI)",
    ],
  },
  {
    title: "Java & Backend:",
    items: [
      "Java",
      "Spring Boot with Maven",
      "Spring Web (REST-API)",
      "OpenAPI / Swagger UI for API documentation",
      "JPA & Hibernate (ORM)",
      "Stateless Authentication with JWT & Spring Security",
    ],
  },
  {
    title: "Database:",
    items: ["RDBMS: MariaDB, MySQL", "SQL, ER-Diagrams & Data Modeling"],
  },
  {
    title: "Tools & Project Management:",
    items: [
      "Git & GitHub",
      "Docker",
      "Agile work according to SCRUM (Daily, Sprint Planning, Reviews)",
      "Requirements Engineering",
    ],
  },
  {
    title: "Additional Skills:",
    items: [
      "Arduino",
      "Linux",
      "CI/CD with GitHub Actions",
      "Siemens SIMATIC S7/LOGO!",
      "MS Office",
    ],
  },
  {
    title: "CODERS.BAY Vienna - Full-Stack Developer:",
    items: [
      "Completed with excellent success (ausgezeichnetem Erfolg)",
      "Duration: 750 hours (25 weeks, 30 hours per week)",
      "Period: January 2026 - July 2026",
      <a href="https://codersbay.wien/ams-kurse">Link to program</a>,
    ],
  },
];

const images: string[] = [DiplomaImg1, DiplomaImg2];

const Diploma = (): JSX.Element => {
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
        <Typography variant="h1">Diploma</Typography>
      </Grid>
      <ImageSlider
        images={images}
        alt="Screenshots of Schroedinger's Chat application"
        boxSx={{ width: { md: "40vw" }, justifySelf: "center" }}
      />
      <Grid
        container
        spacing={2}
        sx={{ textAlign: "center", alignItems: "start" }}
      >
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

export default Diploma;
