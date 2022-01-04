import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import React, { useEffect, useRef } from "react";
function Lipsvideo({ styles }) {
  const Video = useRef(null);
  gsap.registerPlugin(ScrollToPlugin);
  const lipsVideo = useRef(null);
  const para_lips = useRef(null);
  useEffect(() => {
    const tlV = gsap.timeline({
      defaults: { delay: 0.2, duration: 2 },
      scrollTrigger: {
        trigger: lipsVideo.current,
        toggleActions: "play",
        start: "top top",
        end: "=+300%",
        scrub: 1,
        pin: true,
      },
    });
    tlV
      .fromTo(Video.current, { x: -898, y: -250 }, { x: 100 })
      .to(para_lips.current, { y: -10 })
      .to(para_lips.current.children[0], { color: "#fc1d1d" })
  }, []);
  return (
    <div ref={lipsVideo} className={styles._lipsVideo}>
      <div className={styles._lipsVideo_Child}>
        <div ref={Video} className={styles._lipsVideo_containter}>
          <video autoPlay muted controls={false} loop={true}>
            <source src="./redLips.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles._lipsVideo_content}>
          <p ref={para_lips}>
            Different Lips , One <span>Color</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Lipsvideo;
