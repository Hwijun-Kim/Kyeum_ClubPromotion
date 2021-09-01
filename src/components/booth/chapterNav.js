import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import { Link } from "react-router-dom";
import 통해 from "../../img/icon/통해.svg";
import 흑풍_the_BLAST from "../../img/icon/흑풍 the BLAST.svg";
import 주리랑 from "../../img/icon/주리랑.svg";
import 화이트홀스 from "../../img/icon/화이트홀스.svg";
import 명지서법 from "../../img/icon/명지서법.svg";
import Als from "../../img/icon/ALS.svg";
import 너나들이 from "../../img/icon/너나들이.svg";
import RCY from "../../img/icon/rcy.svg";
import PTPI from "../../img/icon/ptpi.svg";
import 키비탄 from "../../img/icon/키비탄.svg";
import 나누미 from "../../img/icon/나누미.svg";
import SK루키 from "../../img/icon/SK루키.svg";
import PER from "../../img/icon/per.svg";
import 인액터스 from "../../img/icon/인액터스.svg";
import Flower from "../../img/icon/Flow_er.svg";
import 농어민후생연구회_흙 from "../../img/icon/농어민후생연구회 흙.svg";
import 비주얼 from "../../img/icon/비주얼.svg";
import COA from "../../img/icon/코아.svg";
import 디비전 from "../../img/icon/디비전.svg";
import 포토랩 from "../../img/icon/포토랩.svg";
import 콕콕콕 from "../../img/icon/콕콕콕.svg";
import MJTA from "../../img/icon/MJTA.svg";
import 바다이야기 from "../../img/icon/바다이야기.svg";
import 무릉도원 from "../../img/icon/무릉도원.svg";
import 나이너스 from "../../img/icon/나이너스.svg";
import 삼박자 from "../../img/icon/삼박자.svg";
import 굴렁쇠 from "../../img/icon/굴렁쇠.svg";
import 파인 from "../../img/icon/파인.svg";
import CCC from "../../img/icon/C.C.C.svg";
import 실로암 from "../../img/icon/실로암.svg";
import CFM from "../../img/icon/CFM.svg";
import UBF from "../../img/icon/UBF.svg";
import TIME from "../../img/icon/TIME.svg";
import 대건안드레아 from "../../img/icon/대건안드레아.svg";
import 스카우트 from "../../img/icon/스카우트.svg";
import FC명지 from "../../img/icon/FC명지.svg";
import 명지챌린저스 from "../../img/icon/명지챌린저스.svg";
import 씨네메이션 from "../../img/icon/씨네메이션.svg";
import MIRS from "../../img/icon/MIRS.svg";
import MGH from "../../img/icon/MGH.svg";
import 극예술연구회_알 from "../../img/icon/극예술알.svg";

const Chapternav = () => {
  const { departmentObj } = useContext(PortfolioContext);
  const { id, contains } = departmentObj;
  const dic = {
    명지챌린저스: 명지챌린저스,
    씨네메이션: 씨네메이션,
    MIRS: MIRS,
    MGH: MGH,
    극예술연구회_알: 극예술연구회_알,
    CCC: CCC,
    실로암: 실로암,
    CFM: CFM,
    UBF: UBF,
    통해: 통해,
    흑풍_the_BLAST: 흑풍_the_BLAST,
    주리랑: 주리랑,
    화이트홀스: 화이트홀스,
    Als: Als,
    명지서법: 명지서법,
    너나들이: 너나들이,
    RCY: RCY,
    PTPI: PTPI,
    키비탄: 키비탄,
    나누미: 나누미,
    SK루키: SK루키,
    PER: PER,
    인액터스: 인액터스,
    Flower: Flower,
    농어민후생연구회_흙: 농어민후생연구회_흙,
    비주얼: 비주얼,
    COA: COA,
    디비전: 디비전,
    포토랩: 포토랩,
    콕콕콕: 콕콕콕,
    MJTA: MJTA,
    바다이야기: 바다이야기,
    무릉도원: 무릉도원,
    나이너스: 나이너스,
    삼박자: 삼박자,
    굴렁쇠: 굴렁쇠,
    파인: 파인,
    TIME: TIME,
    대건안드레아: 대건안드레아,
    스카우트: 스카우트,
    FC명지: FC명지,
  };
  useEffect(() => {
    function isTouch() {
      return !!(
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }
    const touchDevice = isTouch();
    const a = document.getElementsByTagName("html");
    // if (!touchDevice) {
    //   document.getElementsByTagName("html")[0].classList.add("touch");
    // }

    if (touchDevice) {
      const debouncedResize = debounce(handleResizeEvent, 100);

      window.removeEventListener("resize", debouncedResize);
      window.addEventListener("resize", debouncedResize);

      const leftPaddle = ".chapternav-paddle-left";
      const rightPaddle = ".chapternav-paddle-right";
      const startOfList = "left";
      const endOfList = "right";
      const items = Array.from(document.querySelectorAll(".chapternav-item"));
      const navItems = document.querySelector(".chapternav-items");
      const itemPadding = 40;
      const itemsWidth = items.reduce(function (sum, item) {
        return sum + item.clientWidth + itemPadding;
      }, 0);
      // In the future build this list out of items array
      const observedItems = items
        .map(function (item, index) {
          return {
            name: item.textContent.replace(/\s/g, ""),
            visible: false,
            index,
          };
        })
        .reduce(function (list, current) {
          return { ...list, [current.name]: current };
        }, {});
      // Object to track which request animation frame callbacks are active
      const rafTickers = {
        resizeTicker: true,
        hidePreviousPaddle: false,
        hideNextPaddle: false,
        showPreviousPaddle: false,
        showNextPaddle: false,
      };

      let width = window.innerWidth;

      requestAnimationFrame(updatePaddles);

      items.forEach(function (item) {
        setObserversOnItem(item);
      });

      function handleResizeEvent(e) {
        if (
          (width < itemsWidth && window.innerWidth >= itemsWidth) ||
          (width >= itemsWidth && window.innerWidth < itemsWidth)
        ) {
          updatePaddles();
        }

        width = window.innerWidth;
      }

      function handlePaddleClick(e) {
        const forward = e.target.classList.contains("chapternav-paddle-right");
        // Number of items to scroll
        const nextGroupLength = numItemsVisible();
        const observedArray = Object.values(observedItems);
        const visibleItems = observedArray
          .filter(function (value) {
            return value.visible;
          })
          .sort(function (a, b) {
            return a.index - b.index;
          });
        // Probably need to use this for something related to scrolling the list
        let hiddenItemIndex;

        if (forward) {
          const lastVisibleIndex = visibleItems[visibleItems.length - 1].index;
          const hiddenItems = observedArray
            .filter(function (value) {
              return !value.visible && value.index > lastVisibleIndex;
            })
            .sort(function (a, b) {
              return a.index - b.index;
            });

          if (hiddenItems.length < nextGroupLength) {
            // Only scroll the length of hidden items
            const lastHiddenItem = hiddenItems[hiddenItems.length - 1];
            items[lastHiddenItem.index].scrollIntoView({ behavior: "smooth" });
            hiddenItemIndex = lastHiddenItem.index;
          } else {
            // Scroll the length of nextGroupLength
            // Only scroll the length of hidden items
            const lastHiddenItem = hiddenItems[nextGroupLength - 1];
            items[lastHiddenItem.index].scrollIntoView({ behavior: "smooth" });
            hiddenItemIndex = lastHiddenItem.index;
          }
        } else {
          const firstVisibleIndex = visibleItems[0].index;
          const hiddenItems = observedArray
            .filter(function (value) {
              return !value.visible && value.index < firstVisibleIndex;
            })
            .sort(function (a, b) {
              if (a.index < b.index) return -1;
              if (a.index > b.index) return 1;
              return 0;
            });

          if (hiddenItems.length < nextGroupLength) {
            // Only scroll the length of hidden items
            const firstHiddenItem = hiddenItems[0];
            items[firstHiddenItem.index].scrollIntoView({ behavior: "smooth" });
            hiddenItemIndex = firstHiddenItem.index;
          } else {
            // Scroll the length of nextGroupLength
            // Only scroll the length of hidden items
            const firstHiddenItem =
              hiddenItems[firstVisibleIndex - nextGroupLength + 1];
            items[firstHiddenItem.index].scrollIntoView({ behavior: "smooth" });
            hiddenItemIndex = firstHiddenItem.index;
          }
        }
      }

      // raf update functions
      function updatePaddles() {
        // If navItems scrollLeft is 0 don't show the left paddle
        // If navItems scrollLeft equals scrollWidth don't show the right paddle
        if (width < itemsWidth) {
          // Enable
          if (navItems.scrollLeft !== 0) {
            hideShowRafCall(false, startOfList);
          }
          if (navItems.scrollLeft !== navItems.scrollWidth) {
            hideShowRafCall(false, endOfList);
          }
        } else {
          // Disable left and right paddles
          hideShowRafCall(true, startOfList);
          hideShowRafCall(true, endOfList);
        }
      }
      // Add aria-hidden attributes to hide/show functions
      function hidePaddle(className, ticker) {
        const paddle = document.querySelector(className);
        paddle.disabled = true;
        paddle.setAttribute("aria-hidden", true);
        paddle.removeEventListener("click", handlePaddleClick);
        rafTickers[ticker] = false;
      }

      function showPaddle(className, ticker, direction) {
        const atStart = navItems.scrollLeft === 0 && direction === startOfList;
        const atEnd =
          navItems.scrollLeft === navItems.scrollWidth &&
          direction === endOfList;

        if (width < itemsWidth && !atStart && !atEnd) {
          const paddle = document.querySelector(className);
          paddle.disabled = false;
          paddle.setAttribute("aria-hidden", false);
          // Removing event listener first to ensure there is only ever one
          paddle.removeEventListener("click", handlePaddleClick);
          paddle.addEventListener("click", handlePaddleClick);
        }
        rafTickers[ticker] = false;
      }

      // End raf update functions
      function setObserversOnItem(item) {
        const options = {
          root: navItems,
          rootMargin: "0px",
          threshold: 0.9,
        };
        const observer = new IntersectionObserver(observerCallback, options);
        observer.observe(item);
      }

      function observerCallback(entries, observer) {
        entries.forEach(function (entry) {
          let name = entry.target.id.replace(/\s/g, "");
          observedItems[name].visible = entry.isIntersecting;
          if (observedItems[name].index === 0 && entry.isIntersecting) {
            hideShowRafCall(true, startOfList);
          } else if (observedItems[name].index === 0 && !entry.isIntersecting) {
            hideShowRafCall(false, startOfList);
          } else if (
            observedItems[name].index === numItemsObserved() - 1 &&
            entry.isIntersecting
          ) {
            hideShowRafCall(true, endOfList);
          } else if (
            observedItems[name].index === numItemsObserved() - 1 &&
            !entry.isIntersecting
          ) {
            hideShowRafCall(false, endOfList);
          }
        });
      }

      function hideShowRafCall(hide, direction) {
        if (hide && direction === startOfList) {
          // Hide previous paddle button
          if (!rafTickers.hidePreviousPaddle) {
            requestAnimationFrame(function () {
              hidePaddle(leftPaddle, "hidePreviousPaddle");
            });
            rafTickers.hidePreviousPaddle = true;
          }
        } else if (hide && direction === endOfList) {
          // Hide next paddle button
          if (!rafTickers.hideNextPaddle) {
            requestAnimationFrame(function () {
              hidePaddle(rightPaddle, "hideNextPaddle");
            });
            rafTickers.hideNextPaddle = true;
          }
        } else if (!hide && direction === startOfList) {
          // Show previous paddle button
          if (!rafTickers.showPreviousPaddle) {
            requestAnimationFrame(function () {
              showPaddle(leftPaddle, "showPreviousPaddle", startOfList);
            });
            rafTickers.showPreviousPaddle = true;
          }
        } else if (!hide && direction === endOfList) {
          // Show next paddle button
          if (!rafTickers.showNextPaddle) {
            requestAnimationFrame(function () {
              showPaddle(rightPaddle, "showNextPaddle", endOfList);
            });
            rafTickers.showNextPaddle = true;
          }
        }
      }

      function numItemsVisible() {
        return Object.values(observedItems).filter(function (value) {
          return value.visible;
        }).length;
      }

      function numItemsObserved() {
        return items.length;
      }

      function debounce(callback, wait, immediate) {
        let timeout;
        return function () {
          const context = this;
          const args = arguments;
          const callbackForTimeout = function () {
            timeout = null;
            if (!immediate) {
              callback.apply(context, args);
            }
          };
          clearTimeout(timeout);
          timeout = setTimeout(callbackForTimeout, wait);
          if (immediate && !timeout) {
            callback.apply(context, args);
          }
        };
      }
    }
  }, []);

  return (
    <nav id="chapternav" className="chapternav">
      <div className="chapternav-wrapper">
        <ul className="chapternav-items">
          {contains &&
            contains.map((contain) => {
              const url = `/booth/${id}/${contain.key}`;
              // const url = `./${name}/${contain}`;
              return (
                <li
                  key={contain.name}
                  id={contain.name}
                  className="chapternav-item"
                >
                  <a className="chapternav-link" href={url}>
                    <figure className="chapternav-icon">
                      <img
                        width="40"
                        height="32"
                        viewBox="0 0 40 32"
                        src={dic[contain.key]}
                      ></img>
                    </figure>
                    <span className="chapternav-label">{contain.name}</span>
                  </a>
                </li>
              );
            })}
        </ul>
        <div className="chapternav-paddles">
          <button
            id="left-paddle"
            className="chapternav-paddle chapternav-paddle-left"
            aria-hidden="true"
            disabled
          ></button>
          <button
            id="right-paddle"
            className="chapternav-paddle chapternav-paddle-right"
            aria-hidden="true"
            disabled
          ></button>
        </div>
      </div>
    </nav>
  );
};

export default Chapternav;
