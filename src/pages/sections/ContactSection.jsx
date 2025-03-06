import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LineHead from "../../components/reusable/LineHead";
import ButtonLink from "../../components/reusable/ButtonLink";

const Contact = () => {
  return (
    <>
      <LineHead title="_Contact_me" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
      >
        <section className="py-2 px-4 max-w-4xl mx-auto">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold mb-12 dark:text-primary-light text-primary-dark">Let's collaborate</h1>
            <p className="text-lg mb-6 dark:text-primary-light text-primary-dark">
            If you're seeking a freelance web developer for your project or collaboration, please contact me.
            Fill out the form below with your information and a brief message, and I'll respond promptly. 
            I'm also happy to answer questions or simply connect. 
            I look forward to hearing from you and creating something exceptional together.
            </p>
            <ButtonLink title="_Contact_me" link="./contact" />
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Contact;
