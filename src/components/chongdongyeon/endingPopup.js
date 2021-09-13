import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Button from "@material-ui/core/Button";

import jewelry1 from "../../img/jewelry/jewelry1.PNG";
import jewelry2 from "../../img/jewelry/jewelry2.PNG";
import jewelry3 from "../../img/jewelry/jewelry3.PNG";
import jewelry4 from "../../img/jewelry/jewelry4.PNG";
import jewelry5 from "../../img/jewelry/jewelry5.PNG";
import jewelry6 from "../../img/jewelry/jewelry6.PNG";
import jewelry7 from "../../img/jewelry/jewelry7.PNG";

const jewelryImgs = [
	jewelry1,
	jewelry2,
	jewelry3,
	jewelry4,
	jewelry5,
	jewelry6,
	jewelry7,
];

const EndingPopup = ({ setShowPopup }) => {
	const jewelryIdx = localStorage.getItem("jewelry_idx") ? localStorage.getItem("jewelry_idx") : 0;
	const [show, setShow] = useState(true);
	const [userName, setUserName] = useState(localStorage.getItem("mju_name"));
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// useEffect(() => {}, [idx]);
	useEffect(() => {
		if (!show) {
			setShowPopup(false);
		}
	}, [show]);
	return (
		<Modal show={show} onHide={handleClose} keyboard={false} centered>
			{/* <Modal.Header closeButton>
				<Modal.Title>견습 트레져 헌터가 되다!</Modal.Title>
			</Modal.Header> */}
			<Modal.Body>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignContent: "center",
					}}
				>
					<div
						id="completeCard"
						//style={{ position: "relative", top: "7.5rem", left: "19.5%" }}
					>
						<span id="completeCardMent" style={{ fontSize: "3rem" }}>
							{userName}
						</span>
					</div>
					<Image src={jewelryImgs[jewelryIdx]} fluid />
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="text" onClick={handleClose}>
					Close
				</Button>
				{/* <Button variant="primary">Understood</Button> */}
			</Modal.Footer>
		</Modal>
	);
};

export default EndingPopup;
