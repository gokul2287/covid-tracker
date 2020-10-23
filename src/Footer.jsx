import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const onMouseOut = (e) => {
    e.target.style.color = "#cccccc";
  };

  const SocialWidget = [
    {
      SocialMediaName: "LinkedIn",
      ProfileLink: "https://www.linkedin.com/in/",
      fontAwesomeIconName: "fab fa-linkedin",
      OnMouseOverColor: "#4875B4",
    },
    {
      SocialMediaName: "GitHub",
      ProfileLink: "https://github.com/gokul2287",
      fontAwesomeIconName: "fab fa-github",
      OnMouseOverColor: "#211F1F",
    },
    {
      SocialMediaName: "Medium",
      ProfileLink: "https://",
      fontAwesomeIconName: "fab fa-medium",
      OnMouseOverColor: "#12100e",
    },
    {
      SocialMediaName: "Twitter",
      ProfileLink: "https://twitter.com/gocool",
      fontAwesomeIconName: "fab fa-twitter",
      OnMouseOverColor: "#1da1f2",
    },
    {
      SocialMediaName: "Facebook",
      ProfileLink: "https://www.facebook.com/",
      fontAwesomeIconName: "fab fa-facebook-f",
      OnMouseOverColor: "#1877f2",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Created by{" "}
          <a
            href="https://github.com/gokul2287/covid-tracker"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Gokul Agiwal
          </a>
        </h6>
      </div>
      <div className={styles.container}>
        <br />
        <ul className="list" style={{ listStyleType: "none" }}>
          {SocialWidget.map((data, key) => {
              console.log(data.fontAwesomeIconName);
            return (
              <li key={key} style={{ display: "inline-block", marginRight: "17px" }}>
                <a
                  onMouseOver={(e) => {
                    e.target.style.color = `${data.OnMouseOverColor}`;
                  }}
                  onMouseOut={onMouseOut}
                  href={data.ProfileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#cccccc", fontSize: "40px" }}
                >
                  <i className={`${data.fontAwesomeIconName}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 16,
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Data provided by{" "}
          <a
            href="https://github.com/disease-sh/API"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            disease.sh
          </a>
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;