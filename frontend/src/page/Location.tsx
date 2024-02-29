import Header from "../components/Header";
import styles from "../styles/page/location.module.css";

const Location = () => {
  return (
    <>
      <Header />
      <div className={styles.location} id="location">
        <center>
          <h1 className={styles.heading}>Location</h1>
          <div className={styles.flexContainer}>
            <iframe
              title="location"
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.052827741731!2d79.9702491854042!3d12.986845133993484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cd0cfb6e7ab%3A0x3294da3faad96a9!2sSri%20Venkateswara%20College%20of%20Engineering%20(SVCE)!5e0!3m2!1sen!2sin!4v1706959958981!5m2!1sen!2sin"
            ></iframe>
            <div className={styles.locationDetails}>
              <h1>Sri Venkateswara College of Engineering</h1>
              <p>
                Post Bag No.1,Pennalur Village Chennai - Bangaluru High Road 
                Sriperumbudur Tk, Tamil Nadu 602117
              </p>
              <br />
              <div className={styles.buttonContainer}>
                <button className={styles.routeButton} onClick={()=>window.open("https://www.svce.ac.in/facilities/transport/bus-route-informations/","_blank")}>
              Enroute
              </button>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default Location;
