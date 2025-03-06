import React from "react";
import { motion } from "framer-motion";

function CardSkill({ title, items, keyprop }) {
  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div
      className="card-skill border border-primary-dark dark:border-primary-light rounded mx-4"
      key={keyprop}
    >
      <h1 className="border-b border-primary-dark dark:border-primary-light p-2 dark:text-white">
        _{title}
      </h1>
      <motion.div
        className="p-2 grid grid-cols-3 w-full gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item) => (
          <motion.div
            className="relative border flex flex-col gap-1 shadow-sm shadow-slate-300 dark:shadow-slate-700 items-center justify-center w-full h-24 dark:hover:bg-ternary-dark  hover:bg-teal-50 hover:shadow-md"
            key={item.name}
            variants={itemVariants}
          >
            <img className="w-10" src={item.icon} alt={item.name} />
            <div className="text-center text-[11px] dark:text-white">
              {item.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default CardSkill;
