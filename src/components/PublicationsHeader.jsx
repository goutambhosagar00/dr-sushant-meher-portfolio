import { motion } from "framer-motion";

const PublicationsHeader = () => {
  return (
    <motion.section
      className="pub-hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="pub-hero-content">
        <h1>Publications</h1>
        <p>Research Contributions and Academic Output</p>
      </div>
    </motion.section>
  );
};

export default PublicationsHeader;
