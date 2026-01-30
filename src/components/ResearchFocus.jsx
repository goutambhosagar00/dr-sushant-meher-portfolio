import { motion } from "framer-motion";

const ResearchFocus = () => {
  return (
    <section className="research-focus">
      <div className="research-focus-inner">

        {/* LEFT CONTENT */}
        <motion.div
          className="research-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="research-title">
            <span className="research-icon">📘</span>
            <h2>Research Focus</h2>
          </div>

          <p>
            My research centers on the advancement of 5G wireless networks and
            next-generation communication systems. I focus on developing
            innovative solutions for network optimization, spectrum efficiency,
            and emerging wireless technologies that will shape the future of
            global connectivity.
          </p>

          <p>
            Through rigorous theoretical analysis and practical implementation,
            my work contributes to understanding and solving critical challenges
            in modern telecommunications infrastructure.
          </p>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          className="research-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>Key Research Areas</h3>

          <ul>
            <li>5G Network Architecture & Optimization</li>
            <li>Wireless Communication Systems</li>
            <li>Spectrum Management & Efficiency</li>
            <li>Next-Generation Network Technologies</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default ResearchFocus;
