import React, { useContext, useState, useEffect } from "react";
import sampleImg from "../../img/questImg.jpeg";
import sampleImg1 from "../../img/sample1.png";
import sampleImg2 from "../../img/sample2.png";
import sampleImg3 from "../../img/sample3.png";
import sampleImg4 from "../../img/sample4.png";
import EndingPopup from "./endingPopup";

import keyImg1 from "../../img/keys/0_key1.PNG";
import keyImg2 from "../../img/keys/0_key2.PNG";
import keyImg3 from "../../img/keys/0_key3.PNG";
import keyImg4 from "../../img/keys/0_key4.PNG";
import keyImg5 from "../../img/keys/0_key5.PNG";
import keyImg6 from "../../img/keys/0_key6.PNG";
import keyImg7 from "../../img/keys/0_key7.PNG";

const endingImgs = [sampleImg, sampleImg1, sampleImg2, sampleImg3, sampleImg4];
const keyImgs = [keyImg1, keyImg2, keyImg3, keyImg4, keyImg5, keyImg6, keyImg7];

const EndingImgs = () => {
	const [idx, setIdx] = useState(0);
	const [showPopup, setShowPopup] = useState(false);

	const [keyPoints, setkeyPoints] = useState(JSON.parse(localStorage.getItem('key_points')));

	// if (idx >= endingImgs.length) {
	// 	setIdx(endingImgs.length - 1);
	// }
	// useEffect(() => {}, [idx]);
	return (
		// <div style={{
		// 	position: "relative", width: "100%", height: "100%"
		// }}>
		<>
			{/* {showPopup ? <EndingPopup /> : <></>}
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
			/> */}
			<img
				id="sample"
				src={endingImgs[0]}
				style={{
					// position: "absolute",
					width: "100%",
					maxWidth: "800px",
					height: "100%",
					objectFit: "cover",
					objectPosition: "center",
					maxHeight: "400px",
					zIndex: 0,
				}}
			/>
			{keyImgs.map((img, i) => {
				return Object.values(keyPoints)[i] ? (
					<img
						id={`sample${i}`}
						src={img}
						style={{
							position: "absolute",
							// top: 0,
							padding: "10%",
							width: "50%",
							// maxWidth: "360px",
							// height: "50%",
							objectFit: "cover",
							objectPosition: "center",
							// maxHeight: "720px",
							zIndex: 1,
							right: "45%",
							top: "-18%"
						}}
					/>) : (
					<></>
				)
			})}
			{/* </div > */}
		</>
	);
};

export default EndingImgs;
