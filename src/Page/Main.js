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

import imageMap from "../img/main/empty.jpg";
import imageMapMobile from "../img/main/empty_m.jpg";
import art from "../img/art.png";
import social from "../img/social.png";
import religion from "../img/religion.png";
import sports from "../img/sports.png";
import study from "../img/study.png";
import volunteer from "../img/volunteer.png";
import exhibition from "../img/exhibition.png";
import chongdongyeon from "../img/main/chongdongyeon.png";
import art_b from "../img/art_b.png";
import social_b from "../img/social_b.png";
import religion_b from "../img/religion_b.png";
import sports_b from "../img/sports_b.png";
import study_b from "../img/study_b.png";
import volunteer_b from "../img/volunteer_b.png";
import exhibition_b from "../img/exhibition_b.png";
import chongdongyeon_b from "../img/main/chongdongyeon_b.png";
import art_btn from "../img/main/art_btn.png";
import social_btn from "../img/main/social_btn.png";
import religion_btn from "../img/main/religion_btn.png";
import sports_btn from "../img/main/sports_btn.png";
import study_btn from "../img/main/study_btn.png";
import volunteer_btn from "../img/main/volunteer_btn.png";
import exhibition_btn from "../img/main/exhibition_btn.png";
import chongdongyeon_btn from "../img/main/chongdongyeon_btn.png";
import TextField from "@material-ui/core/TextField";

import popup1 from "../img/장면1.JPG";
import popup2 from "../img/장면2.JPG";
import popup3 from "../img/장면3.JPG";
import popup4 from "../img/장면4.JPG";
import popup5 from "../img/장면5.JPG";
import popup6 from "../img/장면6.JPG";
import popup7 from "../img/장면7.JPG";
import popup8 from "../img/장면8.JPG";
import popup9 from "../img/장면9.JPG";

import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";
// import artImg from "../img/art.jpg";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import banner from "../img/main/banner.png";
import banner_m from "../img/main/banner_m.png";
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
  const popupImage = [
    // paper,
    popup1,
    popup2,
    popup3,
    popup4,
    popup5,
    popup6,
    popup7,
    popup8,
    popup9,
  ];
  const popupText1 = [
    "내 이름은",
    "저 멀리 먼저 도착해 있는 오키와 도키가 보인다",
    "엇 그런데 무슨 일이지? 수상한 사람들이 나타났다",
    "",
    "너희도 보물을 찾으러 왔구나!",
    "으악!!!!!!",
    "오키와 도키는 해적들에게 당한 것 같다!",
    "잠시 후 해적들은 조각들을 던지고 보물섬을 떠났다",
    "저 조각들이 오키와 도키를 구할 수 있는 단서인 것 같다!",
  ];
  const popupText2 = [
    "오늘 오키, 도키와 보물섬 모험을 하기로 했다",
    "엄청 신나보이는군",
    "망원경으로 더 자세히 봐야겠어!",
    "",
    "그렇게는 못 두지. 얘들아 저 녀석들을 가둬라!",
    "",
    "손이 묶인 채로 어디론가 끌려갔다",
    "저 조각들은 무언가를 부셔놓은 것 같았다",
    "어서 빨리 조각들을 찾아 구해줘야지!",
  ];
  async function setKeysPoint() {
    // 열쇠 위치 랜덤 배치 함수
    const getRandomValue = (num) => Math.floor(Math.random() * num);

    //데이터 가져오기
    const doc_all = dbService.collection("departments").doc('all');

    // 분과명 가져오기.
    const d_names = (await doc_all.get()).data()["contains"]

    // 분과별 동아리 수에 따른 랜덤값 생성
    Promise.all( // 분과별 정보 불러오기(비동기과정) 병렬처리
      d_names.map(
        async (d_name) => {
          // 동아리이름이 들어있는 array의 길이값 활용
          return (await dbService.collection("departments").doc(d_name).get()).data()["contains"].length;
        }))
      .then((nums) => { return nums.map(getRandomValue) })
      .then((keyPoints) => { localStorage.getItem("key_points") ?? localStorage.setItem("key_points", keyPoints) });
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInputName = () => {
    if (window.event.keyCode == 13) {
      const a = document.getElementById("nameInput");
      let ment = document.getElementById("ment2");
      localStorage.setItem("mju_name", a.value);
      setUserName(a.value);
      setKeysPoint();
    }
  };
  const handleNext = (event) => {
    if ((popupIdx == 0) & (userName === undefined)) {
      const a = document.getElementById("nameInput");
      if (a.value == "") {
        setHelperText("이름을 입력해주세요!");
      } else {
        localStorage.setItem("mju_name", a.value);
        setUserName(a.value);
        setKeysPoint();
      }
      return;
    }
    setPopupIdx((popupIdx + 1) % 9);
  };
  const handlePrev = () => {
    setPopupIdx((popupIdx - 1) % 9);
  };
  useEffect(() => {
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
        {/* {popupIdx == 0 ? (
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
				)} */}
        <div id="text1">
          <span className={`ment${popupIdx}`} id="ment1">
            {/* {userName && popupIdx == 3 ? (
							<span className="userName">{userName}?</span>
						) : (
							<></>
						)} */}
            {popupIdx == 0 ? (
              <TypeWriter typing={0.7}>{popupText1[0]}</TypeWriter>
            ) : (
              <></>
            )}
            {popupIdx == 1 ? (
              <TypeWriter typing={1}>{popupText1[1]}</TypeWriter>
            ) : (
              <></>
            )}
            {popupIdx == 2 ? (
              <TypeWriter typing={1}>{popupText1[2]}</TypeWriter>
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
            {popupIdx == 6 ? (
              <TypeWriter typing={1}>{popupText1[6]}</TypeWriter>
            ) : (
              <></>
            )}
            {popupIdx == 7 ? (
              <TypeWriter typing={1}>{popupText1[7]}</TypeWriter>
            ) : (
              <></>
            )}
            {popupIdx == 8 ? (
              <TypeWriter typing={1}>{popupText1[8]}</TypeWriter>
            ) : (
              <></>
            )}

            {userName === undefined && popupIdx == 0 ? (
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
              popupIdx == 0 ? (
                <Fade top duration={500} distance={"20px"}>
                  <span className="userName"> {userName}!</span>
                </Fade>
              ) : (
                <></>
              )}
          </span>
        </div>
        <div id="text2">
          <span className={`ment${popupIdx}`} id="ment2">
            {/* {popupIdx == 0 ? (
							<Fade top duration={1000} delay={3000} distance={"20px"}>
								<span>{popupText2[0]}</span>
							</Fade>
						) : (
							<></>
						)}
						{popupIdx == 1 ? (
							<Fade top duration={1000} delay={6500} distance={"20px"}>
								<span>{popupText2[1]}</span>
							</Fade>
						) : (
							<></>
						)}
						{popupIdx == 2 ? (
							<Fade top duration={1000} delay={5000} distance={"20px"}>
								<span>{popupText2[2]}</span>
							</Fade>
						) : (
							<></>
						)}
						{popupIdx == 4 ? (
							<Fade top duration={1000} delay={4000} distance={"20px"}>
								<span>{popupText2[4]}</span>
							</Fade>
						) : (
							<></>
						)}
						{popupIdx == 6 ? (
							<Fade top duration={1000} delay={4000} distance={"20px"}>
								<span>{popupText2[6]}</span>
							</Fade>
						) : (
							<></>
						)}
						{popupIdx == 7 ? (
							<Fade top duration={1000} delay={4000} distance={"20px"}>
								<span>{popupText2[7]}</span>
							</Fade>
						) : (
							<></>
						)}
						{popupIdx == 8 ? (
							<Fade top duration={1000} delay={4000} distance={"20px"}>
								<span>{popupText2[8]}</span>
							</Fade>
						) : (
							<></>
						)} */}
            {popupIdx == 0 ? (
              <Fade top duration={1000} delay={3000} distance={"20px"}>
                <span>{popupText2[0]}</span>
              </Fade>
            ) : (
              <></>
            )}
            {popupIdx == 1 ? (
              <Fade top duration={1000} delay={6500} distance={"20px"}>
                <span>{popupText2[1]}</span>
              </Fade>
            ) : (
              <></>
            )}
            {popupIdx == 2 ? (
              <Fade top duration={1000} delay={5000} distance={"20px"}>
                <span>{popupText2[2]}</span>
              </Fade>
            ) : (
              <></>
            )}
            {popupIdx == 4 ? (
              <Fade top duration={1000} delay={4000} distance={"20px"}>
                <span>{popupText2[4]}</span>
              </Fade>
            ) : (
              <></>
            )}
            {popupIdx == 6 ? (
              <Fade top duration={1000} delay={4000} distance={"20px"}>
                <span>{popupText2[6]}</span>
              </Fade>
            ) : (
              <></>
            )}
            {popupIdx == 7 ? (
              <Fade top duration={1000} delay={4000} distance={"20px"}>
                <span>{popupText2[7]}</span>
              </Fade>
            ) : (
              <></>
            )}
            {popupIdx == 8 ? (
              <Fade top duration={1000} delay={4000} distance={"20px"}>
                <span>{popupText2[8]}</span>
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
