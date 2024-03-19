import styles from "./SocialLink.module.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Facebook
          <FaFacebook size={30} />{" "}
        </>
      ),
      href: "https://www.facebook.com/md.fahadkhan.9889",
     
    },
    {
      id: 2,
      child: (
        <>
          Instragram
          <FaInstagram size={30} />{" "}
        </>
      ),
      href: "https://www.facebook.com/md.fahadkhan.9889",
      
    },
    {
      id: 3,
      child: (
        <>
          Email
          <HiOutlineMail size={30} />{" "}
        </>
      ),
      href: "evanahmedfahad@gmail.com",
     
    },
    {
      id: 4,
      child: (
        <>
          Linkedin
          <FaLinkedin size={30} />{" "}
        </>
      ),
      href: "https://www.linkedin.com/in/md-fahad-khan/",
     
      download: true,
    },
  ];
  return (
    <div className={styles.element}>
      <ul>
        {links.map(({ id, child, href,download }) => (
          // eslint-disable-next-line react/jsx-key
          <li
            key={id}
            className={styles.customButton}>
            <a
              href={href}
              className={styles.link}
              download={download}
              target="_blank"
              rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
