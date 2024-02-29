import styles from "../styles/components/scroller.module.css";
import { Link } from "react-scroll";

const Scroller = () => {
  return (
    <Link className={styles.scroller} to={"about"} smooth={true} duration={700}>
      <div className={styles.circle} />
    </Link>
  );
};

export default Scroller;
