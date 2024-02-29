import { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/page/sponser.module.css";
const Sponsers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="sponsors">
      <Header />
      <div className={styles.body}>
        <h1>Sponsers</h1>
        <br />
        <div className={styles.comingSoon}>
            <h1>Coming Soon!!!</h1>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
