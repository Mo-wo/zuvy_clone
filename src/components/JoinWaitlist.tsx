import styles from "../styles/joinWaitlist.module.css";
import WaitlistButton from "./Waitlist";
import plane from "../images/shuttle.svg";
import ellipse3 from "../images/ellipse3.svg";
import ellipse4 from "../images/ellipse3.svg";



export const JoinWaitlist = () => {
  return (
    <section id="joinwaitlist" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.h2}>
            Be one of the <br /> first Users
          </h2>
          <p className={styles.p}>
            Set your own payment terms on invoices that you
            <br /> recieve from vendors
          </p>
          <form className={styles.subscribe}>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <div className={styles.buttonContainer}>
              <WaitlistButton />
            </div>
          </form>
        </div>
        <div className={styles.spacecraft}>
          <img
            className={styles.plane}
            src={plane}
            alt="Space Shuttle Illustration"
          />
        </div>
      </div>
      <div className={styles.backgroundEllipse}>
        <img
          className={styles.ellipse3}
          src={ellipse3}
          alt="background-adornment"
        />
        <img
          className={styles.ellipse4}
          src={ellipse4}
          alt="background-adornment"
        />
      </div>
    </section>
  );
};