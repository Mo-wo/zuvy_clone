import styles from './styles/section3.module.css';
import screen1 from './images/phone_screen1.png';
import screen2 from './images/phone_screen2.png';
import screen3 from './images/phone_screen3.png';

const Section3 = () => {
    return ( 
        <section className={styles.section3}>
            {/* All Content */}
            <div className={styles.container3}>
                {/* Heading */}
                <h2 className={styles.h2}>How it Works</h2>
                {/* Text and Image Content */}
                <div className={styles.content}>
                    {/* Circles and Lines */}
                    <div className={styles.linewrap}>
                        <div className={styles.lircle}>
                            <div className={styles.circle}>1</div>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.lircle}>
                            <div className={styles.circle}>2</div>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.lircle}>
                            <div className={styles.circle}>3</div>
                            <div className={styles.line3}></div>
                        </div>
                    </div>
                    {/* Text Content */}
//                     <div className={styles.captions}>
//                         {/* Text 1 */}
//                         <div className={styles.captionContainer}>
//                             {/* <div className={styles.circle}>1</div> */}
//                             <div className={styles.caption}>
//                                 <div className={`${styles.text} ${styles.text1}`}>
//                                     <h3 className={styles.h3}>Create & Send Your Invoice</h3>
//                                     <p className={styles.p}>Use Zuvy to create and send invoices to<br /> your customers</p>
//                                 </div>
//                             </div>
//                         </div>
                        {/* Text 2 */}
                        <div className={styles.captionContainer}>
                            {/* <div className={styles.circle}>2</div> */}
                            <div className={styles.caption}>
                                <div className={`${styles.text} ${styles.text2}`}>
                                    <h3 className={styles.h3}>Request Instant Payout</h3>
                                    <p className={styles.p}>Select an invoice and request an<br /> immediate payout. We will loan you the<br /> money upfornt for up to 4 weeks</p>
                                </div>
                            </div>
                        </div>
                        {/* Text 3 */}
                        <div className={styles.captionContainer}>
                            {/* <div className={styles.circle}>3</div> */}
                            <div className={styles.caption}>
                                <div className={`${styles.text} ${styles.text3}`}>
                                    <h3 className={styles.h3}>Manage Your Business</h3>
                                    <p className={styles.p}>Use our web and mobile app to manage<br /> your invoices, customers and payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Images */}
                    <div className={styles.images}>
                        <img className={`${styles.img} ${styles.phone1}`} src={screen2} alt="Phone Screen" />
                        <img className={`${styles.img} ${styles.phone2}`} src={screen2} alt="Phone Screen" />
                        <img className={`${styles.img} ${styles.phone3}`} src={screen3} alt="Phone Screen" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Section3;
