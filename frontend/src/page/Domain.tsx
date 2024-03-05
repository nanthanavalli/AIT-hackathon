import Header from "../components/Header";
import React, { useEffect } from "react";
import styles from "../styles/page/domain.module.css";

const Domain: React.FC = () =>{
    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);
    return (
      <>
        <Header />
        <div className={styles.space}></div>
        <div className={styles.domainData} id="domain"></div>
        <h1 className={styles.title}>Domain</h1>
        <div className={styles.container}>
          <div className={styles.domain}>
            <h3 className={styles.text}>domain</h3>
          </div>
        </div>
      </>
    );
  };

export default Domain;