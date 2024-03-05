import { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/page/contacts.module.css";
import logo from "../assets/images/icons/AIT_logo_B⁄W.png";
import { IoCall, IoPersonSharp } from "react-icons/io5";

const Contacts: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Header />
    <div id="sponsors">
      <div className={styles.body}>
        <h1 className={styles.title}>Contacts</h1>
        <br />
        <div className={styles.container}>
          <div className={styles.contacts}>
            <div className={styles.align}>
              <p>
                <IoPersonSharp className={styles.contactLogo}/>Akashara U J</p>
              <p><img src={logo} alt="AIT logo" className={styles.logo}/>President- AIT</p>

              <p>
                <IoCall className={styles.contactLogo}></IoCall>
                <a href="tel:+917358371802">+917358371802</a>
              </p>
              <br />
          
              <p><IoPersonSharp className={styles.contactLogo}/>Lekhashree Rajesh</p>
              <p><img src={logo} alt="AIT logo" className={styles.logo}/>Vice President- AIT</p>

              <p>
                <IoCall className={styles.contactLogo}></IoCall>
                <a href="tel:+916381884349">+916381884349</a>
              </p>
            
            <br />
            
              <p><IoPersonSharp className={styles.contactLogo}/>Keerthana M</p>
              <p><img src={logo} alt="AIT logo" className={styles.logo}/>General Secretary- AIT</p>
              <p>
                <IoCall className={styles.contactLogo}></IoCall>
                <a href="tel:+916383941381">+916383941381</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contacts;
