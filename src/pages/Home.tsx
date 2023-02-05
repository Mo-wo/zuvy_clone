import styles from "../styles/home.module.css";
import { Features } from "../components/Features";
import {FeaturesOutline} from "../components/FeaturesOutline";
import { HowItWorks } from "../components/HowItWorks";
import { FAQ } from "../components/FAQ";
import { Hero } from "../components/Hero";
import {BackToTop} from "../components/BackToTop";
import {JoinWaitlist} from "../components/JoinWaitlist";


const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <HowItWorks />
      <div className={styles.featuresSection}>
        <Features />
        <FeaturesOutline/>
        </div>
      <JoinWaitlist />
      <FAQ />
      <div style={{ position: "fixed", bottom: "2%", right: "3%", zIndex: 4 }}>
        <BackToTop />
      </div>
    </main>
  );
};

export default Home;
