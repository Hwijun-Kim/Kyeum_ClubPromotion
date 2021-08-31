import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import PortfolioContext from "../../context/context";
import testbg from "../../img/main/event_test2.jpeg";

const Header = () => {
  const { departmentObj } = useContext(PortfolioContext);
  const { key, name, hashtag } = departmentObj;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section
      id="cdyhero"
      className="jumbotron"
      style={{ backgroundImage: `url(${testbg})`, backgroundSize: "cover" }}
    >
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className="hero-title">
            {/* {title || 'Hi, my name is'}{' '} */}
            <span className={`text-color-main `}>{name}</span>
            <br />
            {hashtag.map((tag, i) => {
              return (
                <a
                  key={i}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={`cta-btn text-color-main hashtag  ${key}`}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {"#"}
                  {tag}
                </a>
              );
            })}
          </h1>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <p className="hero-cta">
            <span className={`cta-btn cta-btn--hero ${key}`}>
              <Link to="about" smooth duration={1000}>
                {"더 알아보기"}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
