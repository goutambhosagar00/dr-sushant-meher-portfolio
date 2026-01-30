import { motion } from "framer-motion";

const AcademicBackground = () => {
  return (
    <motion.section
      className="academic-bg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="academic-bg-container">
        <h2>Academic Background</h2>

        {/* PhD */}
        <div className="academic-item">
          <h3>Doctorate in Computer Science & Engineering</h3>
          <span>Ph.D. specializing in 5G Wireless Networks</span>
          <p>
            My doctoral research focused on optimizing network performance in
            5G systems, exploring novel approaches to spectrum management,
            network slicing, and quality of service enhancement. The work
            contributed significant insights into the challenges and
            opportunities presented by next-generation wireless technologies.
          </p>
        </div>

        {/* Masters */}
        <div className="academic-item">
          <h3>Master&apos;s in Computer Science & Engineering</h3>
          <span>M.Tech with focus on Advanced Networking</span>
          <p>
            During my master&apos;s program, I developed a strong foundation in
            network protocols, wireless communication systems, and distributed
            computing. This period shaped my research interests and provided
            essential skills for advanced academic work.
          </p>
        </div>

        {/* Bachelors */}
        <div className="academic-item">
          <h3>Bachelor&apos;s in Computer Science & Engineering</h3>
          <span>B.Tech with comprehensive computer systems training</span>
          <p>
            My undergraduate studies established a solid foundation in computer
            science fundamentals, including programming, data structures,
            algorithms, and computer architecture, which continue to inform my
            research and teaching approaches.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AcademicBackground;
