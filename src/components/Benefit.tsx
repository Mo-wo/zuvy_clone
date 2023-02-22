import styles from "../styles/benefit.module.css";
import saly from "../images/Saly-10.svg";
import swirl1 from "../images/swirl1.svg";
import swirl2 from "../images/swirl2.svg";
import swirl3 from "../images/swirl3.svg";
import swirl4 from "../images/swirl4.svg";
import swirl5 from "../images/swirl5.svg";
import WaitlistButton from "./Waitlist";

export const Benefit = () => {
  return (
    <section className={styles.section2}>
      <div className={styles.container}>
        <div className={styles.swirlsWrapper}>
          <img className={`${styles.swirls} ${styles.swirl1}`} src={swirl1} alt="border-design" />
          <img className={`${styles.swirls} ${styles.swirl2}`} src={swirl2} alt="border-design" />
          <img className={`${styles.swirls} ${styles.swirl3}`} src={swirl3} alt="border-design" />
          <img className={`${styles.swirls} ${styles.swirl4}`} src={swirl4} alt="border-design" />
          <img className={`${styles.swirls} ${styles.swirl5}`} src={swirl5} alt="border-design" />
        </div>
        <div className={styles.content}>
          <img className={styles.saly} src={saly} alt="Saly" />
          <div className={styles.text}>
            <h2 className={styles.h2}>
              We are Shortening the
              <br /> gap between invoice
              <br /> generation and payouts
            </h2>
            <p className={styles.p}>
              We provide immediate payouts for your unpaid invoices
              <br />
              Stop waiting weeks to get paid. Create and send your
              <br />
              invoices through Zuvy and get cash upfront today
            </p>
            <div style={{alignSelf: 'flex-start'}}>
              <WaitlistButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

