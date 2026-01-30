import { motion } from "framer-motion";

const FutureResearchDirections = () => {
  return (
    <motion.section
      className="future-research"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="future-research-container">
        <h2>Future Research Directions</h2>

        <p className="future-research-intro">
          Looking ahead, my research roadmap encompasses several promising
          directions that will shape the evolution of wireless communications
          beyond 5G.
        </p>

        <div className="future-list">
          <div className="future-item">
            <h3>Artificial Intelligence Integration</h3>
            <p>
              Leveraging machine learning and artificial intelligence to enable
              intelligent network management, predictive optimization, and
              autonomous operation. This includes developing AI-driven
              approaches for traffic prediction, resource allocation, and
              anomaly detection.
            </p>
          </div>

          <div className="future-item">
            <h3>Beyond 5G (6G) Technologies</h3>
            <p>
              Exploring foundational technologies for sixth-generation networks,
              including terahertz communications, reconfigurable intelligent
              surfaces, and quantum communications. Early research in these
              areas will inform the development of future network architectures.
            </p>
          </div>

          <div className="future-item">
            <h3>Sustainable Network Design</h3>
            <p>
              Investigating energy-efficient network operation and green
              communication strategies to reduce the environmental impact of
              wireless networks. This includes research on renewable energy
              integration, sleep mode optimization, and carbon-aware resource
              management.
            </p>
          </div>

          <div className="future-item">
            <h3>Industrial and Vertical Applications</h3>
            <p>
              Developing specialized 5G solutions for critical vertical sectors
              such as healthcare, transportation, manufacturing, and
              agriculture. Tailoring network capabilities to meet
              industry-specific requirements presents unique research
              opportunities.
            </p>
          </div>
        </div>

        <p className="future-research-outro">
          Through continued research, collaboration, and innovation, I aim to
          contribute meaningfully to the advancement of wireless communication
          technologies that will underpin the connected society of the future.
        </p>
      </div>
    </motion.section>
  );
};

export default FutureResearchDirections;
