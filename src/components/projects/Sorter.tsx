import type { JSX } from "react";
import githubLogo from "../../assets/GitHub_Lockup_Black.svg";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

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
        <List className="content-item list-start">
          <Typography variant="h2">Unsorted Input:</Typography>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Wishek" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Davilla" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Vanalstyne" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Tiesiding" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Honaunau" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Volin" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Caledonia" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Monon" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Loraine" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Renville" />
          </ListItem>
        </List>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
        <List className="content-item list-start">
          <Typography variant="h2">Sorted Output:</Typography>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Caledonia" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Davilla" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Honaunau" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Loraine" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Monon" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Renville" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Tiesiding" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Vanalstyne" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Volin" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Wishek" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Sorter;
