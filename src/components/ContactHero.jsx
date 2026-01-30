import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="contact-hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="contact-hero-content">
        <h1>Contact</h1>
        <p>
          Get in touch for collaborations, inquiries, or academic discussions
        </p>
      </div>
    </motion.section>
  );
};

export default Contact;
