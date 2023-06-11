import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
function Showcase() {
  return (
    <div
      className="container"
      style={{
        textAlign: "center",
      }}
    >
      <h1>Showcase</h1>
      <p>
        Ever heard of ‘unsung heroes?” You probably won’t at the BUIDL Crew.<br/>
        Take a look at exceptional developers who are BUIDLing awesome Web3
        applications.
      </p>
      <Card
        sx={{
          maxWidth: 345,
          margin: "auto",
          justifyContent: "center",
          borderRadius: "20px",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Skills
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <TwitterIcon />
          </Button>
          <Button size="small">
            <GitHubIcon />
          </Button>
          <Button size="small">
            <LinkedInIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Showcase;
