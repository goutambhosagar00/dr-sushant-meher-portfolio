import { motion } from "framer-motion";
import sirPhoto from "../assets/images/Sir.jpg";

const AboutIntro = () => {
  return (
    <motion.section
      className="about-intro"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="about-intro-container">
        {/* LEFT IMAGE */}
        <div className="about-intro-image">
          <img src={sirPhoto} alt="Dr. Sushant Meher" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-intro-content">
          <h1>About Dr. Sushant Meher</h1>

          <p>
            Dr. Sushant Meher is an Assistant Professor in the Department of
            Computer Science & Engineering, specializing in 5G wireless
            networks and next-generation communication technologies. With a
            strong foundation in both theoretical research and practical
            implementation, Dr. Meher has established himself as a dedicated
            researcher and educator in the field of wireless communications.
          </p>

          <p>
            His academic journey has been marked by a commitment to advancing
            the understanding of complex network systems and their real-world
            applications. Through his research, Dr. Meher aims to bridge the
            gap between cutting-edge wireless technology and its practical
            deployment in modern telecommunications infrastructure.
          </p>

          <p>
            Beyond research, Dr. Meher is deeply committed to education and
            mentorship. He believes in nurturing critical thinking and
            problem-solving skills in students, preparing them to become
            innovators and leaders in the rapidly evolving technology
            landscape.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutIntro;
