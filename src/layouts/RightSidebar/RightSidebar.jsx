import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './rightSidebar.scss';

const RightSideBar = () => {
  const sidebarVariants = {
    hidden: {
      y: '-100%',
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

  return (
    <motion.div
      className='right z-20'
      variants={sidebarVariants}
      initial='hidden'
      animate='visible'
    >
      <main className='right__main'>
        <div className='right__line dark:bg-primary-light ' />
        <div>
          <Link to="mailto:yasser.naji@arkx.academy?subject=New%20Opportunity&body=Hello%20Yasser,%0D%0A%0D%0AI%20am%20writing%20to%20express%20my%20interest%20in%20working%20with%20you.%0D%0A%0D%0AThank%20you.%0D%0A%0D%0ARegards,%0D%0AYour%20Name/Society" className='right__email dark:text-primary-light dark:hover:text-primary-green'>
           yasser.naji@arkx.academy
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default RightSideBar;
