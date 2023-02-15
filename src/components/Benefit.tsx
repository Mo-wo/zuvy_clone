import styles from "../styles/benefit.module.css";
// import swirl1 from "./images/swirl1.png";
// import swirl2 from "./images/swirl2.png";
// import swirl3 from "./images/swirl3.png";
// import swirl4 from "./images/swirl4.png";
// import swirl5 from "./images/swirl5.png";
// import saly from "../images/";
import WaitlistButton from "./Waitlist";

export const Benefit = () => {
  return (
    <section className={styles.section2}>
      <div className={styles.container}>
        {/* <div className={styles.swirls}>
          <img className={styles.swirl1} src={swirl1} alt="Swirl Shape" />
          <img className={styles.swirl2} src={swirl2} alt="Swirl Shape" />
          <img className={styles.swirl3} src={swirl3} alt="Swirl Shape" />
          <img className={styles.swirl4} src={swirl4} alt="Swirl Shape" />
            Start tubleshooting here
          <img className={styles.swirl5} src={swirl5} alt="Swirl Shape" />
        </div> */}
        <div className={styles.content}>
          {/* <img className={styles.saly} src={saly} alt="Saly" /> */}
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
            <WaitlistButton />
          </div>
        </div>
      </div>
    </section>
  );
};

