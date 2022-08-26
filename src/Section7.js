import styles from './styles/section7.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Button } from '@mui/material';
//ConsiderMerging with Section6
const Section7 = () => {
    return ( 
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.h2}>Frequently Asked <br/>Questions</h2>
                <div className={styles.collapsibles}>
                    <div className={styles.collapsiblesRow}>
                        <div className={`${styles.collapsibleItem} ${styles.collapsibleItemR1}`}>
                            <div className={styles.collapsibleHeading}>
                                <p className={styles.p}>
                                    How much does it cost to use this service?
                                </p>
                                <div className={styles.expand}>
                                    <Button>
                                        <ExpandMoreIcon className={styles.span1}/>
                                        <ExpandLessIcon className={styles.span2}/>
                                    </Button>
                                    
                                </div>
                            </div>
                            <p className={styles.hidden}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit mauris, pellentesque at scelerisque eget, mollis non nibh. Quisque in cursus sapien, et vulputate elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit mauris, pellentesque at scelerisque eget, mollis non nibh. Quisque in cursus sapien, et vulputate elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit mauris, pellentesque at scelerisque eget, mollis non nibh. Quisque in cursus sapien, et vulputate elit.
                            </p>
                        </div>
                        <div className={`${styles.collapsibleItem} ${styles.collapsibleItemR1}`}>
                            <div className={styles.collapsibleHeading}>
                                <p className={styles.p}>
                                    Does Zuvy charge interest on the upfront invoice payment?
                                </p>
                                <div className={styles.expand}>
                                    <ExpandMoreIcon className={styles.span1}/>
                                    <ExpandLessIcon className={styles.span2} />
                                </div>
                            </div>
                            <p className={styles.hidden}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit mauris, pellentesque at scelerisque eget, mollis non nibh. Quisque in cursus sapien, et vulputate elit.
                            </p>
                        </div>
                    </div>
                    <div className={styles.collapsiblesRow}>
                        <div className={`${styles.collapsibleItem} ${styles.collapsibleItemR2}`}>
                            <div className={styles.collapsibleHeading}>
                                <p className={styles.p}>
                                    Which countries can i send and receive invoices from?
                                </p>
                                <div className={styles.expand}>
                                    <ExpandMoreIcon className={styles.span1}/>
                                    <ExpandLessIcon className={styles.span2} />
                                </div>
                            </div>
                            <p className={styles.hidden}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit mauris, pellentesque at scelerisque eget, mollis non nibh. Quisque in cursus sapien, et vulputate elit.
                            </p>
                        </div>
                        <div className={`${styles.collapsibleItem} ${styles.collapsibleItemR2}`}>
                            <div className={styles.collapsibleHeading}>
                                <p className={styles.p}>
                                    Can I refer my friends?
                                </p>
                                <div className={styles.expand}>
                                    <ExpandMoreIcon className={styles.span1}/>
                                    <ExpandLessIcon className={styles.span2} />
                                </div>
                            </div>
                            <p className={styles.hidden}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit mauris, pellentesque at scelerisque eget, mollis non nibh. Quisque in cursus sapien, et vulputate elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Section7;
