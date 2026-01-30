import { motion } from "framer-motion";

const AcademicProfiles = () => {
  return (
    <motion.section
      className="academic-profiles"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2>Academic Profiles</h2>

      <div className="profile-links">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-btn"
        >
          📘 Google Scholar ↗
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-btn"
        >
          📄 ResearchGate ↗
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-btn"
        >
          🆔 ORCID ↗
        </a>
      </div>
    </motion.section>
  );
};

export default AcademicProfiles;
