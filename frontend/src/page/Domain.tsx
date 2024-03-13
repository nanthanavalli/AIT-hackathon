import Header from "../components/Header";
import React, { useEffect } from "react";
import styles from "../styles/page/domain.module.css";

const Domain: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className={styles.space}></div>
      <div className={styles.domainData} id="domain"></div>
      <h1 className={styles.title}>Domain</h1>
      <div className={styles.container}>
        <div className={styles.domain}>
          <h3 className={styles.text}></h3>
          
            <h3>Artificial Intelligence</h3>
            <p>
              Empowering machines to mimic human cognitive functions such as
              learning, problem-solving, and decision-making, revolutionizing
              industries through automation, personalization, and the creation
              of intelligent systems.
            </p>
            <br />
            <br />
            <h3>Blockchain Technology</h3>
            <p>
              Utilizing decentralized, immutable ledgers to secure and verify
              transactions, enabling trust, transparency, and e ciency in
              financial systems, supply chains, and digital identities.
            </p>
            <br />
            <br />
            <h3>Cybersecurity</h3>
            <p>
              Safeguarding digital assets and networks from malicious threats
              and unauthorized access through robust encryption, intrusion
              detection, and threat intelligence, ensuring the confidentiality,
              integrity, and availability of sensitive information.
            </p>
            <br />
            <br />
            <h3>Data Science</h3>
            <p>
              Unveiling actionable insights from complex datasets through
              statistical analysis and machine learning techniques, empowering
              informed decisionmaking and predictive modeling across industries.
            </p>
            <br />
            <br />
            <h3>Game Development</h3>
            <p>
              Creating immersive digital experiences for entertainment,
              education, and simulation, combining art, technology, and
              storytelling to captivate players and drive engagement.
            </p>
            <br />
            <br />
            <h3>Internet of Things (IoT)</h3>
            <p>
              Interconnecting physical devices and objects via the internet,
              enabling data collection, analysis, and automation to enhance e
              ciency, convenience, and decision-making in various domains.
            </p>
            <br />
            <br />
            <h3>Machine Learning</h3>
            <p>
              Teaching computers to learn from data, enabling them to make
              predictions and decisions without explicit programming, driving
              innovations in areas like healthcare, finance, and autonomous
              vehicles.
            </p>
            <br />
            <br />
            <h3>Software Development</h3>
            <p>Crafting scalable and reliable
            software solutions through systematic coding, testing, and
            deployment processes, fulfilling user requirements and business
            objectives with e ciency, quality, and innovation.
            </p> 
            <br />
            <br />
            <h3>UI/UX Design</h3> 
            <p>Crafting intuitive and delightful user
            interfaces and experiences, prioritizing usability, accessibility,
            and aesthetics to enhance user satisfaction and engagement.
            </p>
            <br />
            <br />
            <h3>Web/ App Development</h3>
            <p>Designing and building software
            applications for smartphones and tablets, enhancing user engagement,
            productivity, and accessibility through intuitive interfaces and
            robust functionality.
            </p> 
            <br />
            <br />
          </div>
        </div>
      
    </>
  );
};

export default Domain;
