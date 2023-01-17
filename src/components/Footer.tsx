import styles from "../styles/footer.module.css";
import logo from "../images/zuvyLogo_no-bg.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import emailIcon from "../images/emailIcon.svg";
import phoneIcon from "../images/phoneIcon.svg";
import facebookIcon from "../images/facebookIcon.svg";
import twitterIcon from "../images/twitterIcon.svg";
import instagramIcon from "../images/instagramIcon.svg";
import linkedinIcon from "../images/linkedinIcon.svg";
import ellipse2 from "../images/ellipse2.svg";
import WaitlistButton from "./Waitlist";

const Footer = () => {
  return (
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.contactSection}>
            <div className={styles.contactWrapper}>
              <h5>Contact our team:</h5>
              <div className={styles.contactInfoWrapper}>
                <div className={styles.contactInfo}>
                  <div className={styles.contactInfoImage}>
                    <img src={emailIcon} alt="email-icon" />
                  </div>
                  <p>support@zuvy.co</p>
                </div>

                <div className={styles.contactInfo}>
                  <div className={styles.contactInfoImage}>
                    <img src={phoneIcon} alt="phone-icon" />
                  </div>
                  <p>+234-8055506908</p>
                </div>
              </div>
            </div>

            <div className={styles.socialsInfo}>
              <Link to="/" target={"blank"} className={styles.socialsWrapper}>
                <img src={facebookIcon} alt="facebook-icon" />
              </Link>

              <Link to="/" target={"blank"} className={styles.socialsWrapper}>
                <img src={twitterIcon} alt="twitter-icon" />
              </Link>

              <Link to="/" target={"blank"} className={styles.socialsWrapper}>
                <img src={instagramIcon} alt="instagram-icon" />
              </Link>

              <Link to="/" target={"blank"} className={styles.socialsWrapper}>
                <img src={linkedinIcon} alt="linkedin-icon" />
              </Link>
            </div>
          </div>

          <div className={styles.footerNav}>
            <div className={styles.footerNavWrapper}>
              <img className={styles.img2} src={logo} alt="Zuvy Logo" />

              <ul className={styles.ul}>
                <li className={styles.li}>
                  <HashLink to="/">About Zuvy</HashLink>
                </li>
                <li className={styles.li}>
                  <HashLink to="/#howItWorks">How It works</HashLink>
                </li>
                <li className={styles.li}>
                  <HashLink to="/#features">Features</HashLink>
                </li>
                <li className={styles.li}>
                  <HashLink to="/#faq">FAQs</HashLink>
                </li>
              </ul>
            </div>

            <div>
              <WaitlistButton display="none" />
            </div>
          </div>

          <div className={styles.legalSection}>
            <div className={styles.legalWrapper}>
              <p>2022 Zuvy&nbsp;&nbsp;|&nbsp;&nbsp;All Rights Reserved</p>
            </div>
            <div className={styles.legalWrapper}>
              <Link className={styles.link} to="#">
                Privacy Policy
              </Link>
              <Link className={styles.link} to="#">
                Cookies
              </Link>
            </div>
          </div>
        </div>
        <img
          className={styles.ellipse}
          src={ellipse2}
          alt="background-adornment"
        />
      </footer>
  );
};

export default Footer;
