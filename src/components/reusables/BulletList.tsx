import type { JSX } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Circle } from "@mui/icons-material";

type BulletListProps = {
  title: string;
  items: Array<string | JSX.Element>;
};

const BulletList = ({ title, items }: BulletListProps): JSX.Element => (
  <List className="list-start">
    <ListSubheader>{title}</ListSubheader>
    {items.map((item, index) => (
      <ListItem key={`${title}-${index}`}>
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
);

export default BulletList;
