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
	const [isDesktop, setIsDesktop] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isTab, setIsTab] = useState(false);

	const keyPoints = localStorage.getItem("key_points")
		? JSON.parse(localStorage.getItem("key_points"))
		: null;
	// const keyPoints = JSON.parse(localStorage.getItem('key_points'));
	// const allKeys = Object.values(keyPoints).every((value) => value);
	// console.log(allKeys);

	// if (idx >= endingImgs.length) {
	// 	setIdx(endingImgs.length - 1);
	// }
	// useEffect(() => {}, [idx]);
	useEffect(() => {
		if (window.innerWidth > 769) {
			setIsDesktop(true);
			setIsMobile(false);
		} else if(window.innerWidth > 415) {
			setIsTab(true);
		} 
		else {
			setIsMobile(true);
			setIsDesktop(false);
		}
	}, []);
	return keyPoints ? (
		<>
			{showPopup ? <EndingPopup setShowPopup={setShowPopup} /> : <></>}
			{/* <img
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
				src={endingImgs[idx]}
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
				onClick={() => {
					const allKeys = Object.values(keyPoints).every((value) => value);
					if (allKeys) {
						if (idx >= endingImgs.length - 1) {
							setShowPopup(true);
						} else {
							setIdx(idx + 1);
						}
					}
					return null;
				}}
			/>
			{keyImgs.map((img, i) => {
				return Object.values(keyPoints)[i] ? (
					<img
						id={`sample${i}`}
						src={img}
						style={isDesktop?{
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
							top: "-18%",
						}:(isTab?{
							position: "absolute",
							// top: 0,
							padding: "10%",
							width: "60%",
							// maxWidth: "360px",
							// height: "50%",
							objectFit: "cover",
							objectPosition: "center",
							// maxHeight: "720px",
							zIndex: 1,
							right: "47.5%",
							top: "-2%",
						}:{
							position: "absolute",
							// top: 0,
							padding: "10%",
							width: "60%",
							// maxWidth: "360px",
							// height: "50%",
							objectFit: "cover",
							objectPosition: "center",
							// maxHeight: "720px",
							zIndex: 1,
							right: "46.4%",
							top: "13%",
						})}
						onClick={() => {
							const allKeys = Object.values(keyPoints).every((value) => value);
							if (allKeys) {
								if (idx >= endingImgs.length - 1) {
									setShowPopup(true);
								} else {
									setIdx(idx + 1);
								}
							}
							return null;
						}}
					/>
				) : (
					<></>
				);
			})}
		</>
	) : (
		<>
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
		</>
	);
	// return (
	// 	<>
	// 		{showPopup ? <EndingPopup /> : <></>}
	// 		{/* <img
	// 			id="sample"
	// 			src={endingImgs[idx]}
	// 			style={{
	// 				width: "100%",
	// 				maxWidth: "800px",
	// 				height: "100%",
	// 				objectFit: "cover",
	// 				objectPosition: "center",
	// 				maxHeight: "400px",
	// 			}}
	// 			onClick={() => {
	// 				if (idx >= endingImgs.length - 1) {
	// 					setShowPopup(true);
	// 				} else {
	// 					setIdx(idx + 1);
	// 				}
	// 			}}
	// 		/> */}
	// 		<img
	// 			id="sample"
	// 			src={endingImgs[0]}
	// 			style={{
	// 				// position: "absolute",
	// 				width: "100%",
	// 				maxWidth: "800px",
	// 				height: "100%",
	// 				objectFit: "cover",
	// 				objectPosition: "center",
	// 				maxHeight: "400px",
	// 				zIndex: 0,
	// 			}}
	// 		/>
	// 		{keyImgs.map((img, i) => {
	// 			return Object.values(keyPoints)[i] ? (
	// 				<img
	// 					id={`sample${i}`}
	// 					src={img}
	// 					style={{
	// 						position: "absolute",
	// 						// top: 0,
	// 						padding: "10%",
	// 						width: "50%",
	// 						// maxWidth: "360px",
	// 						// height: "50%",
	// 						objectFit: "cover",
	// 						objectPosition: "center",
	// 						// maxHeight: "720px",
	// 						zIndex: 1,
	// 						right: "45%",
	// 						top: "-18%"
	// 					}}

	// 					onClick={() => {
	// 						const allKeys = Object.values(keyPoints).every((value) => value);
	// 						if (allKeys) return setShowPopup(true);
	// 						return null;
	// 					}}
	// 				/>) : (
	// 				<></>
	// 			)
	// 		})}
	// 	</>
	// );
};

export default EndingImgs;
