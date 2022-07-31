import waitListStyles from './styles/waitlist.module.css';

const WaitlistButton = () => {
    return ( 
        <div className={waitListStyles.waitlistLink}>
            <button className={waitListStyles.button}>Join the Waitlist <span className={waitListStyles.arrow}>➜</span></button>
        </div>
    );
}
 
export default WaitlistButton;