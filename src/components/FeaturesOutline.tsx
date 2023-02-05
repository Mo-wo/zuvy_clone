import styles from "../styles/featuresOutline.module.css";
import featuresScreen from "../images/featuresAppScreen.svg";
import ellipse7 from "../images/ellipse7.svg";

export const FeaturesOutline = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Phone Screen */}
        <div className={styles.phoneWrapper}>
          <img className={styles.phone} src={featuresScreen} />
        </div>
        {/* Boxes */}
        <div className={styles.boxesWrapper}>
          {/* First Row Boxes */}
          <div className={styles.box}>
            {/* Box-1 */}
            <div className={`${styles.contentbox} ${styles.contentbox1}`}>
              <div className={`${styles.icon} ${styles.icon1}`}></div>
              <h3 className={styles.h3}>Create Invoices via WhatsApp</h3>
              <p className={styles.text}>
                Use our WhatsApp Assistant to instanstly create and send
                invoices to customers
              </p>
            </div>
            {/* Box-2 */}
            <div className={`${styles.contentbox} ${styles.contentbox2}`}>
              <div className={`${styles.icon} ${styles.icon2}`}></div>
              <h3 className={styles.h3}>Manage the invoices you recieve</h3>
              <p className={styles.text}>
                Set your own payment terms on invoices that you recieve vendors
              </p>
            </div>
          </div>
          {/* Second Row Boxes */}
          <div className={styles.box}>
            {/* Box-3 */}
            <div className={`${styles.contentbox} ${styles.contentbox3}`}>
              <div className={`${styles.icon} ${styles.icon3}`}></div>{" "}
              <h3 className={styles.h3}>Flexible Payment Schedules</h3>
              <p className={styles.text}>
                Request an upfront payment for your invoice and pay us back in
                up to 4 weeks
              </p>
            </div>
            {/* Box-4 */}
            <div className={`${styles.contentbox} ${styles.contentbox4}`}>
              <div className={`${styles.icon} ${styles.icon4}`}></div>
              <h3 className={styles.h3}>Request payment extensions</h3>
              <p className={styles.text}>
                Not ready to pay? Request extra time for a small fee
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.ellipse7}
        src={ellipse7}
        alt="background-adornment"
      />
    </section>
  );
};
