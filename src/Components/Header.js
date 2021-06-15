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
  const [active, setActive] = React.useState(false);
  const hover = useSpring({
    transform: active ? "scale(1.2)" : "scale(1)",
    width: "32px",
    height: "auto",
    config: config.wobbly,
  });

  return (
    <>
      <animated.div style={props} className="row text-center my-5">
        <section className="col-12">
          <a href="https://twitch.tv">
            <animated.img style={hover} onMouseOver={() => setActive(true)} onMouseOut={() => setActive(false)} src={Glitch}></animated.img>
          </a>
        </section>
      </animated.div>
    </>
  );
};

export default Header;
