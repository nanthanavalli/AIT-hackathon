import Header from "../components/Header";
import React, { useEffect } from "react";
import styles from "../styles/page/domain.module.css";

const Domain: React.FC = () =>{
    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);
    return(
        <>
        <div id="domain">
          {/* <Header /> */}
          <div className={styles.body}>
            <h1 className={styles.title}>Domains</h1>
            <br />
            <div className={styles.container}>
            <h3>
            Technoways, SVCE's inaugural interdisciplinary technical event,
            highlights technology, innovation, and creativity on March
            15th-16th.   
            </h3>
            
          </div>
        </div>
        </div>
        </>
    )
}

export default Domain;