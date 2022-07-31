import styles from './styles/section5.module.css';
import phone from './images/phone.png';
// import icon1 from './images/icon1.png';
// import icon2 from './images/icon2.png';
// import icon3 from './images/icon3.png';
// import icon4 from './images/icon4.png';



const Section5 = () => {
    return ( 
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Phone Screen */}
                <div className={styles.phoneWrapper}>
                    <img className={styles.phone} src={phone}/>
                </div>
                {/* Boxes */}
                <div className={styles.boxesWrapper}>
                    {/* First Row Boxes */}
                    <div className={styles.box}>
                        {/* Box-1 */}
                        <div className={`${styles.contentbox} ${styles.contentbox1}`}>
                            <div className={`${styles.icon} ${styles.icon1}`}></div>
                            <h3 className={styles.h3}>Create Invoices via WhatsApp</h3>
                            <p className={styles.p}>Use our WhatsApp Assistant to <br/>instanstly create and send<br/>invoices to customers</p>
                        </div>
                        {/* Box-2 */}
                        <div className={`${styles.contentbox} ${styles.contentbox2}`}>
                            <div className={`${styles.icon} ${styles.icon2}`}></div>
                            <h3 className={styles.h3}>Manage the invoices you recieve</h3>
                            <p className={styles.p}>Set your own payment terms on<br/>invoices that you recieve<br/>vendors</p>
                        </div>
                    </div>
                    {/* Second Row Boxex */}
                    <div className={styles.box}>
                        {/* Box-3 */}
                        <div className={`${styles.contentbox} ${styles.contentbox3}`}>
                            <div className={`${styles.icon} ${styles.icon3}`}></div>
                            <h3 className={styles.h3}>Flexible Payment Schedules</h3>
                            <p className={styles.p}>Request an upfront payment for<br/>your invoice and pay us back in up<br/>to 4 weeks</p>
                        </div>
                        {/* Box-4 */}
                        <div className={`${styles.contentbox} ${styles.contentbox4}`}>
                            <div className={`${styles.icon} ${styles.icon4}`}></div>
                            <h3 className={styles.h3}>Request payment extensions</h3>
                            <p className={styles.p}>Not ready to pay? Request<br/>extra time for a small fee<br/> &nbsp;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Section5;