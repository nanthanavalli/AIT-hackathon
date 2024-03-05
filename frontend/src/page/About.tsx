import Header from "../components/Header";
import styles from "../styles/page/about.module.css";
// import svce from "../assets/images/svce.png";
// import Footer from "../components/Footer";
import { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
        <div className={styles.space}></div>
        <div className={styles.aboutData} id="about">
        </div>
      <h1 className={styles.title}>About</h1>
      <div className={styles.container}>
        <div className={styles.about}>
          <h3 className={styles.text}>
          Sri Venkateswara College of Engineering pioneered the introduction of the B.Tech degree program in Information Technology under the affiliation of the University of Madras during the year 1996. The Information Technology Department aims to produce high-caliber technologists, which appetites the needs of the fast-growing industry. Sri Venkateswara College of Engineering holds an incubation center for nurturing young entrepreneurs. The department has an excellent placement record as over 90 % of the eligible students get placed in tier-1 companies every year and the department-wide maintains a good and excellent student-to-company ratio in the state. The Association of Information Technologists (AIT) is a professional organization that is a student chapter affiliated with the Department of Information Technology. Our forum hosts a range of events including Industry Speaker Series, Virtual Open Days, Course Workshops, and #GRADTALKS Series to connect students with industry experts and showcase talented students. We even provide our students with certifications endorsed by companies that have signed MOUs with the Department of Information Technology.
          </h3>
        </div>
      </div>
    </>
  );
};

export default About;
