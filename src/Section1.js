import styles from "./styles/section1.module.css";
import phone1 from "./images/phone1.png";
import phone2 from "./images/phone2.png";
import dollar1 from "./images/dollar1.png";
import dollar2 from "./images/dollar2.png";
import dollar3 from "./images/dollar3.png";
import WaitlistButton from "./Waitlist";

const Section1 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.landing}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionText}>
            <h1>
              Get Paid <span className={styles.orange}>On time</span>
              <br />
              everytime
            </h1>
            <div className={styles.sectionDesc}>
              <p>
                Dreaming of a world where all customers pay up on time? <br />
                Dream no more with Zuvy
              </p>
            </div>
          </div>
          <div className={styles.sectionImage}>
            <div className={styles.phone}>
              <img className={styles.iPhone1} src={phone1} alt="iPhone" />
              <img className={styles.iPhone2} src={phone2} alt="iPhone" />
            </div>
//Animations still need tweaking
            <div className={styles.coins}>
              <img
                className={styles.dollarCoin1}
                src={dollar1}
                alt="dollar-coin"
              />
              <WaitlistButton />
                  
              <img
                className={styles.dollarCoin2}
                src={dollar2}
                alt="dollar-coin"
              />
              {/* <img
                className={styles.dollarCoin3}
                src={dollar3}
                alt="dollar-coin"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backToTop}>
        <p>🠕</p>
      </div>
    </section>
  );
};

export default Section1;

// https://github.com/Mo-wo/zuvy_clone.git
