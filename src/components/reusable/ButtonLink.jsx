import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { FiArrowDownCircle } from 'react-icons/fi';

function ButtonLink({title, link}) {
  return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.3,
      }}
      className="flex justify-center sm:block"
    >
      <Link

        to={link}
        className="font-general-medium flex gap-4 justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-slate-50 focus:ring-1 focus:ring-indigo-900 hover:bg-primary-green text-gray-500 hover:text-gray-600 duration-500 "

      >
        <span className="text-sm sm:text-lg font-general-medium duration-100">
        {title}
        </span>
        <FiArrowDownCircle/>
      </Link>
    </motion.div>
  )
}

export default ButtonLink