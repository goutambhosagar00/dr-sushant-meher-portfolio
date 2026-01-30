import { motion } from "framer-motion";

const ResearchIntro = () => {
  return (
    <motion.section
      className="research-intro"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="research-intro-container">
        <h2>Introduction to 5G Networks</h2>

        <p>
          Fifth-generation (5G) wireless networks represent a transformative
          leap in telecommunications technology, promising unprecedented speed,
          ultra-low latency, and massive connectivity. Unlike its predecessors,
          5G is designed not merely to enhance mobile broadband but to enable a
          vast ecosystem of connected devices and applications that will
          fundamentally reshape industries, economies, and daily life.
        </p>

        <p>
          The evolution to 5G addresses three primary use cases defined by the
          International Telecommunication Union (ITU): Enhanced Mobile Broadband
          (eMBB), Ultra-Reliable Low-Latency Communications (URLLC), and Massive
          Machine-Type Communications (mMTC). These capabilities are essential
          for supporting emerging applications such as autonomous vehicles,
          remote surgery, smart manufacturing, and extensive Internet of Things
          (IoT) deployments.
        </p>

        <p>
          My research focuses on the architectural innovations, optimization
          techniques, and practical implementation challenges associated with
          realizing these ambitious 5G objectives. Through a combination of
          theoretical analysis, simulation studies, and experimental validation,
          I investigate how to design and deploy efficient, scalable, and
          reliable 5G network systems.
        </p>
      </div>
    </motion.section>
  );
};

export default ResearchIntro;
