import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/booth/title";
// import AboutImg from '../Image/AboutImg';
import PortfolioContext from "../../context/context";
import Quiz from "components/chongdongyeon/quiz";
import EndingImgs from "./endingImgs";
import testbg from "../../img/testbg.jpeg";

const getCntCorrect = () => {
	let local = JSON.parse(localStorage.getItem("quizAnswer"));
	if (local === null) {
		return 0;
	}
	let cnt = 0;
	for (let i = 0; i < local.length; i++) {
		if (local[i] !== "") {
			cnt++;
		}
	}
	return cnt;
};
const hunterment = [
	"잘 찾아왔군 너에게 주는 단서다! 단서를 보고 각 Stage에 해당하는 분과에 소속된 동아리 부스에서 답을 찾아 퀴즈를 풀어봐! 자세한 내용은 아래 이벤트 소개를 참고하도록!",
	"자, 두번째 관문이다. 환한 빛속에서 더 빛이 나는 보물을 찾을줄 알아야해",
	"새로운 차원에 온걸 환영한다! 어지러워서 찾기 힘들걸?",
	"생각보다 대단할걸? 절반의 고지다! 힘내봐!",
	"이 웅장한 성에서 찾을 수 있겠어??",
	"고대 신들의 영혼이 담겨 있는 장소에서는 조심해야할거야~",
	"드디어 마지막 관문이다! 너의 능력을 보여줘!",
	"테스트를 통과하다니 제법이군! 너에게 견습 트레져 헌터 수료증을 주도록 하지! 그러면 이제 보물을 찾으러 가볼까?(2주차 이벤트도 기대해주세요!)",
];

// const handleImgClick = () => {
// 	endingImgs;
// };

const About = () => {
	const { departmentObj } = useContext(PortfolioContext);
	const { information, information_m, key } = departmentObj;
	const [isDesktop, setIsDesktop] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [textIdx, setTextIdx] = useState(getCntCorrect());
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
		<section id="about" className={key}>
			<Container>
				<Title title="QUEST" />
				{/* <Quiz /> */}
				<Row className="about-wrapper">
					<Col>
						<Fade bottom duration={1000} delay={600} distance="30px">
							<div style={{ width: "100%", textAlign: "center" }}>
								<EndingImgs />
								<br />
								<br />
								<div>
									*동일 디바이스 동일 브라우저 사용시 결과가 기록됩니다.
								</div>
								<div>
									*브라우저 방문기록, 로컬 저장소, 캐시 삭제시 기록이 사라질 수
									있습니다.
								</div>
							</div>
						</Fade>
					</Col>
					{/* <Col md={6} sm={12}>
						<Fade
							left={isDesktop}
							bottom={isMobile}
							duration={1000}
							delay={1000}
							distance="30px"
						>
							<div className="relativeDiv">
								<img id="hunter" src={hunterImg} />
								<span id={`hunterMent${textIdx}`} className="hunterMent">
									{hunterment[textIdx]}
								</span>
							</div>
						</Fade>
					</Col> */}
				</Row>
			</Container>
		</section>
	);
};

export default About;
