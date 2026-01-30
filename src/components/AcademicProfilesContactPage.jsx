import { motion } from "framer-motion";

const AcademicProfiles = () => {
  return (
    <section className="profiles-section">

      {/* ===== Academic & Professional Profiles ===== */}
      <motion.div
        className="profiles-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Academic &amp; Professional Profiles</h2>

        <div className="profiles-grid">
          <a href="#" className="profile-card" target="_blank" rel="noreferrer">
            <div className="profile-icon">🌐</div>
            <div>
              <h3>Google Scholar</h3>
              <p>Research publications</p>
            </div>
          </a>

          <a href="#" className="profile-card" target="_blank" rel="noreferrer">
            <div className="profile-icon">🌐</div>
            <div>
              <h3>ResearchGate</h3>
              <p>Research network</p>
            </div>
          </a>

          <a href="#" className="profile-card" target="_blank" rel="noreferrer">
            <div className="profile-icon">in</div>
            <div>
              <h3>LinkedIn</h3>
              <p>Professional profile</p>
            </div>
          </a>
        </div>
      </motion.div>

      {/* ===== Research Collaboration ===== */}
      <motion.div
        className="collaboration-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2>Research Collaboration</h2>
        <p>
          I welcome opportunities for research collaboration, joint projects,
          and academic partnerships. If you are interested in working together
          on wireless communications research, student exchange programs, or
          consulting opportunities, please reach out via email to discuss
          potential collaborations.
        </p>
      </motion.div>

    </section>
  );
};

export default AcademicProfiles;
