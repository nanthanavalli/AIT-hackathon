import Header from "../components/Header";
import { useEffect } from "react";
import styles from "../styles/page/roadmap.module.css"; 

const RoadMap: React.FC = () =>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
        <div className={styles.body}>
            <h1 className={styles.title}>Road Map</h1>
            <br />
            <div className={styles.container}>
                <h3>
                Technoways, SVCE's inaugural interdisciplinary technical event,
            highlights technology, innovation, and creativity on March
            15th-16th. 

                </h3>


            </div>

        </div>
        </>
    )
}

export default RoadMap;


