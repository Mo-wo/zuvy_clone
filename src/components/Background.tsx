import styles from './styles/background.module.css';
import ellipse1 from './images/Ellipse_1.png';
import ellipse2 from './images/Ellipse-2.png';
import ellipse3 from './images/Ellipse_3.png';
import ellipse4 from './images/Ellipse_4.png';
import ellipse5 from './images/Ellipse_5.png';
import ellipse6 from './images/Ellipse_6.png';
import ellipse7 from './images/Ellipse_7.png';
import ellipse9 from './images/Ellipse_9.png';
import ellipse10 from './images/Ellipse_10.png';


const Background = () => {
    return (
      <div className={styles.backdrop}>
//         <div className={styles.rect1}></div>
//         <div className={styles.rect2}></div>
        <img
          className={`${styles.ellipse1} ${styles.ellipse}`}
          src={ellipse1}
          alt=""
        />
        {/* <img className={`${styles.ellipse2} ${styles.ellipse}`} src={ellipse2} alt=""></img>
            <img className={`${styles.ellipse3} ${styles.ellipse}`} src={ellipse3} alt=""></img>
            <img className={`${styles.ellipse4} ${styles.ellipse}`} src={ellipse4} alt=""></img>
            <img className={`${styles.ellipse5} ${styles.ellipse}`} src={ellipse5} alt=""></img>
            <img className={`${styles.ellipse6} ${styles.ellipse}`} src={ellipse6} alt=""></img>
            <img className={`${styles.ellipse7} ${styles.ellipse}`} src={ellipse7} alt=""></img>
            <img className={`${styles.ellipse9} ${styles.ellipse}`} src={ellipse9} alt=""></img>
            <img className={`${styles.ellipse10} ${styles.ellipse}`} src={ellipse10} alt=""></img> */}
      </div>
    );
}
 
export default Background;
