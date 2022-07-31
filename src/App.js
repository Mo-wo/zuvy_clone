import styles from './styles/app.module.css';
import Navbar from './Navbar';
import Home from './Home';
// import Section1 from './Section1';
// import Section2 from './Section2'
// import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Background from './Background';



function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Background />
      <Home />
      {/* <Section4 />
      <Section5 />
      <Section6 />
      <Section7 /> */}
    </div>
  );
}

export default App;
