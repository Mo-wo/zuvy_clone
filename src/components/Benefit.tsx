import styles from "../styles/benefit.module.css";
import saly from "../images/Saly-10.svg";
import WaitlistButton from "./Waitlist";

export const Benefit = () => {
  return (
    <section className={styles.section2}>
      <div className={styles.container}>
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

