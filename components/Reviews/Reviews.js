import React, { useEffect, useRef } from "react";
import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { FaLongArrowAltRight } from "react-icons/fa";
function Reviews({ styles }) {
  gsap.registerPlugin(ScrollTrigger);
  const reviews_parent = useRef(null);
  const review = useRef(null);
  const secondContentRev = useRef(null);
  const thirdContentRev = useRef(null);
  const lastContentRev = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        ease: Expo.easeOut,
        trigger: review.current,
        toggleActions: "play",
        start: "top top",
        end: "=+300%",
        scrub: 1,
        pin: true,
      },
    });
    tl.fromTo(
      reviews_parent.current.children[2],
      { clipPath: "polygon(0 0, 0 0, 0% 100%, 0% 100%)" },
      {
        clipPath: "polygon(0 0 , 100% 0, 100% 100% , 0% 50%)",
        duartion: 2,
      }
    )
      .to(reviews_parent.current.children[2], {
        clipPath: "polygon(0 0, 0 0, 0% 100%, 0% 100%)",
        duartion: 2,
      })
      .fromTo(
        reviews_parent.current.children[0],
        { clipPath: "polygon(0 0, 0 0, 0% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0 0 , 100% 0, 100% 100% , 0% 50%)",
          duartion: 2,
        }
      )
      .to(reviews_parent.current.children[0], {
        clipPath: "polygon(0 0, 0 0, 0% 100%, 0% 100%)",
        duartion: 2,
      })
      .fromTo(
        reviews_parent.current.children[1],
        { clipPath: "polygon(0 0, 0 0, 0% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0 0 , 100% 0, 100% 100% , 0% 50%)",
          duartion: 2,
        }
      )
      .to(reviews_parent.current.children[1], {
        clipPath: "polygon(0 0, 0 0, 0% 100%, 0% 100%)",
        duartion: 2,
      });
  }, []);
  return (
    <div ref={review} className={styles._review}>
      <h1>Testimonial</h1>
      <div ref={reviews_parent} className={styles._reviews_Child}>
        <div className={styles._reviews_Child_each}>
          <div>
            <img src="./testimonial2.jpg" alt="" />
          </div>
          <div
            ref={secondContentRev}
            className={styles._reviews_Child_each_textContent}
          >
            <div>
              <h2>
                Oum
                <br />
                Tourîa
              </h2>
            </div>
            <div className={styles._reviews_discover}>
              <div>
                <h6>Discover</h6>
              </div>
              <div>
                <span>
                  <FaLongArrowAltRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div ref={thirdContentRev} className={styles._reviews_Child_each}>
          <div>
            <img src="./testimonial1.jpg" alt="" />
          </div>
          <div className={styles._reviews_Child_each_textContent}>
            <div>
              <h2>
                Oum
                <br />
                Tourîa
              </h2>
            </div>
            <div className={styles._reviews_discover}>
              <div>
                <h6>Discover</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={styles._reviews_Child_each}>
          <div>
            <img src="./testimonial3.jpg" alt="" />
          </div>
          <div
            ref={lastContentRev}
            className={styles._reviews_Child_each_textContent}
          >
            <div>
              <h2>
                Oum
                <br />
                Tourîa
              </h2>
            </div>
            <div className={styles._reviews_discover}>
              <div>
                <h6>Discover</h6>
              </div>
              <div>
                <span>
                  <FaLongArrowAltRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
