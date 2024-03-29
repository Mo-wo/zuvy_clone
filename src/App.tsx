import styles from "./styles/app.module.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className={styles.container}>
      <AppRoutes/>
    </div>
  );
}

export default App;
