import type { JSX } from "react";
import githubLogo from "../../assets/GitHub_Invertocat_Black.svg";
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
import { Circle } from "@mui/icons-material";
import {
  githubLogoStyleMD,
  githubLogoStyleXS,
} from "../../constants/githubLogoStyle";

const Sorter = (): JSX.Element => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
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
        <Box
          onClick={() =>
            window.open("https://github.com/craankism/sorter", "_blank")
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
        I used a bubble sort algorithm to sort a list of names alphabetically. I
        used Go as the language and GitHub Actions for the CI/CD workflow to
        automatically deploy new releases.
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
        <List className="content-item list-start">
          <ListSubheader>Unsorted Input:</ListSubheader>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Wishek" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Davilla" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Vanalstyne" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Tiesiding" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Honaunau" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Volin" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Caledonia" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Monon" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Loraine" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Renville" />
          </ListItem>
        </List>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
        <List className="content-item list-start">
          <ListSubheader>Sorted Output:</ListSubheader>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Caledonia" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Davilla" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Honaunau" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Loraine" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Monon" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Renville" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Tiesiding" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Vanalstyne" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Volin" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle sx={{ fontSize: "0.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Wishek" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Sorter;
