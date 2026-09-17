import type { JSX } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import githubLogo from "../../assets/GitHub_Invertocat_Black.svg";
import {
  githubLogoStyleMD,
  githubLogoStyleXS,
} from "../../constants/githubLogoStyle";

type GithubLogoLinkProps = {
  href: string;
};

const GithubLogoLink = ({ href }: GithubLogoLinkProps): JSX.Element => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box onClick={() => window.open(href, "_blank")} sx={{ cursor: "pointer" }}>
      <img
        src={githubLogo}
        alt="GitLab Link to Repository"
        style={isMdUp ? githubLogoStyleMD : githubLogoStyleXS}
      />
    </Box>
  );
};

export default GithubLogoLink;
