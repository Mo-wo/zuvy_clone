import styles from "../styles/features.module.css";
import features from "../images/dashboardScreenshot.svg";
import ellipse4 from "../images/ellipse4.svg";
import ellipse6 from "../images/ellipse6.svg";


export const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.h2}>Features</h2>
          <p>
            Zuvy gives you the capital and flexibility
            <br />
            that you need to grow your business and cover your expenses
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={features}
            alt="Screenshot of features"
          />
        </div>
        <img
          className={styles.ellipse4}
          src={ellipse4}
          alt="background-adornment"
        />
      </div>
        <img
          className={styles.ellipse6}
          src={ellipse6}
          alt="background-adornment"
        />
    </section>
  );
};

