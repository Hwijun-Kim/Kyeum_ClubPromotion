import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "components/booth/title";
import event_img from "img/main/keyevent_img.JPG";
import Image from "react-bootstrap/Image";

import Paper from "@material-ui/core/Paper";

const Projects = () => {
  const { departmentObj } = useContext(PortfolioContext);
  const { event } = departmentObj;
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
    <section id="projects" className={departmentObj.key}>
      <Container>
        <div className="project-wrapper">
          <Title title="이벤트 소개" />
          <Row>
            {/* <Paper className="cdyEvent" elevation={3}> */}

            <Col lg={8} sm={12}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">{event[0]}</h3>
                  <div>
                    <p>
                      {event.map((line, i) => {
                        return i !== 0 ? (
                          <span key={i}>
                            <span>{line}</span>
                            <br></br>
                          </span>
                        ) : (
                          <></>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col lg={4} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={600}
                distance="30px"
              >
                {/* className="project-wrapper__image"  className="thumbnail rounded" */}
                <div className="project-wrapper__image">
                  <div className="thumbnail rounded">
                    <Image src={event_img} fluid />
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
