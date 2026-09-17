import type { JSX } from "react";
import { Grid, Typography } from "@mui/material";
import GithubLogoLink from "../reusables/GithubLogoLink";
import BulletList from "../reusables/BulletList";

const unsortedNames = [
  "Wishek",
  "Davilla",
  "Vanalstyne",
  "Tiesiding",
  "Honaunau",
  "Volin",
  "Caledonia",
  "Monon",
  "Loraine",
  "Renville",
];

const sortedNames = [...unsortedNames].sort();

const Sorter = (): JSX.Element => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ textAlign: "center", alignItems: "center", pt: { xs: 2, md: 3 } }}
    >
      <Grid size={12}>
        <Typography variant="h1">Sorter</Typography>
      </Grid>

      <Grid size={12}>
        <GithubLogoLink href="https://github.com/craankism/sorter" />
      </Grid>

      <Grid size={12}>
        I used a bubble sort algorithm to sort a list of names alphabetically. I
        used Go as the language and GitHub Actions for the CI/CD workflow to
        automatically deploy new releases.
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
        <BulletList title="Unsorted Input:" items={unsortedNames} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
        <BulletList title="Sorted Output:" items={sortedNames} />
      </Grid>
    </Grid>
  );
};

export default Sorter;
