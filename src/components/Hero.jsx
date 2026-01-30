import { motion } from "framer-motion";
import heroImg from "../assets/images/Sir.jpg";



const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={heroImg} alt="Dr. Sushant Meher" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>Dr. Sushant Meher</h1>
          <h3>Assistant Professor</h3>

          <p className="dept">
            Department of Computer Science & Engineering
          </p>

          <p className="research">
            Research Area: 5G Wireless Networks and Beyond
          </p>

          <a href="#" className="hero-btn">
            Research & Collaboration →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
