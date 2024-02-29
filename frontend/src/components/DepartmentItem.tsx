import styles from "../styles/components/departmentItem.module.css";
// import arrow from "../assets/images/icons/arrow.png";
import logo from "../assets/images/festXsvce_logo.png";
import { Link } from "react-router-dom";
const DepartmentItem: React.FC<{
  image: string;
  name: string;
  id: string;
}> = (props) => {
  return (
    <Link to={`/departments/${props.id}`} style={{ textDecoration: "none" }}>
      <div
        className={styles.department}
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className={styles.nameDiv}>
          <div className={styles.topBar}>
            <p>Technoways</p>
            <img src={logo} alt="Tech Fest" className={styles.logo} />
          </div>
          <p className={styles.title}>{props.name}</p>
          <p className={styles.know}>Know More</p>
        </div>
      </div>
    </Link>
  );
};

export default DepartmentItem;
