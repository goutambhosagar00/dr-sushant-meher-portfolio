import { motion } from "framer-motion";

const TeachingPhilosophy = () => {
  return (
    <motion.section
      className="teaching-philosophy"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="teaching-philosophy-container">
        <h2>Teaching Philosophy</h2>

        <p>
          My teaching philosophy centers on creating an engaging and
          intellectually stimulating learning environment where students are
          encouraged to think critically, ask questions, and explore concepts
          beyond the textbook. I believe that education should not merely
          transmit knowledge but should inspire curiosity and foster independent
          thinking.
        </p>

        <p>
          In the classroom, I strive to connect theoretical concepts with
          real-world applications, helping students understand the relevance and
          impact of what they learn. I employ a variety of teaching methods,
          including interactive lectures, hands-on laboratory sessions, case
          studies, and collaborative projects, to accommodate different learning
          styles and enhance understanding.
        </p>

        <p>
          I am committed to making complex technical concepts accessible and
          understandable. By breaking down challenging topics into manageable
          components and using clear explanations and practical examples, I help
          students build confidence in their abilities and develop a genuine
          appreciation for the subject matter.
        </p>

        <p>
          Mentorship is an integral part of my teaching approach. I actively
          guide students in their research projects, career decisions, and
          personal development, fostering relationships that extend beyond the
          classroom and often continue long after graduation.
        </p>
      </div>
    </motion.section>
  );
};

export default TeachingPhilosophy;
