import { motion } from "framer-motion";


const AcademicResponsibilities = () => {
  return (
    <section className="responsibility-section">
      <h2 className="responsibility-title">Academic Responsibilities</h2>

      <div className="responsibility-grid">
        {/* STUDENT SUPERVISION */}
        <motion.div
          className="responsibility-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="responsibility-header">
            <span className="resp-icon">👥</span>
            <h3>Student Supervision</h3>
          </div>

          <ul>
            <li>Supervising 8 Ph.D. students in wireless networks research</li>
            <li>Mentoring 15+ M.Tech thesis projects annually</li>
            <li>Guiding 30+ B.Tech final year projects</li>
            <li>Academic advisor for undergraduate students</li>
          </ul>
        </motion.div>

        {/* DEPARTMENT ACTIVITIES */}
        <motion.div
          className="responsibility-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          viewport={{ once: true }}
        >
          <div className="responsibility-header">
            <span className="resp-icon">🏢</span>
            <h3>Department Activities</h3>
          </div>

          <ul>
            <li>Member of Academic Curriculum Committee</li>
            <li>Coordinator for Technical Symposiums</li>
            <li>Faculty advisor for student clubs</li>
            <li>Examiner for doctoral dissertations</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicResponsibilities;
