import React, { useEffect, useRef } from "react";
import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { FaLongArrowAltRight } from "react-icons/fa";
function Reviews({ styles }) {
  gsap.registerPlugin(ScrollTrigger);
  const reviews_parent = useRef(null);
  const review = useRef(null);
  const secondContentRev = useRef(null);
  const firstContentRev = useRef(null);
  const lastContentRev = useRef(null);
  const reviewsTitle = useRef(null);
  useEffect(() => {
    const getRevsTitle = reviewsTitle.current;
    getRevsTitle.innerHTML = getRevsTitle.textContent.replace(
      /\S/g,
      '<span class="GSAPSpan">$&</span>'
    );
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

    tl.to(reviewsTitle.current.children[0], {
      y: -10,
    })
      .to(reviewsTitle.current.children[1], {
        y: -10,
      })
      .to(reviewsTitle.current.children[2], {
        y: -10,
      })
      .to(reviewsTitle.current.children[3], {
        y: -10,
      })
      .to(reviewsTitle.current.children[4], {
        y: -10,
      })
      .to(reviewsTitle.current.children[5], {
        y: -10,
      })
      .fromTo(
        firstContentRev.current,
        { clipPath: "polygon(0 0, 0 0, 0% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0 0 , 100% 0, 100% 100% , 0% 50%)",
        }
      )
      .to(firstContentRev.current.children[0], { scale: 1.6 })
      .fromTo(
        secondContentRev.current,
        { clipPath: "polygon(0 0, 0 0, 0% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0 0 , 100% 0, 100% 100% , 0% 100%)",
        }
      )
      .to(secondContentRev.current.children[0], { scale: 1.6 })
      .fromTo(
        lastContentRev.current,
        { clipPath: "polygon(0 0, 0 0, 0% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0 0 , 100% 0, 100% 100% , 0% 50%)",
        }
      )
      .to(lastContentRev.current.children[0], { scale: 1.6 });
  }, []);
  return (
    <div ref={review} className={styles._review}>
      <div id="revTitle" className={styles._reviews_Title} ref={reviewsTitle}>
        testimonial
      </div>
      <div ref={reviews_parent} className={styles._reviews_Child}>
        <div ref={firstContentRev} className={styles._reviews_Child_each}>
          <div>
            <img src="./testimonial2.jpg" alt="" />
          </div>
          <div className={styles._reviews_Child_each_textContent}>
            <div>
              <h2>Ilham</h2>
            </div>
            <div className={styles._reviews_discover}>
              <div>
                <span>
                  <FaLongArrowAltRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div ref={secondContentRev} className={styles._reviews_Child_each}>
          <div>
            <img src="./testimonial1.jpg" alt="" />
          </div>
          <div className={styles._reviews_Child_each_textContent}>
            <div>
              <h2>Ikram</h2>
            </div>
            <div className={styles._reviews_discover}></div>
          </div>
        </div>
        <div ref={lastContentRev} className={styles._reviews_Child_each}>
          <div>
            <img src="./testimonial3.jpg" alt="" />
          </div>
          <div className={styles._reviews_Child_each_textContent}>
            <div>
              <h2>
                Nassima
                <br />& Tourîa
              </h2>
            </div>
            <div className={styles._reviews_discover}>
              <div>
                <span>
                  <FaLongArrowAltRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.each_rev_textContent}>
        <span>00</span>
      </div>
    </div>
  );
}

export default Reviews;
