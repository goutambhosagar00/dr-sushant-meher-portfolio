import { motion } from "framer-motion";


const TeachingExperience = () => {
  return (
    <section className="teaching-section">
      <h2 className="teaching-title">Teaching Experience</h2>

      <motion.div
        className="teaching-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* ICON */}
        <div className="teaching-icon">🏫</div>

        {/* CONTENT */}
        <div className="teaching-content">
          <h3>Assistant Professor</h3>
          <p className="teaching-meta">
            Department of Computer Science & Engineering | 2020 – Present
          </p>

          <p className="teaching-desc">
            Currently serving as Assistant Professor, responsible for teaching
            undergraduate and graduate courses, conducting research,
            supervising student projects, and contributing to departmental
            administrative activities.
          </p>

          <h4>Courses Taught:</h4>

          <div className="courses-grid">
            <ul>
              <li>Computer Networks (UG)</li>
              <li>Wireless Communication Systems (UG)</li>
              <li>Data Communication (UG)</li>
              <li>Network Security (UG)</li>
            </ul>

            <ul>
              <li>Advanced Wireless Networks (PG)</li>
              <li>5G Technology & Applications (PG)</li>
              <li>Mobile Computing (PG)</li>
              <li>Research Methodology (PG)</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TeachingExperience;
