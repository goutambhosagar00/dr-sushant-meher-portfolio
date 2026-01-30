import { motion } from "framer-motion";

const TeachingExperience = () => {
  return (
    <section className="teach-wrapper">
      {/* Title & Intro */}
      <motion.div
        className="teach-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Teaching Experience</h2>
        <p>
          As an Assistant Professor, I am dedicated to fostering the next
          generation of computer science professionals. My teaching approach
          combines theoretical foundations with practical applications,
          preparing students for the evolving demands of the technology
          industry.
        </p>
      </motion.div>

      {/* Courses */}
      <div className="teach-courses">
        {/* Undergraduate */}
        <motion.div
          className="teach-box"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Undergraduate Courses</h3>
          <ul>
            <li>Computer Networks</li>
            <li>Wireless Communication</li>
            <li>Data Structures & Algorithms</li>
            <li>Operating Systems</li>
          </ul>
        </motion.div>

        {/* Graduate */}
        <motion.div
          className="teach-box"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Graduate Courses</h3>
          <ul>
            <li>Advanced Wireless Networks</li>
            <li>5G Technology & Applications</li>
            <li>Network Security & Privacy</li>
            <li>Research Methodology</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default TeachingExperience;
