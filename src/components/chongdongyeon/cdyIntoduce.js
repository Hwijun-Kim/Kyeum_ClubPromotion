import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import PortfolioContext from "../../context/context";
import Title from "components/booth/title";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Grid, IconButton } from "@material-ui/core";
import members from "img/main/Keyum_member.jpeg";

const Contact = () => {
  const { departmentObj } = useContext(PortfolioContext);
  const { introduction, key } = departmentObj;
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
  });
  return (
    <section id="contact" className={`${key} intro`}>
      <Container>
        <Title title="총동연 소개" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <Image src={members} fluid />
              </div>
            </Fade>
          </Col>
          <br />
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text introduce_content contentBound">
                  {introduction.map((line) => (
                    <span key={line}>
                      <span>{line}</span>
                      <br></br>
                    </span>
                  ))}
                </p>
                {isDesktop ? (
                  <Container className="d-flex mt-3 justify-content-center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`cta-btn cta-btn--resume ${key}`}
                      href={"https://www.instagram.com/mju_club/"}
                    >
                      Instagram
                    </a>
                  </Container>
                ) : (
                  <Grid container spacing={3} justify="center">
                    <Grid item>
                      <IconButton href={"https://www.instagram.com/mju_club/"}>
                        {/* <img
                          width="50px"
                          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAtMjA4NTQpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAiIHgyPSI1MTIiIHkxPSItMjExMTAiIHkyPSItMjExMTAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZjM4ZCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOWVmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0ibTUxMiAyNTZjMCAxNDEuMzg2NzE5LTExNC42MTMyODEgMjU2LTI1NiAyNTZzLTI1Ni0xMTQuNjEzMjgxLTI1Ni0yNTYgMTE0LjYxMzI4MS0yNTYgMjU2LTI1NiAyNTYgMTE0LjYxMzI4MSAyNTYgMjU2em0wIDAiIGZpbGw9InVybCgjYSkiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMzI5LjYzNjcxOSA0MzNoLTE0Ny4yNzM0MzhjLTU2Ljk5NjA5MyAwLTEwMy4zNjMyODEtNDYuMzY3MTg4LTEwMy4zNjMyODEtMTAzLjM2MzI4MXYtMTQ3LjI3MzQzOGMwLTU2Ljk5NjA5MyA0Ni4zNjcxODgtMTAzLjM2MzI4MSAxMDMuMzYzMjgxLTEwMy4zNjMyODFoMTQ3LjI3MzQzOGM1Ni45OTYwOTMgMCAxMDMuMzYzMjgxIDQ2LjM2NzE4OCAxMDMuMzYzMjgxIDEwMy4zNjMyODF2MTQ3LjI3MzQzOGMwIDU2Ljk5NjA5My00Ni4zNjcxODggMTAzLjM2MzI4MS0xMDMuMzYzMjgxIDEwMy4zNjMyODF6bS0xNDcuMjczNDM4LTMyNGMtNDAuNDUzMTI1IDAtNzMuMzYzMjgxIDMyLjkxMDE1Ni03My4zNjMyODEgNzMuMzYzMjgxdjE0Ny4yNzM0MzhjMCA0MC40NTMxMjUgMzIuOTEwMTU2IDczLjM2MzI4MSA3My4zNjMyODEgNzMuMzYzMjgxaDE0Ny4yNzM0MzhjNDAuNDUzMTI1IDAgNzMuMzYzMjgxLTMyLjkxMDE1NiA3My4zNjMyODEtNzMuMzYzMjgxdi0xNDcuMjczNDM4YzAtNDAuNDUzMTI1LTMyLjkxMDE1Ni03My4zNjMyODEtNzMuMzYzMjgxLTczLjM2MzI4MXptMCAwIi8+PHBhdGggZD0ibTI1NiAzNTJjLTUyLjkzMzU5NCAwLTk2LTQzLjA2NjQwNi05Ni05NnM0My4wNjY0MDYtOTYgOTYtOTYgOTYgNDMuMDY2NDA2IDk2IDk2LTQzLjA2NjQwNiA5Ni05NiA5NnptMC0xNjJjLTM2LjM5NDUzMSAwLTY2IDI5LjYwNTQ2OS02NiA2NnMyOS42MDU0NjkgNjYgNjYgNjYgNjYtMjkuNjA1NDY5IDY2LTY2LTI5LjYwNTQ2OS02Ni02Ni02NnptMCAwIi8+PHBhdGggZD0ibTM2NS44MzIwMzEgMTU5Ljg5ODQzOGMwIDcuNTgyMDMxLTYuMTQ4NDM3IDEzLjczMDQ2OC0xMy43MzA0NjkgMTMuNzMwNDY4LTcuNTgyMDMxIDAtMTMuNzMwNDY4LTYuMTQ4NDM3LTEzLjczMDQ2OC0xMy43MzA0NjggMC03LjU4MjAzMiA2LjE0ODQzNy0xMy43MzA0NjkgMTMuNzMwNDY4LTEzLjczMDQ2OSA3LjU4MjAzMiAwIDEzLjczMDQ2OSA2LjE0ODQzNyAxMy43MzA0NjkgMTMuNzMwNDY5em0wIDAiLz48L2c+PC9zdmc+"
                        /> */}
                        <img
                          width="50px"
                          src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIC0xLjk4MiAtMS44NDQgMCAtMTMyLjUyMiAtNTEuMDc3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMzcuMTA2IiB4Mj0iLTI2LjU1NSIgeTE9Ii03Mi43MDUiIHkyPSItODQuMDQ3Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZDUiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjZmY1NDNlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgzN2FiIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJtMS41IDEuNjMzYy0xLjg4NiAxLjk1OS0xLjUgNC4wNC0xLjUgMTAuMzYyIDAgNS4yNS0uOTE2IDEwLjUxMyAzLjg3OCAxMS43NTIgMS40OTcuMzg1IDE0Ljc2MS4zODUgMTYuMjU2LS4wMDIgMS45OTYtLjUxNSAzLjYyLTIuMTM0IDMuODQyLTQuOTU3LjAzMS0uMzk0LjAzMS0xMy4xODUtLjAwMS0xMy41ODctLjIzNi0zLjAwNy0yLjA4Ny00Ljc0LTQuNTI2LTUuMDkxLS41NTktLjA4MS0uNjcxLS4xMDUtMy41MzktLjExLTEwLjE3My4wMDUtMTIuNDAzLS40NDgtMTQuNDEgMS42MzN6IiBmaWxsPSJ1cmwoI1NWR0lEXzFfKSIvPjxwYXRoIGQ9Im0xMS45OTggMy4xMzljLTMuNjMxIDAtNy4wNzktLjMyMy04LjM5NiAzLjA1Ny0uNTQ0IDEuMzk2LS40NjUgMy4yMDktLjQ2NSA1LjgwNSAwIDIuMjc4LS4wNzMgNC40MTkuNDY1IDUuODA0IDEuMzE0IDMuMzgyIDQuNzkgMy4wNTggOC4zOTQgMy4wNTggMy40NzcgMCA3LjA2Mi4zNjIgOC4zOTUtMy4wNTguNTQ1LTEuNDEuNDY1LTMuMTk2LjQ2NS01LjgwNCAwLTMuNDYyLjE5MS01LjY5Ny0xLjQ4OC03LjM3NS0xLjctMS43LTMuOTk5LTEuNDg3LTcuMzc0LTEuNDg3em0tLjc5NCAxLjU5N2M3LjU3NC0uMDEyIDguNTM4LS44NTQgOC4wMDYgMTAuODQzLS4xODkgNC4xMzctMy4zMzkgMy42ODMtNy4yMTEgMy42ODMtNy4wNiAwLTcuMjYzLS4yMDItNy4yNjMtNy4yNjUgMC03LjE0NS41Ni03LjI1NyA2LjQ2OC03LjI2M3ptNS41MjQgMS40NzFjLS41ODcgMC0xLjA2My40NzYtMS4wNjMgMS4wNjNzLjQ3NiAxLjA2MyAxLjA2MyAxLjA2MyAxLjA2My0uNDc2IDEuMDYzLTEuMDYzLS40NzYtMS4wNjMtMS4wNjMtMS4wNjN6bS00LjczIDEuMjQzYy0yLjUxMyAwLTQuNTUgMi4wMzgtNC41NSA0LjU1MXMyLjAzNyA0LjU1IDQuNTUgNC41NSA0LjU0OS0yLjAzNyA0LjU0OS00LjU1LTIuMDM2LTQuNTUxLTQuNTQ5LTQuNTUxem0wIDEuNTk3YzMuOTA1IDAgMy45MSA1LjkwOCAwIDUuOTA4LTMuOTA0IDAtMy45MS01LjkwOCAwLTUuOTA4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="
                        />
                      </IconButton>
                    </Grid>
                  </Grid>
                )}
                {/* {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      github
                    </a>
                  </span>
                )} */}
              </div>
            </Fade>
          </Col>
        </Row>

        <Row style={{ marginTop: "5rem" }}>
          <Col>
            <Title title="만든 사람" />
          </Col>
          <Col className="d-flex mt-3 justify-content-center" lg={12}>
            <a
              className={`cta-btn cta-btn--resume ${key}`}
              onClick={(e) => {
                if (e.target.innerText == "총동아리연합회 키움") {
                  e.target.innerText = "유도진 김휘준 이연주 노현정 신경민";
                  e.target.style.width = "22rem";
                } else {
                  e.target.innerText = "총동아리연합회 키움";
                  e.target.style.removeProperty("width");
                }
              }}
            >
              총동아리연합회 비상대책위원회
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
