import { motion } from "framer-motion";


// images (apne assets ke naam use karo)
import classroomImg from "../assets/images/classroom.jpg";
import labImg from "../assets/images/lab.jpg";
import conferenceImg from "../assets/images/seminar.jpg";
import seminarImg from "../assets/images/event.jpg";

const AcademicLife = () => {
  return (
    <section className="academic-life">
      <div className="academic-life-header">
        <h2>Academic Life</h2>
        <p>
          A glimpse into teaching, research presentations, and academic
          engagement across various settings.
        </p>
      </div>

      <div className="academic-life-grid">
        {/* CARD 1 */}
        <motion.div
          className="life-card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img src={classroomImg} alt="Classroom Teaching" />
          <div className="life-overlay">
            <h3>Classroom Teaching</h3>
            <span>Interactive lecture sessions with undergraduate students</span>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          className="life-card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img src={labImg} alt="Laboratory Sessions" />
          <div className="life-overlay">
            <h3>Laboratory Sessions</h3>
            <span>Hands-on practical work in computer networking lab</span>
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          className="life-card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img src={conferenceImg} alt="Conference Presentation" />
          <div className="life-overlay">
            <h3>Conference Presentation</h3>
            <span>Presenting research findings at international conference</span>
          </div>
        </motion.div>

        {/* CARD 4 */}
        <motion.div
          className="life-card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img src={seminarImg} alt="Academic Seminar" />
          <div className="life-overlay">
            <h3>Academic Seminar</h3>
            <span>Keynote address at department seminar</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicLife;
