import styles from "../styles/hero.module.css";
import rect1 from "../images/heroRect1.svg";
import rect2 from "../images/heroRect2.svg";
import phone1 from "../images/landingPhoneScreen1.svg";
import phone2 from "../images/zuvySplashScreen.svg";
import dollar1 from "../images/dollarCoin1.svg";
import dollar2 from "../images/dollarCoin2.svg";
import dollar3 from "../images/dollarCoin3.svg";
import WaitlistButton from "./Waitlist";

export const Hero = () => {
  return (
    <section className={styles.section}>
       <div className={styles.rectWrapper}>
          <img className={styles.rect1} src={rect1} alt="background-designs" />
          <img className={styles.rect2} src={rect2} alt="background-designs" />
        </div>
      {/* <div className={styles.landing}> */}
       
        <div className={styles.sectionContent}>
          <div className={styles.sectionText}>
            <h1>
              Get Paid <span className={styles.orange}>On time </span>
              {/* <br /> */}
              everytime
            </h1>
            <div className={styles.sectionDesc}>
              <p>
                Dreaming of a world where all customers pay up on time? <br />
                Dream no more with Zuvy
              </p>
            </div>
            <div className={styles.waitlistButton}>
              <WaitlistButton />
            </div>
          </div>
          <div className={styles.sectionImage}>
            <div className={styles.phone}>
              <img className={styles.iPhone1} src={phone1} alt="iPhone" />
              <img className={styles.iPhone2} src={phone2} alt="iPhone" />
            </div>
            <div className={styles.coins}>
              <img
                className={styles.dollarCoin1}
                src={dollar1}
                alt="dollar-coin"
              />                  
              <img
                className={styles.dollarCoin2}
                src={dollar2}
                alt="dollar-coin"
              />
              <img
                className={styles.dollarCoin3}
                src={dollar3}
                alt="dollar-coin"
              />
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};