import gsap, { Power3 } from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import React, { useEffect, useRef } from "react";
function Lipsvideo({ styles }) {
  const Video = useRef(null);
  gsap.registerPlugin(ScrollToPlugin);
  const lipsVideo = useRef(null);
  const para_lips = useRef(null);
  const video_redBg = useRef(null);
  const video_whiteBg = useRef(null);
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
      .to(video_redBg.current, { left: 0, duration: 2 })
      .fromTo(
        Video.current,
        {
          x: -900,
          y: -250,
        },
        {
          x: 100,
          duration: 2,
        }
      )
      .to(para_lips.current, { y: -10 })
      .to(para_lips.current.children[0], { color: "#fc1d1d" })
      .fromTo(
        video_whiteBg.current,
        { clipPath: "inset(100% 100%)" },
        { clipPath: "inset(0% 0%)", duration: 2 }
      );
  }, []);
  return (
    <div ref={lipsVideo} className={styles._lipsVideo}>
      <div ref={video_redBg} className={styles._lipsVideo_redIt}></div>
      <div ref={video_whiteBg} className={styles._lipsVideo_whiteIt}></div>
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
