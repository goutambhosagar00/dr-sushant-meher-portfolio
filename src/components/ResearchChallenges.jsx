import { motion } from "framer-motion";

const ResearchChallenges = () => {
  return (
    <motion.section
      className="research-challenges"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="research-challenges-container">
        <h2>Research Challenges</h2>

        <p className="research-challenges-intro">
          The pursuit of effective 5G solutions encounters numerous technical
          and practical challenges that must be systematically addressed.
        </p>

        <div className="challenges-grid">
          <div className="challenge-card">
            <h3>Complexity and Scale</h3>
            <p>
              5G networks are inherently complex, involving heterogeneous
              technologies, diverse use cases, and massive scale. Managing this
              complexity while maintaining performance and reliability poses
              significant research challenges.
            </p>
          </div>

          <div className="challenge-card">
            <h3>Dynamic Environments</h3>
            <p>
              Network conditions, traffic demands, and user mobility introduce
              significant variability. Developing adaptive solutions that
              respond effectively to dynamic environments is a key research
              focus.
            </p>
          </div>

          <div className="challenge-card">
            <h3>Resource Constraints</h3>
            <p>
              Spectrum, energy, and computational resources are inherently
              limited. Efficient resource management techniques are essential
              to support the ambitious performance targets of 5G.
            </p>
          </div>

          <div className="challenge-card">
            <h3>Security and Privacy</h3>
            <p>
              The increased connectivity and complexity of 5G networks create
              new security vulnerabilities. Ensuring robust security while
              maintaining performance is an ongoing research priority.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ResearchChallenges;
