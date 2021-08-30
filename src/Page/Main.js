import { Box, setRef } from "@material-ui/core";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { dbService, storageService } from "fbase";
import Hero from "../components/booth/hero";
import { PortfolioProvider } from "../context/context";
import Introduce from "components/booth/introduce";
import Contact from "components/booth/contact";
import Footer from "components/booth/footer";
import Projects from "components/booth/infomation";
import imageMap from "../img/empty.jpeg";
import imageMapMobile from "../img/empty_m.jpeg";
import art from "../img/art.png";
import social from "../img/social.png";
import religion from "../img/religion.png";
import sports from "../img/sports.png";
import study from "../img/study.png";
import volunteer from "../img/volunteer.png";
import exhibition from "../img/exhibition.png";
import chongdongyeon from "../img/chongdongyeon.png";
import art_b from "../img/art_b.png";
import social_b from "../img/social_b.png";
import religion_b from "../img/religion_b.png";
import sports_b from "../img/sports_b.png";
import study_b from "../img/study_b.png";
import volunteer_b from "../img/volunteer_b.png";
import exhibition_b from "../img/exhibition_b.png";
import chongdongyeon_b from "../img/chongdongyeon_b.png";
import art_btn from "../img/art_btn.png";
import social_btn from "../img/social_btn.png";
import religion_btn from "../img/religion_btn.png";
import sports_btn from "../img/sports_btn.png";
import study_btn from "../img/study_btn.png";
import volunteer_btn from "../img/volunteer_btn.png";
import exhibition_btn from "../img/exhibition_btn.png";
import chongdongyeon_btn from "../img/chongdongyeon_btn.png";
import paper from "../img/paper2.jpg";
import TextField from "@material-ui/core/TextField";

import popup1 from "../img/popup_1.jpeg";
import popup2 from "../img/popup_2.jpeg";
import popup3 from "../img/popup_3.jpeg";
import popup4 from "../img/popup_4.jpeg";
import popup5 from "../img/popup_5.jpeg";

import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";
// import artImg from "../img/art.jpg";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import banner from "../img/banner.png";
import banner_m from "../img/banner_m.png";
import Jump from "react-reveal/Jump";
import Modal from "react-bootstrap/Modal";
import TypeWriter from "react-typewriter";

const search = {
  art: art,
  social: social,
  religion: religion,
  sports: sports,
  study: study,
  volunteer: volunteer,
  exhibition: exhibition,
  art_b: art_b,
  social_b: social_b,
  religion_b: religion_b,
  sports_b: sports_b,
  study_b: study_b,
  volunteer_b: volunteer_b,
  exhibition_b: exhibition_b,
};

const useStyles = makeStyles((theme) => ({
  nonVisible: {
    visibility: "hidden",
  },
}));
const Main = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [popupIdx, setPopupIdx] = useState(0);
  const [userName, setUserName] = useState(undefined);
  const [helperText, setHelperText] = useState("");
  const popupImage = [paper, popup1, popup2, popup3, popup4, popup5];
  const popupText1 = [
    "",
    "",
    "거기 누구냐! 신분을 밝혀라!",
    " 들어본 적도 없는 트레져헌터군. 풉 트레져헌터는 아무나 하는게 아니야~ 내 테스트를 통과하면 진짜 보물을 찾을 수 있는 자격을 주지",
    "너에게 단서 7개를 줄테니 한번 정답을 찾아와봐! 다 맞추고 온다면 내가 엄청난걸 줄테니 기대해~~",
    "흠...그럼 이 섬의 운동장인 총동연 부스를 찾아와봐 그럼 단서를 주지",
  ];
  const popupText2 = [
    "",
    "",
    "내.. 내이름은 ",
    "...ㅈ...좋다...! 어떻게 하면 되는거지?",
    "좋다! 단서는 어디서 얻지?",
    "좋아 거기서 보자!!",
  ];
  const getKeysPoint = async () => {
    // 열쇠 위치 랜덤 배치 함수
    // return 값은 object = {분과명 : 열쇠 위치값}
    var keyPoint = {}; // return value object

    //데이터 가져오기
    const depart = dbService.collection("departments");

    // 분과명 가져오기. d_name으로 분과명 들어옴
    (await depart.doc('all').get()).data()['contains'].forEach(async (d_name) => {
      // 분과별 동아리 수(길이값) 가져오기
      const num = (await depart.doc(d_name).get()).data()['contains'].length;

      // 동아리 수 이하의 랜덤 정수 할당
      keyPoint[d_name] = Math.floor(Math.random() * num);
    });
    console.log(keyPoint);
    console.log(JSON.stringify(keyPoint));
    // console.log(keyPoint.hasOwnProperty());
    return keyPoint;
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInputName = () => {
    if (window.event.keyCode == 13) { // input Enter key
      const a = document.getElementById("nameInput");
      let ment = document.getElementById("ment2");
      localStorage.setItem("mju_name", a.value);
      // localStorage.setItem("mju_name", getKeysPoint());
      getKeysPoint().then((res) => localStorage.setItem("getKeys", res));
      setUserName(a.value);
    }
  };
  const handleNext = (event) => { // 버튼 클릭 시 이름 저장하려고
    if ((popupIdx == 2) & (userName === undefined)) {
      const a = document.getElementById("nameInput");
      if (a.value == "") {
        setHelperText("이름을 입력해주세요!");
      } else {
        localStorage.setItem("mju_name", a.value);
        // localStorage.setItem("mju_name", getKeysPoint());
        getKeysPoint().then((res) => localStorage.setItem("getKeys", res));
        setUserName(a.value);
      }
      return;
    }
    setPopupIdx((popupIdx + 1) % 6);
  };
  const handlePrev = () => {
    setPopupIdx((popupIdx - 1) % 6);
  };
  useEffect(() => {
    getKeysPoint()
    if (window.innerWidth > 769) {
      // if (window.innerWidth > 1440) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    if (!localStorage.getItem("mju_name")) {
      setTimeout(handleShow, 4500);
    }
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      const linkName = link.id.slice(0, link.id.indexOf("Link"));
      link.addEventListener("mouseover", (e) => {
        // const target = document.getElementById(linkName)
        // target.src = search[`${linkName}_b`]
        const target = document.getElementById(`${linkName}Hover`);
        target.style.visibility = "visible";
        const btn = document.getElementById(`${linkName}-btn`);
        btn.style.visibility = "visible";
      });
      link.addEventListener("mouseout", (e) => {
        const target = document.getElementById(`${linkName}Hover`);
        target.style.visibility = "hidden";
        const btn = document.getElementById(`${linkName}-btn`);
        btn.style.visibility = "hidden";
      });
    });
    if (isLoading) {
      setIsLoading(false);
    }
  }, [isLoading]);
  const classes = useStyles();
  // isLoading ? <><img src={isDesktop? imageMap: imageMapMobile} className={classes.nonVisible}></img></> :
  return isLoading ? (
    <>
      <img
        src={isDesktop ? imageMap : imageMapMobile}
        className={classes.nonVisible}
      ></img>
    </>
  ) : (
    <>
      <Modal
        id="tutorial"
        show={show}
        onHide={handleClose}
        animation={true}
        autoFocus={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Welcome</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={popupImage[popupIdx]} fluid />
        </Modal.Body>
        {popupIdx == 0 ? (
          <div id="text0">
            <span className="ment0">
              안녕하세요 총동아리연합회 비상대책위원회 입니다!
              <br />
              <br />
              3/8~3/21일까지 동아리 홍보축제가 명지보물섬에서 진행됩니다🏖
              명지보물섬 플랫폼에서 7개분과 43개의 다양한 중앙동아리 부스를
              둘러보시고 원하는 동아리에 자유롭게 지원해보세요!
              <br />
              <br />
              여러분은 명지보물섬에서 트레져헌터가 되어 퀴즈를 풀고 보물을
              찾게됩니다🗝 퀴즈를 끝까지 풀고 보물을 얻어 총동아리연합회에서
              진행하는 이벤트에 참여해 경품도 얻어보세요!
              <br />
            </span>
            <br />
            <span>*팝업창을 끝까지 봐주시길 바랍니다.</span>
          </div>
        ) : (
          <></>
        )}
        <div id="text1">
          <span className={`ment${popupIdx}`} id="ment1">
            {userName && popupIdx == 3 ? (
              <span className="userName">{userName}?</span>
            ) : (
              <></>
            )}
            {popupIdx == 2 ? (
              <TypeWriter typing={0.7}>{popupText1[2]}</TypeWriter>
            ) : (
              <></>
            )}
            {popupIdx == 3 ? (
              <TypeWriter typing={1}>{popupText1[3]}</TypeWriter>
            ) : (
              <></>
            )}
            {popupIdx == 4 ? (
              <TypeWriter typing={1}>{popupText1[4]}</TypeWriter>
            ) : (
              <></>
            )}
            {popupIdx == 5 ? (
              <TypeWriter typing={1}>{popupText1[5]}</TypeWriter>
            ) : (
              <></>
            )}
          </span>
        </div>
        <div id="text2">
          <span className={`ment${popupIdx}`} id="ment2">
            {popupIdx == 2 ? (
              <Fade top duration={1000} delay={3000} distance={"20px"}>
                <span>{popupText2[2]}</span>
              </Fade>
            ) : (
              <></>
            )}
            {popupIdx == 3 ? (
              <Fade top duration={1000} delay={6500} distance={"20px"}>
                <span>{popupText2[3]}</span>
              </Fade>
            ) : (
              <></>
            )}
            {popupIdx == 4 ? (
              <Fade top duration={1000} delay={5000} distance={"20px"}>
                <span>{popupText2[4]}</span>
              </Fade>
            ) : (
              <></>
            )}
            {popupIdx == 5 ? (
              <Fade top duration={1000} delay={4000} distance={"20px"}>
                <span>{popupText2[5]}</span>
              </Fade>
            ) : (
              <></>
            )}

            {userName === undefined && popupIdx == 2 ? (
              <TextField
                error={helperText == "" ? false : true}
                id="nameInput"
                label="내 이름은?"
                size="small"
                variant="outlined"
                onKeyPress={handleInputName}
                helperText={helperText}
              />
            ) : // (isDesktop ? <Button>제출</Button> : <></> )
              popupIdx == 2 ? (
                <Fade top duration={500} distance={"20px"}>
                  <span className="userName">{userName}이다!</span>
                </Fade>
              ) : (
                <></>
              )}
          </span>
        </div>
        <Modal.Footer>
          {popupIdx != 0 ? (
            <Button variant="secondary" onClick={handlePrev}>
              prev
            </Button>
          ) : (
            <></>
          )}
          {popupIdx != 5 ? (
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="primary" onClick={handleClose}>
              GoGo
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      <div id="mapContainer">
        <Fade
          right
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
          <a id="socialLink" href="/booth/사회연구" className="link">
            {/* {isMobile ? ( */}
            <Image src={social_btn} id="social-btn" className="mobile-btn" />
            {/* ) : (
            <></>
          )} */}
          </a>
        </Fade>
        <Fade
          left
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
          <a id="religionLink" href="/booth/종교" className="link">
            {/* {isMobile ? ( */}
            <Image
              src={religion_btn}
              id="religion-btn"
              className="mobile-btn"
            />
            {/* ) : (
            <></>
          )} */}
          </a>
        </Fade>
        <Fade
          left
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
          <a id="artLink" href="/booth/연행예술" className="link">
            {/* {isMobile ? ( */}
            <Image src={art_btn} id="art-btn" className="mobile-btn" />
            {/* ) : (
            <></>
          )} */}
          </a>
        </Fade>
        <Fade
          right
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
          <a id="exhibitionLink" href="/booth/전시창작" className="link">
            {/* {isMobile ? ( */}
            <Image
              src={exhibition_btn}
              id="exhibition-btn"
              className="mobile-btn"
            />
            {/* ) : (
            <></>
          )} */}
          </a>
        </Fade>
        <Fade
          left
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
          <a id="studyLink" href="/booth/학술" className="link">
            {/* {isMobile ? ( */}
            <Image src={study_btn} id="study-btn" className="mobile-btn" />
            {/* ) : (
            <></>
          )} */}
          </a>
        </Fade>
        <Fade
          right
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
          <a id="volunteerLink" href="/booth/봉사" className="link">
            {/* {isMobile ? ( */}
            <Image
              src={volunteer_btn}
              id="volunteer-btn"
              className="mobile-btn"
            />
            {/* ) : (
            <></>
          )} */}
          </a>
        </Fade>
        <Fade
          left
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
          <a id="sportsLink" href="/booth/체육" className="link">
            {/* {isMobile ? ( */}
            <Image src={sports_btn} id="sports-btn" className="mobile-btn" />
            {/* ) : (
            <></>
          )} */}
          </a>
        </Fade>
        <Fade
          right
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
          <a id="chongdongyeonLink" href="/총동연" className="link">
            {/* {isMobile ? ( */}
            <Image
              src={chongdongyeon_btn}
              id="chongdongyeon-btn"
              className="mobile-btn"
            />
            {/* ) : (
            <></>
          )} */}
          </a>
        </Fade>
        {isMobile || isDesktop ? (
          <Fade bottom duration={1500} delay={500} distance="30px">
            <Image
              src={isDesktop ? imageMap : imageMapMobile}
              id="mainImage"
              fluid
            />
          </Fade>
        ) : (
          <></>
        )}
        <Jump duration={800} delay={3000}>
          <Fade duration={1500} delay={500}>
            <Image src={isDesktop ? banner : banner_m} id="banner" fluid />
          </Fade>
        </Jump>
        <Fade
          top
          duration={2000}
          delay={1000}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={religion} id="religion" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={social} id="social" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1800}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={art} id="art" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={2200}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={exhibition} id="exhibition" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={2000}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={study} id="study" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1600}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={volunteer} id="volunteer" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1200}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={sports} id="sports" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1200}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={chongdongyeon} id="chongdongyeon" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1000}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={religion_b} id="religionHover" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={2200}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={exhibition_b} id="exhibitionHover" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={2000}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={study_b} id="studyHover" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1200}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={sports_b} id="sportsHover" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1200}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={chongdongyeon_b} id="chongdongyeonHover" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={social_b} id="socialHover" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1800}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={art_b} id="artHover" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1600}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={volunteer_b} id="volunteerHover" fluid></Image>
        </Fade>
      </div>
    </>
  );
};

export default Main;
