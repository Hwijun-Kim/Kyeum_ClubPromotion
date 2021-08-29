import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Button from "@material-ui/core/Button";

import jewelry1 from "../../img/IMG_1257.PNG";
import jewelry2 from "../../img/IMG_1258.PNG";
import jewelry3 from "../../img/IMG_1259.PNG";
import jewelry4 from "../../img/IMG_1260.PNG";
import jewelry5 from "../../img/IMG_1261.PNG";
import jewelry6 from "../../img/IMG_1262.PNG";
import jewelry7 from "../../img/IMG_1263.PNG";

const jewelryImgs = [
	jewelry1,
	jewelry2,
	jewelry3,
	jewelry4,
	jewelry5,
	jewelry6,
	jewelry7,
];

const EndingPopup = () => {
	const randomIdx = Math.floor(Math.random() * 7);
	const [show, setShow] = useState(true);
	const [userName, setUserName] = useState(localStorage.getItem("mju_name"));
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// useEffect(() => {}, [idx]);
	return (
		<Modal show={show} onHide={handleClose} keyboard={false} centered>
			<Modal.Header closeButton>
				<Modal.Title>견습 트레져 헌터가 되다!</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Image src={jewelryImgs[randomIdx]} fluid />
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
	);
};

export default EndingPopup;
