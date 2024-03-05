import { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/page/contacts.module.css";
const Contacts: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="sponsors">
      {/* <Header /> */}
      <div className={styles.body}>
        <h1 className={styles.title}>Contacts</h1>
        <br />
        <div className={styles.container}>
        <div className={styles.contacts}>
              <p>Akashara U J</p>
              <p>President- AIT</p>
              <a href="tel:+917358371802" >+917358371802</a>
              <br />
            <p>Lekhashree Rajesh</p>
              <p>Vice President- AIT</p>
              <a href="tel:+916381884349" >+916381884349</a>
            <br />
            <p>Keerthana M</p>
              <p>General Secretary- AIT</p>
              <a href="tel:+916383941381" >+916383941381</a>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Contacts;
