import styles from './styles/section4.module.css';
import features from './images/features.png'

const Section4 = () => {
    return ( 
        <section className={styles.section}>
            <div className={styles.container}>
//                 <div className={styles.text}>
//                     <h2 className={styles.h2}>Features</h2>
//                     <p>Zuvy gives you the capital and flexibility<br/>
//                     that you need to grow your business and cover your expenses</p>
//                 </div>
                <div className={styles.imageWrapper}>
                    <img className={styles.image} src={features} alt="Screenshot of features" />
                </div>

            </div>
        </section>
    );
}
 
export default Section4;
