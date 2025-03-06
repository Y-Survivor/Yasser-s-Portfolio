import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectSingle = ({
  title,
  category,
  image,
  techno,
  redirect,
  githubLink,
  isGit,
}) => {
  const [showIcons, setShowIcons] = useState(false);
  let timeoutId = null;

  const handleMouseEnter = () => {
    setShowIcons(true);
    clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowIcons(false);
    }, 10);
  };
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div>
        <div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark relative border-2 border-primary-darkborder-2 border-primary-dark dark:border-ternary-light mt-2"
	  onMouseEnter={handleMouseEnter}
	  onMouseLeave={handleMouseLeave}
	  >
          <div>
            <img
              src={image}
              className="rounded-t border h-64"
              alt={title}
            />
          </div>
          <div className="text-center px-4 py-4 border-y-2 border-primary-dark dark:border-ternary-light  ">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
          <div className=" flex flex-wrap">
            {techno.map((t) => (
              <div key={t} className="p-2 dark:text-primary-light">
                {t}
              </div>
            ))}
          </div>
          <motion.div
            className="absolute flex -top-9 -right-2"
            initial="hidden"
            animate={showIcons ? "visible" : "hidden"}
            variants={variants}
          >
            {isGit && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
              >
                <FaGithub className="text-2xl text-ternary-dark dark:text-ternary-light mx-2 hover:text-teal-950 hover:-translate-y-1 transition-all duration-300" />
              </a>
            )}
            <a
              href={redirect}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit website"
            >
              <FaExternalLinkAlt className="text-2xl text-ternary-dark dark:text-ternary-light mx-2 hover:text-teal-950 hover:-translate-y-1 transition-all duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
