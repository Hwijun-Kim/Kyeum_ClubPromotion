import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Modal from "react-bootstrap/Modal";
import completeCard from "../../img/complete_card.jpeg";
import Image from "react-bootstrap/Image";
import Grid from "@material-ui/core/Grid";
// import Button from 'react-bootstrap/Button';
import QuizContent from "./quizContent";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center" >
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}

//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "relative",
	},
	layout: {
		width: "auto",
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: "auto",
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
		zIndex: "5",
	},
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end",
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
	border: {
		fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
	},
}));

const steps = [
	"Stage 1",
	"Stage 2",
	"Stage 3",
	"Stage 4",
	"Stage 5",
	"Stage 6",
	"Stage 7",
];

function getStepContent(step) {
	return <QuizContent idx={step} />;
}
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

function Test() {
	const classes = useStyles();
	const theme = useTheme();

	const [cntCorrect, setCntCorrect] = useState(getCntCorrect());
	const [activeStep, setActiveStep] = React.useState(cntCorrect);
	const [isDesktop, setIsDesktop] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [show, setShow] = useState(false);
	const [userName, setUserName] = useState(localStorage.getItem("mju_name"));
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleNext = () => {
		const btn = document.getElementById("submitAnser");
		const ment = document.querySelector(".hunterMent");
		if (btn.firstChild.innerText != "정답!") {
			ment.innerText = "정답을 맞춰야 다음으로 넘어갈 수 있어!!";
		} else {
			ment.id = `hunterMent${activeStep + 1}`;
			ment.innerText = hunterment[activeStep + 1];
			setActiveStep(activeStep + 1);
		}
	};

	const handleBack = () => {
		const ment = document.querySelector(".hunterMent");
		ment.id = `hunterMent${activeStep - 1}`;
		setActiveStep(activeStep - 1);
		ment.innerText = hunterment[activeStep - 1];
	};
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
		<React.Fragment>
			<CssBaseline />
			<Modal show={show} onHide={handleClose} keyboard={false} centered>
				<Modal.Header closeButton>
					<Modal.Title>견습 트레져 헌터가 되다!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image src={completeCard} fluid />
					<div id="completeCard">
						<span id="completeCardMent">{userName}</span>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					{/* <Button variant="primary">Understood</Button> */}
				</Modal.Footer>
			</Modal>
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					{/* <Typography component="h1" variant="h4" align="center" >
            퀘스트
          </Typography> */}

					{isDesktop ? (
						<Stepper
							activeStep={activeStep}
							className={classes.stepper}
							alternativeLabel={true}
						>
							{steps.map((label) => (
								<Step key={label}>
									<StepLabel>{label}</StepLabel>
								</Step>
							))}
						</Stepper>
					) : (
						<></>
					)}
					<React.Fragment>
						{activeStep === steps.length ? (
							<React.Fragment>
								<Grid container>
									<Grid item xs={12}>
										<div style={{ textAlign: "center" }}>
											수료증을 갖고 아래의 이벤트를 참여해보세요!
										</div>
									</Grid>
									<Grid item xs={12}>
										<div style={{ textAlign: "center" }}>
											<Button
												variant="contained"
												color="primary"
												onClick={handleShow}
												className={classes.button}
											>
												{/* <Button  onClick={handleShow} > */}
												수료증 발급
											</Button>
										</div>
									</Grid>
								</Grid>
							</React.Fragment>
						) : (
							<React.Fragment>
								{/* {activeStep !== undefined ? <QuizContent idx={activeStep} /> : <></>} */}
								<QuizContent idx={activeStep} />
								{isMobile ? (
									<>
										<br></br>
										<br></br>
										<MobileStepper
											variant="dots"
											steps={8}
											position="static"
											activeStep={activeStep}
											className={classes.root}
											nextButton={
												<Button
													size="small"
													onClick={handleNext}
													disabled={activeStep === 8}
												>
													{activeStep === steps.length - 1
														? "Complete"
														: "Next"}
													{theme.direction === "rtl" ? (
														<KeyboardArrowLeft />
													) : (
														<KeyboardArrowRight />
													)}
												</Button>
											}
											backButton={
												<Button
													size="small"
													onClick={handleBack}
													disabled={activeStep === 0}
												>
													{theme.direction === "rtl" ? (
														<KeyboardArrowRight />
													) : (
														<KeyboardArrowLeft />
													)}
													Back
												</Button>
											}
										/>
									</>
								) : (
									<div className={classes.buttons}>
										{activeStep !== 0 && (
											<Button onClick={handleBack} className={classes.button}>
												Back
											</Button>
										)}
										<Button
											variant="contained"
											color="primary"
											onClick={handleNext}
											className={classes.button}
										>
											{activeStep === steps.length - 1 ? "Complete" : "Next"}
										</Button>
									</div>
								)}
							</React.Fragment>
						)}
					</React.Fragment>
				</Paper>
				{/* <Copyright /> */}
			</main>
		</React.Fragment>
	);
}
export default Test;
