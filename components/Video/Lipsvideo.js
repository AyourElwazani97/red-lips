import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import React, { useEffect, useRef } from "react";
function Lipsvideo({ styles }) {
  const Video = useRef(null);
  gsap.registerPlugin(ScrollToPlugin);
  useEffect(() => {
    const tlV = gsap.timeline();
    tlV.to(Video.current,{y:30})
  }, []);
  return (
    <div className={styles._lipsVideo}>
      <div className={styles._lipsVideo_Child}>
        <div className={styles._lipsVideo_containter}>
          <video ref={Video} autoPlay muted controls={false} loop={true}>
            <source src="./lipsVideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles._lipsVideo_containter_last}>
          <video autoPlay muted controls={false} loop={true}>
            <source src="./lipsVidBg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles._lipsVideo_content}>
          <span>Red Lips</span>
        </div>
      </div>
    </div>
  );
}
export default Lipsvideo;
