import React, { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
  {
    id: 1,
    icon: <FaGithub />,
    url: 'https://github.com/Yasser-Survivor',
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/yassersurvivor/',
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

const AppFooter = () => {
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
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        {isMobile && (
          <div className="font-general-regular flex flex-col justify-center items-center mb-8 sm:mb-16">
            <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-8">
              Follow me
            </p>
            <ul className="flex gap-4 sm:gap-8">
              {socialLinks.map((link) => (
                <a
                  href={link.url}
                  target="__blank"
                  key={link.id}
                  className="text-ternary-dark hover:text-primary-dark dark:hover:text-primary-green dark:text-primary-light cursor-pointer  p-4 duration-300"
                >
                  <i className="text-3xl sm:text-2xl md:text-3xl">
                    {link.icon}
                  </i>
                </a>
              ))}
            </ul>
          </div>
        )}
        <AppFooterCopyright />
      </div>
    </div>
  );
};

export default AppFooter;
