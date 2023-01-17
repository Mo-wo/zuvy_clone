import { HashLink } from "react-router-hash-link";
import waitListStyles from "../styles/waitlist.module.css";

type WaitlistButtonProps = {
    display?: string;
}
const WaitlistButton: React.FC<WaitlistButtonProps> = ({display}) => {
    display = display ? display : 'flex';
    

  return (
    <HashLink to="/#joinwaitlist" className={ display === "none"  ? waitListStyles.waitlistLink : waitListStyles.waitlistLink2}>
      <button className={waitListStyles.button}>
        Join the Waitlist <span className={waitListStyles.arrow} style={{display}}>➜</span>
      </button>
    </HashLink>
  );
};

export default WaitlistButton;
