import { motion } from "framer-motion";

const ResearchVision = () => {
  return (
    <motion.section
      className="research-vision"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="research-vision-container">
        <h2>Research Vision</h2>

        <p>
          My research vision is driven by the belief that advances in wireless
          communication technology have the power to transform society, enhance
          connectivity, and address critical challenges in the digital age. I am
          particularly interested in exploring how 5G and beyond-5G technologies
          can be leveraged to create more efficient, secure, and accessible
          communication networks.
        </p>

        <p>
          Looking forward, I aim to contribute to the development of intelligent,
          adaptive networks that can meet the increasing demands of modern
          applications such as the Internet of Things (IoT), autonomous vehicles,
          smart cities, and industrial automation. This requires interdisciplinary
          approaches that combine networking theory, machine learning,
          optimization techniques, and practical engineering.
        </p>

        <p>
          Collaboration is at the heart of my research strategy. I actively seek
          partnerships with industry experts, fellow researchers, and
          international institutions to tackle complex problems that require
          diverse perspectives and expertise. I believe that the most impactful
          research emerges from such collaborative efforts.
        </p>

        <p>
          Ultimately, my goal is not only to advance academic knowledge but also
          to produce research outcomes that have tangible, positive impacts on
          technology deployment and societal well-being. I am committed to
          translating research findings into practical solutions that can be
          implemented in real-world scenarios.
        </p>
      </div>
    </motion.section>
  );
};

export default ResearchVision;
