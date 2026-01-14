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
            <h1 className="text-5xl font-bold mb-12 dark:text-primary-light text-primary-dark">Let's collaborate 👨‍💻🛠️</h1>
            <p className="text-lg mb-6 dark:text-primary-light text-primary-dark">

            I’m passionate about driving efficiency through data 📈 and technology 📊.<br></br>

            If you’re looking for a freelance Data Analyst for a project or collaboration, I’d love to connect.
            Feel free to fill out the form below with your details and a brief message,
            and I’ll get back to you promptly. 
            
            <br /><br /> I’m also happy to answer any questions or simply start a conversation.
            <br />
            I look forward to working together and creating something exceptional.
            <br />
            <br />Kind regards,
            </p>
            <ButtonLink title="_Contact_me" link="./contact" />
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Contact;
