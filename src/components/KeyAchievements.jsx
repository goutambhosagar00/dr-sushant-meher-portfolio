import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Published Papers" },
  { value: "5+", label: "Years Teaching" },
  { value: "10+", label: "Research Projects" },
  { value: "50+", label: "Students Mentored" },
];

const KeyAchievements = () => {
  return (
    <section className="achievements-wrapper">
      {/* Header */}
      <motion.div
        className="achievements-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="achievements-title">
          <span className="achievements-icon">🏅</span>
          <h2>Key Achievements</h2>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="achievements-grid">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="achievement-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="achievement-value">{item.value}</div>
            <div className="achievement-label">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KeyAchievements;
