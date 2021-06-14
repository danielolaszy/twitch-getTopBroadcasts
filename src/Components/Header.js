import React from "react";
import Glitch from "../assets/glitch.png";

const Header = () => {
  return (
    <>
      <div className="row text-center my-5">
        <section className="col-12">
          <a href="https://twitch.tv">
            <img src={Glitch} style={{ width: "32px", height: "auto" }}></img>
          </a>
        </section>
      </div>
    </>
  );
};

export default Header;
