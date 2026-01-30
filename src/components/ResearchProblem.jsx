import { motion } from "framer-motion";

const ResearchProblem = () => {
  return (
    <motion.section
      className="research-problem"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="research-problem-container">
        <h2>Research Problem Statement</h2>

        <p className="research-problem-intro">
          Despite the promise of 5G technology, several critical challenges
          impede its effective deployment and operation. These challenges span
          multiple dimensions of network design, resource management, and
          quality assurance.
        </p>

        <div className="research-problem-box">
          <h3>Key Research Questions</h3>

          <ul>
            <li>
              How can we optimize spectrum allocation and utilization to
              accommodate the diverse requirements of 5G use cases while
              maintaining quality of service?
            </li>
            <li>
              What novel algorithms and protocols can ensure ultra-reliable
              low-latency communication essential for mission-critical
              applications?
            </li>
            <li>
              How can network slicing be effectively implemented to provide
              customized virtual networks with guaranteed performance
              characteristics?
            </li>
            <li>
              What strategies can enable efficient edge computing integration
              to reduce latency and enhance application responsiveness?
            </li>
          </ul>
        </div>
         <p className="research-problem-intro">
         Addressing these questions requires interdisciplinary approaches that integrate concepts from wireless communications, optimization theory, machine learning, and distributed systems. My research systematically explores these areas to develop practical solutions that can be deployed in real-world 5G networks.
        </p>
      </div>
    </motion.section>
  );
};

export default ResearchProblem;
