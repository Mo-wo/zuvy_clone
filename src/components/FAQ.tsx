import styles from "../styles/faq.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ellipse5 from "../images/ellipse5.svg";

export const FAQ = () => {

  const faqs = [
    {
      faq: "How much does it cost to use this service ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      faq: "Does Zuvy charge interest on the upfront invoice payment ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      faq: "Which countries can i send and receive invoices from ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      faq: "Can I refer my friends ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  return (
    <div className={styles.faqSection}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index.toString()} className={styles.accordion}>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>{faq.faq}</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>{faq.answer}</p>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
      <img
        className={styles.ellipse5}
        src={ellipse5}
        alt="background-adornment"
      />
    </div>
  );
};
