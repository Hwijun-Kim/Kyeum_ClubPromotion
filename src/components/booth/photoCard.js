import { render } from "react-dom";
import React, { useEffect, useState } from "react";
import { useSprings, animated, to as interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import openDepartmentName from '../../context/openDepartment';

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck({ cards, club_name }) {
  let sub_club_name = club_name.substring(0, 2);
  if (sub_club_name == "P.") {
    sub_club_name = "PE";
  } else if (sub_club_name == "D-") {
    sub_club_name = "디비";
  }
  const keyPoints = localStorage.getItem('key_points') ? JSON.parse(localStorage.getItem('key_points')) : null;
  const [hasKey, setHasKey] = useState(keyPoints && openDepartmentName.includes(sub_club_name) && keyPoints.hasOwnProperty(sub_club_name) && !keyPoints[sub_club_name]);
  // console.log(hasKey);
  // console.log(club_name.substring(0, 2));

  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      const card_length = hasKey ? cards.length : cards.length - 1;
      if (!down && gone.size === card_length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    }
  );

  const getKeyPoint = () => {
    keyPoints[sub_club_name] = true;
    localStorage.setItem("key_points", JSON.stringify(keyPoints));
    setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    alert("찾았다!! 열쇠 조각을 찾았습니다!!!!");
    setHasKey(false);
  }

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)


  return hasKey ?
    props.map(
      ({ x, y, rot, scale }, i) => (
        <animated.div key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
            onClick={i == 0 ? getKeyPoint : null}
          />
        </animated.div>
      )
    ) : props.map(({ x, y, rot, scale }, i) => (
      i != 0 ? (
        < animated.div key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div >
      ) : (<></>)
    ));
  // return props.map(({ x, y, rot, scale }, i) => (
  //   <animated.div key={i} style={{ x, y }}>
  //     {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
  //     {hasKey && cards[i].search("0_key") != -1 ? (
  //       <animated.div
  //         {...bind(i)}
  //         style={{
  //           transform: interpolate([rot, scale], trans),
  //           backgroundImage: `url(${cards[i]})`,
  //         }}
  //         onClick={getKeyPoint}
  //       />
  //     ) : (
  //       <animated.div
  //         {...bind(i)}
  //         style={{
  //           transform: interpolate([rot, scale], trans),
  //           backgroundImage: `url(${cards[i]})`,
  //         }}
  //       />
  //     )}
  //   </animated.div>
  // ));
}
export default Deck;
