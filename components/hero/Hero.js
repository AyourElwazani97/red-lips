import { useEffect, useRef } from "react";
import redLips from "../../public/great.jpg";
import gsap, { Expo, Power4 } from "gsap";
import SplitText from "../../utils/Split3.min.js";
function Hero({ styles }) {
  const Main_Title = useRef(null);
  const leftTitle = useRef(null);
  const HeroImg = useRef(null);
  const rightTitle = useRef(null);
  const inDoubt = useRef(null);
  const heroParent = useRef(null);
  const bg_right = useRef(null);
  const bg_left = useRef(null);
  useEffect(() => {
    gsap.to(heroParent.current, { css: { visibility: "visible" } });
    const split = new SplitText(Main_Title.current, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText(Main_Title.current, {
      type: "lines",
      linesClass: "lineParent",
    });
    const tlIntroduce = gsap.timeline({
      defaults: { delay: 0.5, duration: 1.5 },
    });
    tlIntroduce
      .to(bg_left.current.children[0], { y: 1000, delay: 0.5, duration: 2 })
      .to(bg_right.current.children[0], { y: -1000, delay: 0.5, duration: 2 })
      .to(bg_left.current, { left: "-100%" })
      .to(bg_right.current, { left: "100%" });
    //seperate
    const tl = gsap.timeline({ defaults: { delay: 1, duration: 2 } });
    tl.fromTo(inDoubt.current, { opacity: 0 }, { opacity: 1 })
      .fromTo(
        inDoubt.current,
        { position: "absolute", top: "50%" },
        { position: "absolute", top: "5%" }
      )
      .fromTo(
        inDoubt.current,
        { position: "absolute", right: "50%" },
        { position: "absolute", right: "20%" }
      )
      .to(split.lines, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: Expo.easeOut,
      })
      .fromTo(
        HeroImg.current,
        {
          clipPath: "polygon(0 0 , 0 0, 30% 100% , 0% 100%)",
          opacity: 0,
        },
        {
          opacity: 1,
          clipPath: "polygon(0 0 , 100% 0, 100% 100% , 0% 100%)",
        }
      )
      .fromTo(leftTitle.current, { opacity: 0, x: -500 }, { x: 50, opacity: 1 })
      .fromTo(
        rightTitle.current,
        { x: 500, opacity: 0 },
        { x: -150, opacity: 1 }
      )
      .to(HeroImg.current.children[0], { scale: 1.5 });
  }, []);
  useEffect(() => {
    const rotatedText = inDoubt.current;
    rotatedText.innerHTML = rotatedText.textContent.replace(
      /\S/g,
      '<span class="rotatedSpan">$&</span>'
    );
    const rotatedSpans = document.querySelectorAll(".rotatedSpan");
    rotatedSpans.forEach((letter, i) => {
      letter.style.transform = "rotate(" + i * 15 + "deg)";
    });
  }, []);
  return (
    <section className="hero">
      <style jsx global>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
      <div ref={heroParent} className={styles._hero}>
        <div ref={bg_left} className={styles._hero_bg_red_left}>
          <h1>Red</h1>
        </div>
        <div ref={bg_right} className={styles._hero_bg_red_right}>
          <h1>Lips</h1>
        </div>
        <h1 ref={Main_Title}>Red Lips</h1>
        <div className={styles._hero_Child}>
          <div ref={leftTitle} className={styles.left_title}>
            <span>Life's better in</span>
          </div>
          <div ref={HeroImg} className={styles._hero_container_Img}>
            <img src={redLips} width={840} height={440} alt="" />
          </div>
          <div ref={rightTitle} className={styles.right_title}>
            <span>red lipstick.</span>
          </div>
          <div ref={inDoubt} className={styles.in_Doubt}>
            When - in - doubt - wear - red
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
