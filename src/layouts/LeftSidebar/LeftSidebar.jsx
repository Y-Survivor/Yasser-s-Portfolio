import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./leftSidebar.scss";
import Social from "../../components/reusable/Social";
import { motion } from "framer-motion";

const sidebarVariants = {
  hidden: {
    y: '100%',
    opacity: 0
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
      type: 'spring',
      stiffness: 80
    }
  }
};

const LeftSideBar = () => (
  <motion.div  className='left z-20'
  variants={sidebarVariants}
  initial='hidden'
  animate='visible'>

 
    <main className="left__main">
      <ul className="left__social">
        <Social link="https://api.whatsapp.com/send?phone=212682044142">
          <FaWhatsapp className="left__icon dark:fill-slate-100 dark:hover:fill-primary-green" />
        </Social>
        <Social link="https://github.com/Yasser-Survivor">
          <FaGithub className="left__icon dark:fill-slate-100 dark:hover:fill-primary-green" />
        </Social>
        <Social link="https://www.instagram.com/yassersurvivor/">
          <FaInstagram className="left__icon dark:fill-slate-100 dark:hover:fill-primary-green" />
        </Social>
        <Social link="https://www.linkedin.com/in/yasser-naji/">
          <FaLinkedin className="left__icon dark:fill-slate-100 dark:hover:fill-primary-green" />
        </Social>
      </ul>
      <div className="left__line dark:bg-primary-light" />
    </main>

  </motion.div>
);

export default LeftSideBar;
