import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Carsol(props) {
  var items = [
    {
      name: "Event #1",
      description: "Description",
      Date: "Date & Time",
      speakers: "Speakers",
    },
    {
      name: "Event  #2",
      description: "Description",
      Date: "Date & Time",
      speakers: "Speakers",
    },
  ];

  return (
    <div className="container">
      <Carousel
       
        sx={{
          // reduuce the size of the carousel
          width: "50%",
          height: "50%",
          margin: "auto",
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <Paper
      className="container"
    >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <p>{props.item.Date}</p>
      <p>{props.item.speakers}</p>
      <Button className="CheckButton">Register</Button>
    </Paper>
  );
}

export default Carsol;
