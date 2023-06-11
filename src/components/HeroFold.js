import React from "react";
import img from "../logo/build_crew-02.png";
import "./fold1.css";
const HeroFold = () => {
  return (
    <div className=" container">
      <div>
        <img
          src={img}
          alt="hero"
          style={{
            width: "40%",
          }}
        />
      </div>

      <div
        style={{
          textAlign: "right",
          //move it to the top righ t
          position: "absolute",
          top: "100px",
          right: "0",
          backgroundColor: "#36104C",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: "white",
            textAlign: "center",
            backgroundColor: "#36104C",
            marginTop: "15rem",
          }}
        >
          BUIDL CREW
        </h1>

        <p
          style={{
            fontSize: "1.5rem",
            color: "white",
            textAlign: "center",
            backgroundColor: "#36104C",
          }}
        >
          The BUIDL Crew by Lumos Labs is an all-exclusive community for Lumos
          Metaverse NFT holders.
          <br /> Get ready to reap the rewards of a true BUIDLer!
        </p>
        {/* Add any additional content */}
        {/* <h1>Why BUIDL Crew?</h1>
        <p>
          The BUIDL Crew is a dedicated space for developers that offers a wide
          range of opportunities for developers to learn, grow, and build.
        </p> */}
      </div>
      <div>
        {/* <img
          src={logo}
          alt="logo"
          style={{
            //reduce the size
            //move to right
            position: "absolute",
            top: "500px",
            right: "0",
            width: "40%",
            transform: `translateX(${isFolded ? "0" : "-100%"})`,
          }}
        /> */}
      </div>
    </div>
  );
};

export default HeroFold;
