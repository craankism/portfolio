import type { JSX } from "react";
import githubLogo from "../../assets/GitHub_Invertocat_Black.svg";
import calcImage from "../../assets/calc.png";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { githubLogoStyleMD, githubLogoStyleXS } from "../../constants/githubLogoStyle";

const Calc = (): JSX.Element => {
    const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid
      container
      spacing={2}
      sx={{ textAlign: "center", alignItems: "center", pt: { xs: 2, md: 3 } }}
    >
      <Grid size={12}>
        <Typography variant="h1">Calculator</Typography>
      </Grid>
      <Grid size={12}>
        <Box
          onClick={() => window.open("https://github.com/craankism/calc", "_blank")}
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
          I build a simple calculator application on a webserver using HTML,
          CSS, and JavaScript for the Frontend, Go for the Backend and GitHub
          Actions for the CI/CD workflow. The application is currently displayed
          on a <a href="https://calc.craankism.com">website</a>. It uses a
          parser to transform the terms into RPN (Reverse Polish Notation).
          After that, the RPN is calculated using the Shunting Yard algorithm.
        </p>
      </Grid>
      <Grid size={12}>
        <a href="https://calc.craankism.com">
          <img
            className="content-item logo"
            src={calcImage}
            alt="Calculator Demo"
          />
        </a>
      </Grid>
    </Grid>
  );
};

export default Calc;
