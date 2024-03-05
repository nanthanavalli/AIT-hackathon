import Header from "../components/Header";
import { useEffect } from "react";
import styles from "../styles/page/roadmap.module.css";

const RoadMap: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className={styles.space}></div>
      <div className={styles.rmapData} id="rmap"></div>
      <h1 className={styles.title}>Road Map</h1>
      <div className={styles.container}>
        <div className={styles.rmap}>
          <h3 className={styles.text}>roadmap</h3>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
