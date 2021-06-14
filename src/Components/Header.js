import React from "react";
import { useSpring, animated, config } from "react-spring";
import Glitch from "../assets/glitch.png";

const Header = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.slow,
    delay: 1500,
  });

  return (
    <>
      <animated.div style={props} className="row text-center my-5">
        <section className="col-12">
          <a href="https://twitch.tv">
            <img src={Glitch} style={{ width: "32px", height: "auto" }}></img>
          </a>
        </section>
      </animated.div>
    </>
  );
};

export default Header;
