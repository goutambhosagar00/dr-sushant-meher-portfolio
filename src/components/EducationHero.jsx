import { motion } from "framer-motion";

const EducationHero = () => {
  return (
    <motion.section
      className="edu-hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="edu-hero-content">
        <h1>Education & Experience</h1>
        <p>Academic Journey and Professional Milestones</p>
      </div>
    </motion.section>
  );
};

export default EducationHero;
