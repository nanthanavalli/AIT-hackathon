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
          <div className={styles.aboutContainer}>
            <h4>30+</h4>
            <br />
            <h3>Events</h3>
          </div>
          <div className={styles.aboutContainer}>
            <h4>4</h4>
            <br />
            <h3>Workshops</h3>
          </div>
          <div className={styles.aboutContainer}>
            <h4>1</h4>
            <br />
            <h3>Proshow</h3>
          </div>
          <div className={styles.aboutContainer}>
            <h4>1</h4>
            <br />
            <h3>Auto Expo</h3>
          </div>
        </div>
      <div className={styles.container}>
        <div className={styles.about}>
          <h1 className={styles.title}>About</h1>
          <h3>
            Technoways, SVCE's inaugural interdisciplinary technical event,
            highlights technology, innovation, and creativity on March
            15th-16th. It offers a vibrant platform for students to exhibit
            engineering skills and creative flair. The festival unites students,
            faculty, and industry professionals, promoting collaboration and
            showcasing the power of collective intelligence. Technoways embraces
            a holistic approach to technology, transcending academic boundaries
            and encouraging exploration of interdisciplinary intersections.
            Participants engage in hands-on experiences, competitions, and
            workshops, gaining insights into emerging trends. The event
            catalyzes innovation, with prototypes paving the way for future
            breakthroughs. With a generous prize pool of 2.5 Lakhs, Technoways
            celebrates and rewards the brilliance of young minds.
          </h3>
        </div>
        <div className={styles.aboutSvce}>
          <div className={styles.wrapper}>
            <h1
              className={styles.title}
            >
              About SVCE
            </h1>
            <h3 className={styles.text}>
              SVCE is a unit of Sri Venkateswara Educational and Health Trust
              (SVEHT). The Trust was founded on 1 August 1985 at the behest and
              benign blessings of His Holiness Pujashree Kanchi Kamakoti
              Peedathipathi Sri Jayendra Saraswathi Swamigal. Dr. A. C. Muthiah,
              a renowned engineer, industrialist and philanthropist, is the
              Chairman of the Governing Council of the college. The college is
              in a 95 acre lush green Campus. It is housed in architecturally
              exquisite buildings with ample infrastructure such as classrooms,
              laboratories, libraries, sports arena, canteen, hostels,
              dispensary, bank etc.,
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
