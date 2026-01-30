import { motion } from "framer-motion";

const items = [
  {
    degree: "Doctor of Philosophy (Ph.D.)",
    field: "Computer Science & Engineering",
    year: "University Name | 2015 – 2020",
    highlight: "Dissertation:",
    highlightText:
      "Advanced Optimization Techniques for 5G Wireless Network Architecture",
    description:
      "Research focused on developing novel algorithms for network slicing, resource allocation, and quality of service optimization in next-generation wireless systems. Contributed significant advancements to the theoretical understanding and practical implementation of 5G technologies.",
  },
  {
    degree: "Master of Technology (M.Tech)",
    field: "Computer Science & Engineering",
    year: "University Name | 2013 – 2015",
    highlight: "Specialization:",
    highlightText:
      "Advanced Computer Networks and Communication Systems",
    description:
      "Completed coursework in advanced networking protocols, wireless communications, distributed systems, and network security. Master's thesis explored performance optimization in LTE networks.",
  },
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    year: "University Name | 2009 – 2013",
    description:
      "Comprehensive undergraduate program covering core computer science subjects including data structures, algorithms, computer architecture, operating systems, database management, and software engineering.",
  },
];

const AcademicQualifications = () => {
  return (
    <section className="academic-section">
      <h2 className="academic-title">Academic Qualifications</h2>

      <div className="academic-timeline">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="academic-item"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon">📅</div>

            <div className="academic-content">
              <h3>{item.degree}</h3>
              <p className="field">{item.field}</p>
              <p className="year">{item.year}</p>

              {item.highlight && (
                <p className="highlight">
                  <strong>{item.highlight}</strong>{" "}
                  <span>{item.highlightText}</span>
                </p>
              )}

              <p className="description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AcademicQualifications;
