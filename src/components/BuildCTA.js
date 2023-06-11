import React from "react";
import { List, ListItem, Typography, Button } from "@mui/material";

import ListItemText from "@mui/material/ListItemText";
const BUIDLCrewCTA = () => {
  return (
    <div
      className="buidl-crew-cta container"
      style={{
        backgroundColor: "#36104C",
        color: "white",
        textAlign: "center",
      }}
    >
      <div className="buidl-crew-cta">
        <Typography
          variant="h2"
          sx={{
            marginTop: "7rem",
          }}
        >
          Why BUIDL Crew?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "2rem",
            fontSize: "1.5rem",
          }}
        >
          The BUIDL Crew is a dedicated space for developers that offers a wide
          range of opportunities for learning, growth, and building.
        </Typography>
        <List>
          <ListItem
            sx={{
              marginTop: "2rem",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            <ListItemText primary="Special invite-only access to developer meetups & events" />
          </ListItem>
          <ListItem
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            <ListItemText primary="Exciting monthly contests with equally exciting prizes " />
          </ListItem>
          <ListItem
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            <ListItemText primary="Early access to all the latest Lumos Labs Product updates" />
          </ListItem>
          <ListItem
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            <ListItemText primary="Special Incentives from the Lumos Metaverse for contributions " />
          </ListItem>
          <ListItem
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            <ListItemText primary="Premium job offers from our partners, " />
          </ListItem>
          <ListItem
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            <ListItemText primary="Mentorship, guidance, and support from top industry experts" />
          </ListItem>
        </List>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: "2rem",
          }}
        >
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default BUIDLCrewCTA;
