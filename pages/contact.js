import gsap, { Power4 } from "gsap";
import React, { useEffect, useRef } from "react";
import styles from "../styles/Home.module.scss";
function Contact() {
  const contactClipBackground = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: Power4.easeOut, delay: 0.5, duration: 2.5 },
    });
    tl.to(contactClipBackground.current, {
      width: "100%",
      height: "100vh",
      clipPath: "circle(100%)",
    });
  }, []);
  return (
    <div className={styles._contact}>
        //http://dnacapital.com/contact
      <div
        ref={contactClipBackground}
        className={styles._contact_bg_clip}
      ></div>
    </div>
  );
}

export default Contact;
