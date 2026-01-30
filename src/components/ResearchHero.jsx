import { motion } from "framer-motion";

const ResearchHero = () => {
  return (
    <motion.section
      className="research-hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="research-hero-content">
        <h1>Research: 5G Wireless Networks</h1>
        <p>Advancing Next-Generation Communication Technologies</p>
      </div>
    </motion.section>
  );
};

export default ResearchHero;
