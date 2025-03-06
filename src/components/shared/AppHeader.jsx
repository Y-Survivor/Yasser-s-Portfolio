import { useState, useEffect } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { motion } from "framer-motion";
import Button from "../reusable/Button";
import { logoDark, logoLight } from "../../assets";

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [scrollShadow, setScrollShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrollShadow(true);
      } else {
        setScrollShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleMenu() {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className={`sticky top-0 p-0 backdrop-blur-2xl z-10 ${
        scrollShadow ? "shadow-md bg-[#eeeeeea2] dark:bg-[#0a192fd0]" : ""
      }`}
    >
      <div className="max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between  sm:container sm:mx-auto sm:items-center py-3 ">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            <Link to="/" className="flex gap-3 items-center ">
              {activeTheme === "dark" ? (
                <img
                  src={logoDark}
                  className="w-10 ml-0 bg-primary-light py-2.5 px-3 shadow-sm rounded-xl cursor-pointer"
                  alt="Light Logo"
                />
              ) : (
                <img
                  src={logoLight}
                  className="w-10 ml-0 dark:bg-ternary-dark py-2.5 px-3 shadow-sm rounded-lg cursor-pointer"
                  alt="Dark Logo"
                />
              )}
              <div className="text-primary-dark dark:text-primary-light text-2xl font-semibold">
                Yasser._
              </div>
            </Link>
          </div>


          <div className="flex gap-4 items-center">
                {/* Theme switcher small screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>
          {/* Small screen hamburger menu */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              {/* Hamburger menu icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
          </div>

          
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none md:shadow-none"
              : "hidden"
          }
        >
          <Link
            to="/about"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 dark:border-ternary-light border-slate-400"
            aria-label="About Me"
          >
            _About
          </Link>
          <Link
            to="/projects"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            _Projets
          </Link>
          <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 dark:border-ternary-light border-slate-400">
            <Link
              to="/contact"
              className="font-general-medium md:hidden block text-left text-md bg-primary-green hover:bg-[#0e9c7b] text-ternary-dark shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-44"
              aria-label="contact me"
            >
              <Button title="_Contact_me" />
            </Link>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden m-0 md:ml-4 mt-5 md:mt-3 md:flex p-5 sm:p-0 justify-center items-center shadow-lg md:shadow-none">
          <Link
            to="/"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="home"
          >
            _Home
          </Link>
          <Link
            to="/about"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="About Me"
          >
            _About
          </Link>

          <Link
            to="/projects"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            _Projects
          </Link>
        </div>

        {/* Header right section buttons */}
        <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
          <div className="hidden md:flex">
            <Link
              to="./contact"
              className="text-md font-general-medium bg-primary-green hover:bg-[#15b38e] text-ternary-dark shadow-sm rounded-md px-5 py-2.5 duration-300"
              aria-label="Hire Me Button"
            >
              <Button title="_Contact_me" />
            </Link>
          </div>

          {/* Theme switcher large screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-600 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default AppHeader;
