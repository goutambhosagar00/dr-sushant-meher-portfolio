import { motion } from "framer-motion";

const metrics = [
  { value: "250+", label: "Total Citations" },
  { value: "12", label: "h-index" },
  { value: "18", label: "i10 index" },
  { value: "25+", label: "Publications" },
];

const CitationMetrics = () => {
  return (
    <motion.section
      className="citation-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="citation-title">Citation Metrics</h2>

      <div className="citation-grid">
        {metrics.map((item, index) => (
          <div key={index} className="citation-card">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default CitationMetrics;
