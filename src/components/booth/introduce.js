import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/booth/title";
import Image from "react-bootstrap/Image";
import PortfolioContext from "../../context/context";
import { makeStyles } from "@material-ui/core";
import imageFile from "img/main.jpg";
import { Grid, IconButton } from "@material-ui/core";
import { ShowimgCarosel } from "components/booth/carousel";
import Photocard from "components/booth/photoCard";

const useStyles = makeStyles({
  imgDiv: {
    display: "flex",
    justifyContent: "center",
    height: "20vh",
    width: "20vw",
    // margin: "5%",
    // minHeight: "100vh",
  },
  // sampleImg: {
  //   display: "none",
  // },
  nonVisible: {
    visibility: "hidden",
  },
});

const About = () => {
  const classes = useStyles();
  const { activities, clubObj, key, name } = useContext(PortfolioContext);
  let contact_us = clubObj.contact_us;
  if (clubObj.contact_us === undefined) {
    contact_us = {
      facebook: undefined,
      instagram: undefined,
      youtube: undefined,
      openchat: undefined,
    };
  }
  const { facebook, instagram, youtube, openchat } = contact_us;
  const instagramUrl = `https://www.instagram.com/${instagram}/`;
  const showData = activities[0];
  const introduction = clubObj.introduction;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [keyPoints, setKeyPoints] = useState(JSON.parse(localStorage.getItem('key_points')));
  const [isKeyPoint, setIsKeyPoint] = useState(
    JSON.parse(localStorage.getItem('key_points')) // 값이 존재하는 지
    && keyPoints.hasOwnProperty(clubObj.name) // 해당 동아리 이름이 있는지(랜덤으로 선택된 동아리 안에 있는지)
    && !keyPoints[clubObj.name] // 아직 열쇠를 찾지 않았을 경우
  );

  let prevHeight;
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    if (isLoading) {
      setIsLoading(false);
    }
  }, [isLoading]);
  // console.log(isKeyPoint);
  // console.log(localStorage.getItem('get_keys'));
  // console.log(JSON.parse(localStorage.getItem('get_keys')));
  // console.log(JSON.parse(localStorage.getItem('get_keys'))[dNameToKeyNum[name.slice(0, -2)]]);
  // const key_image = require(`../../img/keys/key${dNameToKeyNum[name.slice(0, -2)]}.PNG`)

  return isLoading ? (
    activities.map((url) => (
      <img key={url} src={url} className={classes.nonVisible}></img>
    ))
    // makeActivities()
  ) : (
    <>
      <section id="about" className={key}>
        <Container>
          <Title title="동아리 소개" />
          <Row className="about-wrapper">
            <Col md={6} sm={12} id="contentVideo">
              <div id="contentroot">
                {/* {isKeyPoint ? (<Photocard cards={activities} club_name={clubObj.name} />) : (<Photocard cards={activities.slice(1)} />)} */}
                <Photocard cards={activities} club_name={clubObj.name} />
                {/* <Photocard cards={activities} /> */}
              </div>
            </Col>
            {/* {activities.length !== 0 ?
            <Col md={6} sm={12} id="contentVideo">
              <div id="contentroot">
                <Photocard cards={activities} />
              </div>
              
            </Col>:<></>} */}
            <Col md={6} sm={12}>
              {/* <Col md={activities.length !== 0 ? 6 : 12} sm={12}> */}
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={800}
                distance="30px"
              >
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text introduce_content contentBound">
                    {introduction.map((line, i) => (
                      <span key={i}>
                        <span>{line}</span> <br />
                      </span>
                    ))}
                  </p>
                  {/* <p className="about-wrapper__info-text">
                  {
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."
                  }
                </p>
                <p className="about-wrapper__info-text">
                  {
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."
                  }
                </p>
                <p className="about-wrapper__info-text">
                  {"Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
                </p> */}
                  {/* {resume && ( */}
                  {/* <span className="d-flex mt-3"></span> */}
                  {isDesktop ? (
                    <Container className="d-flex mt-3 justify-content-center">
                      {/* <Row>
                      <Col>
                        <Title title="Contact Us" />
                      </Col>
                    </Row> */}
                      <Row>
                        {/* <Col>
                      <div id="sns_title">📱코아 SNS</div>
                    </Col> */}
                        {facebook !== undefined ? (
                          <Col>
                            <br></br>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`cta-btn cta-btn--resume ${key}`}
                              href={facebook}
                            >
                              Facebook
                            </a>
                          </Col>
                        ) : (
                          <></>
                        )}
                        {instagram !== undefined ? (
                          <Col>
                            <br></br>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`cta-btn cta-btn--resume ${key}`}
                              href={instagramUrl}
                            >
                              Instagram
                            </a>
                          </Col>
                        ) : (
                          <></>
                        )}
                        {youtube !== undefined ? (
                          <Col>
                            <br></br>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`cta-btn cta-btn--resume ${key}`}
                              href={youtube}
                            >
                              Youtube
                            </a>
                          </Col>
                        ) : (
                          <></>
                        )}
                        {openchat !== undefined ? (
                          <Col>
                            <br></br>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`cta-btn cta-btn--resume ${key}`}
                              href={openchat}
                            >
                              Openchat
                            </a>
                          </Col>
                        ) : (
                          <></>
                        )}
                      </Row>
                    </Container>
                  ) : (
                    <>
                      {/* <Grid container justify="center">
                      <Grid item>
                        <Title title="Contact Us" />
                      </Grid>
                    </Grid> */}
                      <Grid container spacing={3} justify="center">
                        {facebook !== undefined ? (
                          <Grid item>
                            <IconButton href={facebook}>
                              <img
                                width="50px"
                                src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im01MTIgMjU2YzAgMTQxLjM4NjcxOS0xMTQuNjEzMjgxIDI1Ni0yNTYgMjU2cy0yNTYtMTE0LjYxMzI4MS0yNTYtMjU2IDExNC42MTMyODEtMjU2IDI1Ni0yNTYgMjU2IDExNC42MTMyODEgMjU2IDI1NnptMCAwIiBmaWxsPSIjNGE3YWZmIi8+PHBhdGggZD0ibTI2Ny4yMzQzNzUgNTExLjczODI4MWMxMzYuMTcxODc1LTUuODc4OTA2IDI0NC43NjU2MjUtMTE4LjEyMTA5MyAyNDQuNzY1NjI1LTI1NS43MzgyODEgMC0uOTk2MDk0LS4wMjczNDQtMS45ODgyODEtLjAzOTA2Mi0yLjk4NDM3NWwtMTc3LjY5OTIxOS0xNzcuNzAzMTI1LTE5MCAxOTguNTkzNzUgMTA1LjU2NjQwNiAxMDUuNTY2NDA2LTQ4LjY3NTc4MSA2Ni4xODM1OTR6bTAgMCIgZmlsbD0iIzAwNTNiZiIvPjxwYXRoIGQ9Im0zMzQuMjYxNzE5IDc1LjMxMjV2NTcuOTY4NzVzLTY2LjU1NDY4OC05LjY2MDE1Ni02Ni41NTQ2ODggMzMuMjc3MzQ0djQyLjkzNzVoNjAuMTEzMjgxbC03LjUxMTcxOCA2NS40ODA0NjhoLTUyLjYwMTU2M3YxNzAuNjc5Njg4aC02Ni41NTQ2ODd2LTE3MC42Nzk2ODhsLTU2Ljg5NDUzMi0xLjA3NDIxOHYtNjQuNDA2MjVoNTUuODIwMzEzdi00OS4zNzg5MDZzLTMuNjgzNTk0LTczLjQ1NzAzMiA2OC43MDMxMjUtODYuOTQ5MjE5YzMwLjA1ODU5NC01LjYwNTQ2OSA2NS40ODA0NjkgMi4xNDQ1MzEgNjUuNDgwNDY5IDIuMTQ0NTMxem0wIDAiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMzM0LjI2MTcxOSAxMzMuMjgxMjV2LTU3Ljk2ODc1cy0zNS40MjE4NzUtNy43NS02NS40ODA0NjktMi4xNDQ1MzFjLTQuNjk1MzEyLjg3NS05LjA2MjUgMi4wMDc4MTItMTMuMTM2NzE5IDMuMzQ3NjU2djM2OS4xNDA2MjVoMTIuMDYyNXYtMTcwLjY3OTY4OGg1Mi41OTc2NTdsNy41MTU2MjQtNjUuNDgwNDY4aC02MC4xMTMyODFzMCAwIDAtNDIuOTM3NSA2Ni41NTQ2ODgtMzMuMjc3MzQ0IDY2LjU1NDY4OC0zMy4yNzczNDR6bTAgMCIgZmlsbD0iI2RjZTFlYiIvPjwvc3ZnPg=="
                              />
                            </IconButton>
                          </Grid>
                        ) : (
                          <></>
                        )}
                        {instagram !== undefined ? (
                          <Grid item>
                            <IconButton href={instagramUrl}>
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
                        ) : (
                          <></>
                        )}
                        {youtube !== undefined ? (
                          <Grid item>
                            <IconButton href={youtube}>
                              {/* <img
                          width="50px"
                          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAtMjA4NTQpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAiIHgyPSI1MTIiIHkxPSItMjExMTAiIHkyPSItMjExMTAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZjM4ZCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOWVmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0ibTUxMiAyNTZjMCAxNDEuMzg2NzE5LTExNC42MTMyODEgMjU2LTI1NiAyNTZzLTI1Ni0xMTQuNjEzMjgxLTI1Ni0yNTYgMTE0LjYxMzI4MS0yNTYgMjU2LTI1NiAyNTYgMTE0LjYxMzI4MSAyNTYgMjU2em0wIDAiIGZpbGw9InVybCgjYSkiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMzI5LjYzNjcxOSA0MzNoLTE0Ny4yNzM0MzhjLTU2Ljk5NjA5MyAwLTEwMy4zNjMyODEtNDYuMzY3MTg4LTEwMy4zNjMyODEtMTAzLjM2MzI4MXYtMTQ3LjI3MzQzOGMwLTU2Ljk5NjA5MyA0Ni4zNjcxODgtMTAzLjM2MzI4MSAxMDMuMzYzMjgxLTEwMy4zNjMyODFoMTQ3LjI3MzQzOGM1Ni45OTYwOTMgMCAxMDMuMzYzMjgxIDQ2LjM2NzE4OCAxMDMuMzYzMjgxIDEwMy4zNjMyODF2MTQ3LjI3MzQzOGMwIDU2Ljk5NjA5My00Ni4zNjcxODggMTAzLjM2MzI4MS0xMDMuMzYzMjgxIDEwMy4zNjMyODF6bS0xNDcuMjczNDM4LTMyNGMtNDAuNDUzMTI1IDAtNzMuMzYzMjgxIDMyLjkxMDE1Ni03My4zNjMyODEgNzMuMzYzMjgxdjE0Ny4yNzM0MzhjMCA0MC40NTMxMjUgMzIuOTEwMTU2IDczLjM2MzI4MSA3My4zNjMyODEgNzMuMzYzMjgxaDE0Ny4yNzM0MzhjNDAuNDUzMTI1IDAgNzMuMzYzMjgxLTMyLjkxMDE1NiA3My4zNjMyODEtNzMuMzYzMjgxdi0xNDcuMjczNDM4YzAtNDAuNDUzMTI1LTMyLjkxMDE1Ni03My4zNjMyODEtNzMuMzYzMjgxLTczLjM2MzI4MXptMCAwIi8+PHBhdGggZD0ibTI1NiAzNTJjLTUyLjkzMzU5NCAwLTk2LTQzLjA2NjQwNi05Ni05NnM0My4wNjY0MDYtOTYgOTYtOTYgOTYgNDMuMDY2NDA2IDk2IDk2LTQzLjA2NjQwNiA5Ni05NiA5NnptMC0xNjJjLTM2LjM5NDUzMSAwLTY2IDI5LjYwNTQ2OS02NiA2NnMyOS42MDU0NjkgNjYgNjYgNjYgNjYtMjkuNjA1NDY5IDY2LTY2LTI5LjYwNTQ2OS02Ni02Ni02NnptMCAwIi8+PHBhdGggZD0ibTM2NS44MzIwMzEgMTU5Ljg5ODQzOGMwIDcuNTgyMDMxLTYuMTQ4NDM3IDEzLjczMDQ2OC0xMy43MzA0NjkgMTMuNzMwNDY4LTcuNTgyMDMxIDAtMTMuNzMwNDY4LTYuMTQ4NDM3LTEzLjczMDQ2OC0xMy43MzA0NjggMC03LjU4MjAzMiA2LjE0ODQzNy0xMy43MzA0NjkgMTMuNzMwNDY4LTEzLjczMDQ2OSA3LjU4MjAzMiAwIDEzLjczMDQ2OSA2LjE0ODQzNyAxMy43MzA0NjkgMTMuNzMwNDY5em0wIDAiLz48L2c+PC9zdmc+"
                        /> */}
                              <img
                                width="50px"
                                src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIC03NyA1MTIuMDAyMTMgNTEyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUwMS40NTMxMjUgNTYuMDkzNzVjLTUuOTAyMzQ0LTIxLjkzMzU5NC0yMy4xOTUzMTMtMzkuMjIyNjU2LTQ1LjEyNS00NS4xMjg5MDYtNDAuMDY2NDA2LTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NHMtMTYwLjI2MTcxOSAwLTIwMC4zMjgxMjUgMTAuNTQ2ODc1Yy0yMS41MDc4MTMgNS45MDIzNDQtMzkuMjIyNjU3IDIzLjYxNzE4Ny00NS4xMjUgNDUuNTQ2ODc1LTEwLjU0Mjk2OSA0MC4wNjI1LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4czAgODMuNTAzOTA2IDEwLjU0Mjk2OSAxMjMuMTQ4NDM3YzUuOTA2MjUgMjEuOTI5Njg3IDIzLjE5NTMxMiAzOS4yMjI2NTYgNDUuMTI4OTA2IDQ1LjEyODkwNiA0MC40ODQzNzUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0czE2MC4yNjE3MTkgMCAyMDAuMzI4MTI1LTEwLjU0Njg3NWMyMS45MzM1OTQtNS45MDIzNDQgMzkuMjIyNjU2LTIzLjE5NTMxMiA0NS4xMjg5MDYtNDUuMTI1IDEwLjU0Mjk2OS00MC4wNjY0MDYgMTAuNTQyOTY5LTEyMy4xNDg0MzggMTAuNTQyOTY5LTEyMy4xNDg0MzhzLjQyMTg3NS04My41MDc4MTItMTAuNTQ2ODc1LTEyMy41NzAzMTJ6bTAgMCIgZmlsbD0iI2YwMCIvPjxwYXRoIGQ9Im0yMDQuOTY4NzUgMjU2IDEzMy4yNjk1MzEtNzYuNzU3ODEyLTEzMy4yNjk1MzEtNzYuNzU3ODEzem0wIDAiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
                              />
                            </IconButton>
                          </Grid>
                        ) : (
                          <></>
                        )}
                        {openchat !== undefined ? (
                          <Grid item>
                            <IconButton href={openchat}>
                              {/* <img
                          width="50px"
                          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAtMjA4NTQpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAiIHgyPSI1MTIiIHkxPSItMjExMTAiIHkyPSItMjExMTAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZjM4ZCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOWVmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0ibTUxMiAyNTZjMCAxNDEuMzg2NzE5LTExNC42MTMyODEgMjU2LTI1NiAyNTZzLTI1Ni0xMTQuNjEzMjgxLTI1Ni0yNTYgMTE0LjYxMzI4MS0yNTYgMjU2LTI1NiAyNTYgMTE0LjYxMzI4MSAyNTYgMjU2em0wIDAiIGZpbGw9InVybCgjYSkiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMzI5LjYzNjcxOSA0MzNoLTE0Ny4yNzM0MzhjLTU2Ljk5NjA5MyAwLTEwMy4zNjMyODEtNDYuMzY3MTg4LTEwMy4zNjMyODEtMTAzLjM2MzI4MXYtMTQ3LjI3MzQzOGMwLTU2Ljk5NjA5MyA0Ni4zNjcxODgtMTAzLjM2MzI4MSAxMDMuMzYzMjgxLTEwMy4zNjMyODFoMTQ3LjI3MzQzOGM1Ni45OTYwOTMgMCAxMDMuMzYzMjgxIDQ2LjM2NzE4OCAxMDMuMzYzMjgxIDEwMy4zNjMyODF2MTQ3LjI3MzQzOGMwIDU2Ljk5NjA5My00Ni4zNjcxODggMTAzLjM2MzI4MS0xMDMuMzYzMjgxIDEwMy4zNjMyODF6bS0xNDcuMjczNDM4LTMyNGMtNDAuNDUzMTI1IDAtNzMuMzYzMjgxIDMyLjkxMDE1Ni03My4zNjMyODEgNzMuMzYzMjgxdjE0Ny4yNzM0MzhjMCA0MC40NTMxMjUgMzIuOTEwMTU2IDczLjM2MzI4MSA3My4zNjMyODEgNzMuMzYzMjgxaDE0Ny4yNzM0MzhjNDAuNDUzMTI1IDAgNzMuMzYzMjgxLTMyLjkxMDE1NiA3My4zNjMyODEtNzMuMzYzMjgxdi0xNDcuMjczNDM4YzAtNDAuNDUzMTI1LTMyLjkxMDE1Ni03My4zNjMyODEtNzMuMzYzMjgxLTczLjM2MzI4MXptMCAwIi8+PHBhdGggZD0ibTI1NiAzNTJjLTUyLjkzMzU5NCAwLTk2LTQzLjA2NjQwNi05Ni05NnM0My4wNjY0MDYtOTYgOTYtOTYgOTYgNDMuMDY2NDA2IDk2IDk2LTQzLjA2NjQwNiA5Ni05NiA5NnptMC0xNjJjLTM2LjM5NDUzMSAwLTY2IDI5LjYwNTQ2OS02NiA2NnMyOS42MDU0NjkgNjYgNjYgNjYgNjYtMjkuNjA1NDY5IDY2LTY2LTI5LjYwNTQ2OS02Ni02Ni02NnptMCAwIi8+PHBhdGggZD0ibTM2NS44MzIwMzEgMTU5Ljg5ODQzOGMwIDcuNTgyMDMxLTYuMTQ4NDM3IDEzLjczMDQ2OC0xMy43MzA0NjkgMTMuNzMwNDY4LTcuNTgyMDMxIDAtMTMuNzMwNDY4LTYuMTQ4NDM3LTEzLjczMDQ2OC0xMy43MzA0NjggMC03LjU4MjAzMiA2LjE0ODQzNy0xMy43MzA0NjkgMTMuNzMwNDY4LTEzLjczMDQ2OSA3LjU4MjAzMiAwIDEzLjczMDQ2OSA2LjE0ODQzNyAxMy43MzA0NjkgMTMuNzMwNDY5em0wIDAiLz48L2c+PC9zdmc+"
                        /> */}
                              <img
                                width="50px"
                                src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIgMWMtNi42MjcgMC0xMiA0LjIwOC0xMiA5LjM5OSAwIDMuMzU2IDIuMjQ2IDYuMzAxIDUuNjI1IDcuOTYzLTEuNjc4IDUuNzQ5LTIuNjY0IDYuMTIzIDQuMjQ0IDEuMjg3LjY5Mi4wOTcgMS40MDQuMTQ4IDIuMTMxLjE0OCA2LjYyNyAwIDEyLTQuMjA4IDEyLTkuMzk5IDAtNS4xOS01LjM3My05LjM5OC0xMi05LjM5OHoiIGZpbGw9IiMzZTI3MjMiLz48ZyBmaWxsPSIjZmZlYjNiIj48cGF0aCBkPSJtMTAuMzg0IDguMjdjLS4zMTctLjg5My0xLjUyOS0uODk0LTEuODQ1LS4wMDEtLjk4NCAzLjA1Mi0yLjMwMiA0LjkzNS0xLjQ5MiA1LjMwNiAxLjA3OC40ODkgMS4xMDEtLjYxMSAxLjM1OS0xLjFoMi4xMTFjLjI1Ny40ODcuMjgyIDEuNTg4IDEuMzU5IDEuMS44MTMtLjM3MS0uNDg5LTIuMTk1LTEuNDkyLTUuMzA1em0tMS42MTQgMi45ODcuNjkyLTEuOTUxLjY5MSAxLjk1MXoiLz48cGF0aCBkPSJtNS4zNjUgMTMuNjhjLTEuMTk4IDAtLjQ5LTEuNjU3LS42OTItNC43NDItLjQyOS0uMDc0LTEuNzYuMjk3LTEuNzYtLjY3MyAwLS4zNzEuMzA1LS42NzMuNjc5LS42NzMgMi41MTguMTggNC4yMjQtLjQ3IDQuMjI0LjY3MyAwIC45ODctMS4yNzUuNTktMS43Ni42NzMtLjIgMy4wNzUuNTA1IDQuNzQyLS42OTEgNC43NDJ6Ii8+PHBhdGggZD0ibTEzLjE1NCAxMy41NzljLTEuMTU5IDAtLjQ1NC0xLjU2NS0uNjYzLTUuMzAxIDAtLjkxIDEuNDEzLS45MDkgMS40MTMgMHY0LjA0Yy42NjkuMDg5IDIuMTM1LS4zMyAyLjEzNS42My0uMDAxIDEuMDA3LTEuNTc2LjUwMy0yLjg4NS42MzF6Ii8+PHBhdGggZD0ibTE5LjU1NiAxMy4zOC0xLjYyNC0yLjEzNy0uMjQuMjM5djEuNWMwIC4zOC0uMzEuNjg4LS42OTMuNjg4LTEuMjAzIDAtLjQ4Mi0xLjczMi0uNjkyLTUuMzkyIDAtLjM3OS4zMS0uNjg4LjY5Mi0uNjg4IDEuMDQ1IDAgLjU5NCAxLjQ3OC42OTIgMi4xNjYgMS45Ni0xLjg3MyAxLjkxMy0yLjA3MiAyLjMxNi0yLjA3Mi41NTYgMCAuODk3LjY5MS41MjcgMS4wNThsLTEuNTc4IDEuNTY3IDEuNzA0IDIuMjQzYy41NTYuNzI1LS41NTUgMS41NTYtMS4xMDQuODI4eiIvPjwvZz48L3N2Zz4="
                              />
                            </IconButton>
                          </Grid>
                        ) : (
                          <></>
                        )}
                      </Grid>
                    </>
                  )}

                  {/*  */}
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
