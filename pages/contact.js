import gsap, { Power4 } from "gsap";
import React, { useEffect, useRef } from "react";
import styles from "../styles/Home.module.scss";
function Contact() {
  const contactClipBackground = useRef(null);
  const contactTitle = useRef(null);
  const address = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: Power4.easeOut, delay: 0.5 },
    });
    tl.to(contactClipBackground.current, {
      width: "100%",
      height: "100vh",
      clipPath: "circle(100%)",
      duration: 2.5,
    }).to(contactTitle.current, { opacity: 1, y: -20, duration: 1 });
    gsap.to(address.current.children[0], { opacity: 1, y: -10, duration: 1.5 });
    gsap.to(address.current.children[1], { opacity: 1, y: -10, duration: 1.5 });
  }, []);
  return (
    <div className={styles._contact}>
      <div
        ref={contactClipBackground}
        className={styles._contact_bg_clip}
      ></div>
      <di className={styles._contact_child}>
        <div className={styles._contact_Title}>
          <h1 ref={contactTitle}>
            Connect
            <br />
            with us
          </h1>
        </div>
        <div ref={address} className={styles._contact__content_address}>
          <p>SEND US AN E-MAIL</p>
          <h2>ayoubwazane306@gmail.com</h2>
        </div>
      </di>
    </div>
  );
}

export default Contact;
