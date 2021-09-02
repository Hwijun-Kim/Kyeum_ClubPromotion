import React, { useContext, useState, useEffect } from "react";
import endingImg1 from "../../img/ending/ending1.JPG";
import endingImg2 from "../../img/ending/ending2.JPG";
import endingImg3 from "../../img/ending/ending3.JPG";
import endingImg4 from "../../img/ending/ending4.JPG";
import endingImg5 from "../../img/ending/ending5.JPG";
import EndingPopup from "./endingPopup";

import keyImg1 from "../../img/keys/0_key1.PNG";
import keyImg2 from "../../img/keys/0_key2.PNG";
import keyImg3 from "../../img/keys/0_key3.PNG";
import keyImg4 from "../../img/keys/0_key4.PNG";
import keyImg5 from "../../img/keys/0_key5.PNG";
import keyImg6 from "../../img/keys/0_key6.PNG";
import keyImg7 from "../../img/keys/0_key7.PNG";

const endingImgs = [endingImg1, endingImg2, endingImg3, endingImg4, endingImg5];
const keyImgs = [keyImg1, keyImg2, keyImg3, keyImg4, keyImg5, keyImg6, keyImg7];

const EndingImgs = () => {
	const isOpen = localStorage.getItem("is_open")
		? JSON.parse(localStorage.getItem("is_open"))
		: false;

	const [idx, setIdx] = useState(isOpen ? 4 : 0);
	const [showPopup, setShowPopup] = useState(false);

	const [showKeys, setShowKeys] = useState(!isOpen);
	// console.log(showKeys)
	const keyPoints = localStorage.getItem("key_points")
		? JSON.parse(localStorage.getItem("key_points"))
		: null;
	// console.log(Object.keys(keyPoints))
	// console.log(Object.values(keyPoints))
	// const keyPoints = JSON.parse(localStorage.getItem('key_points'));
	// const allKeys = Object.values(keyPoints).every((value) => value);
	// console.log(allKeys);

	// if (idx >= endingImgs.length) {
	// 	setIdx(endingImgs.length - 1);
	// }
	// useEffect(() => {}, [idx]);
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
							localStorage.setItem("is_open", true);
							setShowPopup(true);
						} else {
							setIdx(idx + 1);
							setShowKeys(false);
						}
					}
					return null;
				}}
			/>
			{keyImgs.map((img, i) => {
				return showKeys && Object.values(keyPoints)[i] ? (
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
							top: "-18%",
						}}
						onClick={() => {
							const allKeys = Object.values(keyPoints).every((value) => value);
							if (allKeys) {
								if (idx >= endingImgs.length - 1) {
									localStorage.setItem("is_open", true);
									setShowPopup(true);
								} else {
									setIdx(idx + 1);
									setShowKeys(false);
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
