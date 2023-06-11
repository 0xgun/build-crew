import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { List, ListItem } from "@mui/material";

import ListItemText from "@mui/material/ListItemText";
const styles = {
  buidlCrewCTA: {
    textAlign: "center",
    padding: "16px",
    backgroundColor: "#36104c",
  },
  heading: {
    marginBottom: "8px",
  },
  description: {
    marginBottom: "16px",
  },
  foldContent: {
    maxHeight: "0",
    overflow: "hidden",
    transition: "max-height 0.3s ease",
  },
  unfoldContent: {
    maxHeight: "1000px",
    transition: "max-height 0.3s ease",
  },
  button: {
    fontWeight: "bold",
  },
};

const HowToJoin = () => {
  const [isFolded, setIsFolded] = useState(true);

  const toggleFold = () => {
    setIsFolded(!isFolded);
  };

  return (
    <div style={styles.buidlCrewCTA} className="container">
      <Typography variant="h2" style={styles.heading}>
        Join the Lumos Metaverse BUIDL Crew!
      </Typography>
      <Typography variant="body1" style={styles.description}>
        The BUIDL Crew is a dedicated space for developers that offers a wide
        range of opportunities for learning, growth, and building.
      </Typography>
      <div style={isFolded ? styles.foldContent : styles.unfoldContent}>
        <Typography variant="body1" style={styles.description}>
          How to join the Lumos Metaverse BUIDL Crew:
        </Typography>

        <List>
          <ListItem
            sx={{
              marginTop: "2rem",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            <ListItemText primary="Apply for the Lumos Metaverse whitelist and mint your Lumos Metaverse NFT (ignore if already done)" />
          </ListItem>
          <ListItem
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            <ListItemText primary="Join the Lumos Labs Discord Server." />
          </ListItem>
          <ListItem
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            <ListItemText primary="Go to the #buidl-crew channel and click on the 'Join BUIDL Crew' button." />
          </ListItem>
          <ListItem
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            <ListItemText primary="Complete the BUIDL Crew application form." />
          </ListItem>
          <ListItem
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            <ListItemText primary="Await to be reviewed by the BUIDL Crew team." />
          </ListItem>
          <ListItem
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            <ListItemText primary="If you are accepted, you will be granted access to the BUIDL Crew community and all of the benefits that it offers." />
          </ListItem>
        </List>
      </div>
      <Button
        variant="contained"
        color="primary"
        style={styles.button}
        onClick={toggleFold}
      >
        {isFolded ? "Show More" : "Show Less"}
      </Button>
    </div>
  );
};

export default HowToJoin;
