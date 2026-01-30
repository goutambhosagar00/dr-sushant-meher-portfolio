import { motion } from "framer-motion";

const educationData = [
  {
    title: "Ph.D.",
    field: "Computer Science & Engineering",
    desc: "Specialization in 5G Wireless Networks",
  },
  {
    title: "M.Tech / M.E.",
    field: "Computer Science & Engineering",
    desc: "Advanced Networking & Communication",
  },
  {
    title: "B.Tech / B.E.",
    field: "Computer Science & Engineering",
    desc: "Foundation in Computer Systems",
  },
];

const EducationSection = () => {
  return (
    <section className="edu-wrapper">
      {/* Section Title */}
      <motion.div
        className="edu-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="edu-icon">🎓</span>
        <h2>Education</h2>
      </motion.div>

      {/* Cards */}
      <div className="edu-cards">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="edu-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{item.title}</h3>
            <p className="edu-field">{item.field}</p>
            <p className="edu-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
