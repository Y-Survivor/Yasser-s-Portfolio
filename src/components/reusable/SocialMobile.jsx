import React, { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    icon: <FaGithub />,
    url: 'https://github.com/Yasser-Survivor',
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/yassersurvivor/?next=%2F',
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/yasser-naji/',
  },
  {
    id: 4,
    icon: <FaWhatsapp />,
    url: 'https://api.whatsapp.com/send?phone=212682044142',
  },
  
];

const SocialMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
        
      <div className=' mt-8 ' >

        {isMobile && (
            <ul className="flex gap-1 sm:gap-2 justify-center ">
              {socialLinks.map((link) => (
                <a
                  href={link.url}
                  target="__blank"
                  key={link.id}
                  className="text-ternary-dark hover:text-primary-dark dark:hover:text-primary-green dark:text-primary-light cursor-pointer p-1 duration-300"
                >
                  <i className="text-3xl sm:text-2xl md:text-3xl">
                    {link.icon}
                  </i>
                </a>
              ))}
            </ul>
        )}
              </div>
  )
};

export default SocialMobile;
