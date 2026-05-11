import type { JSX } from "react";
import githubLogo from "../../assets/GitHub_Lockup_Black.svg";
import { Grid, Typography } from "@mui/material";

const Sorter = (): JSX.Element => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ textAlign: "center", alignItems: "center", pt: { xs: 2, md: 3 } }}
    >
      <title>Sorter</title>
      <Grid size={6}>
        <Typography variant="h1">Sorter</Typography>
      </Grid>

      <Grid size={6}>
        <a href="https://github.com/craankism/sorter">
          <img
            className="content-item logo"
            src={githubLogo}
            alt="GitHub Link to Repository"
          />
        </a>
      </Grid>

      <Grid size={12}>
        I used a bubble sort algorithm to sort a list of names alphabetically. I
        used Go as the language and GitHub Actions for the CI/CD workflow to
        automatically deploy new releases.
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
        <ul className="content-item list-start">
          <h2>Text Input Example:</h2>
          <li>Wishek</li>
          <li>Davilla</li>
          <li>Vanalstyne</li>
          <li>Tiesiding</li>
          <li>Honaunau</li>
          <li>Volin</li>
          <li>Caledonia</li>
          <li>Monon</li>
          <li>Loraine</li>
          <li>Renville</li>
        </ul>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
        <ul className="content-item list-start">
          <h2>Sorted Output Example:</h2>
          <li>Caledonia</li>
          <li>Davilla</li>
          <li>Honaunau</li>
          <li>Loraine</li>
          <li>Monon</li>
          <li>Renville</li>
          <li>Tiesiding</li>
          <li>Vanalstyne</li>
          <li>Volin</li>
          <li>Wishek</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Sorter;
