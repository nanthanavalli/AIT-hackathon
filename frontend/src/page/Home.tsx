import styles from "../styles/page/home.module.css";
//import Header from "../components/Header";
import About from "./About";
import Location from "./Location";
import Domain from "./Domain";
import RoadMap from "./RoadMap";
import Scroller from "../components/Scroller";
import Timer from "../components/Timer";
import Footer from "../components/Footer";
import Sponsers from "./Contacts";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home} id="home">
        <div style={{ marginTop: "4%" }}></div>
        <div className={styles.content}>
          <p className={styles.rev}>24HRS HACKATHON</p>
          <h1 className={styles.tech}>
            <span>I</span>
            <span>n</span>
            <span>n</span>
            <span>o</span>
            <span>h</span>
            <span>a</span>
            <span>c</span>
            <span>k</span>
            <span>s</span>
          </h1>
          <br />
          <p className={styles.time}>MAR 19 2024</p>
          <br />
          <br />
          <br />
          <p className={styles.timer}>
            <Timer />
          </p>
        </div>
        <div style={{ height: "8%" }}></div>
        <div className={styles.eventInfo}>
          <div className={styles.title}>
            <NavLink
              to={"/"}
              className={styles.an}
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
      <About />
      <Location />
      <Sponsers />
      <Domain />
      <RoadMap />
      <Footer />
    </>
  );
};

export default Home;
