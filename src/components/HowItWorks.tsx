import styles from "../styles/howItWorks.module.css";
import screen1 from "../images/appScreen1.svg";
import screen2 from "../images/appScreen2.svg";
import screen3 from "../images/appScreen3.svg";
import ellipse8 from "../images/ellipse8.svg";
import { useEffect, useRef } from "react";

export const HowItWorks = () => {

  const circle1 = useRef<HTMLDivElement>(null!);
  const circle2 = useRef<HTMLDivElement>(null!);
  const circle3 = useRef<HTMLDivElement>(null!);

  // const _circle1 = document.querySelector(".circle1")!;
  let change = circle1.current.className.classlist.add('mowo');
  console.log(circle1.current.className);

  const circleCollection = [circle1, circle2, circle3];
  // console.log(circleCollection)

  // useEffect(() => {
  //   const circleAnimation = () => {
  //     circleCollection.forEach(element => {
  //       console.log(element);
  //   });

  //   }
  //   circleAnimation();
  // }, []);

  return (
    <section className={styles.howItWorksSection}>
      {/* All Content */}
      <div className={styles.container3}>
        {/* Heading */}
        <h2 className={styles.h2}>How it Works</h2>
        {/* Text and Image Content */}
        <div className={styles.content}>
          {/* Circles and Lines */}
          <div className={styles.linewrap}>
            <div className={styles.lircle}>
              <div ref={circle1} className={`${styles.circle} ${styles.one}`}>1</div>
              {/* <div ref={circle1} className={styles.circle}>1</div> */}

              <div className={`${styles.line} ${styles.line1}`}></div>
            </div>
            <div className={styles.lircle}>
              <div ref={circle2} className={`${styles.circle} ${styles.two}`}>2</div>
              {/* <div ref={circle2} className={`${styles.circle}`}>2</div> */}
            
              <div className={`${styles.line} ${styles.line2}`}></div>
            </div>
            <div className={styles.lircle}>
              <div ref={circle3} className={`${styles.circle} ${styles.three}`}>3</div>
              {/* <div ref={circle3} className={`${styles.circle}`}>3</div> */}
            
              <div className={styles.line3}></div>
            </div>
          </div>
          {/* Text Content */}

          <div className={styles.captions}>
            {/* Text 1 */}
            {/* <div className={styles.captionContainer}> */}
              {/* <div className={styles.circle}>1</div> */}

              <div className={`${styles.caption} ${styles.caption1}`}>
                <div className={`${styles.text} ${styles.text1}`}>
                  <h3 className={styles.h3}>Create & Send Your Invoice</h3>

                  <p className={styles.p}>
                    Use Zuvy to create and send invoices to
                    <br /> your customers
                  </p>
                </div>
              </div>
            {/* </div> */}
            {/* Text 2 */}
            {/* <div className={`${styles.caption} ${styles.caption1}`Container}> */}
              {/* <div className={styles.circle}>2</div> */}
              <div className={`${styles.caption} ${styles.caption2}`}>
                <div className={`${styles.text} ${styles.text2}`}>
                  <h3 className={styles.h3}>Request Instant Payout</h3>
                  <p className={styles.p}>
                    Select an invoice and request an
                    <br /> immediate payout. We will loan you the
                    <br /> money upfornt for up to 4 weeks
                  </p>
                </div>
              </div>
            {/* </div> */}
            {/* Text 3 */}
            {/* <div className={`${styles.caption} ${styles.caption1}`Container}> */}
              {/* <div className={styles.circle}>3</div> */}
              <div className={`${styles.caption} ${styles.caption3}`}>
                <div className={`${styles.text} ${styles.text3}`}>
                  <h3 className={styles.h3}>Manage Your Business</h3>
                  <p className={styles.p}>
                    Use our web and mobile app to manage
                    <br /> your invoices, customers and payments
                  </p>
                </div>
              </div>
            {/* </div> */}
          </div>
          {/* Images */}
          <div className={styles.images}>
            <img
              className={`${styles.img} ${styles.phone1}`}
              src={screen2}
              alt="Phone Screen"
            />
            <img
              className={`${styles.img} ${styles.phone2}`}
              src={screen2}
              alt="Phone Screen"
            />
            <img
              className={`${styles.img} ${styles.phone3}`}
              src={screen3}
              alt="Phone Screen"
            />
          </div>
        </div>
      </div>
      <img
        className={styles.ellipse8}
        src={ellipse8}
        alt="background-adornment"
      />
    </section>
  );
};
