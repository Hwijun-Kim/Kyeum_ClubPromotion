import React, { useContext, useState, useEffect } from "react";
import sampleImg from "../../img/questImg.jpeg";
import sampleImg1 from "../../img/sample1.png";
import sampleImg2 from "../../img/sample2.png";
import sampleImg3 from "../../img/sample3.png";
import sampleImg4 from "../../img/sample4.png";
import EndingPopup from "./endingPopup";

const endingImgs = [sampleImg, sampleImg1, sampleImg2, sampleImg3, sampleImg4];

const EndingImgs = () => {
	const [idx, setIdx] = useState(0);
	const [showPopup, setShowPopup] = useState(false);

	// if (idx >= endingImgs.length) {
	// 	setIdx(endingImgs.length - 1);
	// }
	// useEffect(() => {}, [idx]);
	return (
		<>
			{showPopup ? <EndingPopup /> : <></>}
			<img
				id="sample"
				src={endingImgs[idx]}
				style={{
					width: "100%",
					maxWidth: "800px",
					height: "100%",
					objectFit: "cover",
					objectPosition: "center",
					maxHeight: "400px",
				}}
				onClick={() => {
					if (idx >= endingImgs.length - 1) {
						setShowPopup(true);
					} else {
						setIdx(idx + 1);
					}
				}}
			/>
		</>
	);
};

export default EndingImgs;
