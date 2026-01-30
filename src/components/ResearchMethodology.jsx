import { motion } from "framer-motion";

const ResearchMethodology = () => {
  return (
    <motion.section
      className="research-methodology"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="research-methodology-container">
        <h2>Research Methodology</h2>

        <p className="methodology-intro">
          My research methodology combines rigorous theoretical analysis with
          empirical validation, ensuring that proposed solutions are both
          theoretically sound and practically viable.
        </p>

        {/* Item 1 */}
        <div className="methodology-item">
          <h3>Theoretical Analysis</h3>
          <p>
            I develop mathematical models to represent complex network behaviors
            and formulate optimization problems that capture key performance
            objectives. Using techniques from operations research, control
            theory, and stochastic processes, I derive analytical solutions or
            approximations that provide insights into optimal network operation.
          </p>
        </div>

        {/* Item 2 */}
        <div className="methodology-item">
          <h3>Simulation Studies</h3>
          <p>
            Extensive simulation experiments are conducted using industry-standard
            tools and custom-built simulation platforms. These simulations allow
            me to evaluate the performance of proposed algorithms under various
            network conditions, traffic patterns, and deployment scenarios.
            Statistical analysis of simulation results provides quantitative
            evidence of performance improvements.
          </p>
        </div>

        {/* Item 3 */}
        <div className="methodology-item">
          <h3>Prototype Implementation</h3>
          <p>
            Selected research outcomes are implemented in prototype systems using
            software-defined networking (SDN) and network function virtualization
            (NFV) technologies. These prototypes demonstrate the feasibility of
            proposed approaches and provide practical insights into
            implementation challenges and deployment considerations.
          </p>
        </div>

        {/* Item 4 */}
        <div className="methodology-item">
          <h3>Collaborative Validation</h3>
          <p>
            Collaboration with industry partners and research institutions
            enables validation of research findings in realistic test
            environments. These collaborations also ensure that research
            addresses genuine industry needs and aligns with standardization
            efforts.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default ResearchMethodology;
