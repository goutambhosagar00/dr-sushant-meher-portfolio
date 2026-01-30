import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT – CONTACT INFO */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Contact Information</h2>

          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <h4>Email</h4>
              <a href="mailto:sushant.meher@university.edu">
                sushant.meher@university.edu
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <h4>Phone</h4>
              <p>+91 123 456 7890</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">🏢</div>
            <div>
              <h4>Office</h4>
              <p>
                Room 304, Department of CSE<br />
                Third Floor, Engineering Block
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h4>Address</h4>
              <p>
                Department of Computer Science & Engineering<br />
                University Name<br />
                City, State – 000000<br />
                India
              </p>
            </div>
          </div>

          <div className="office-hours">
            <h3>Office Hours</h3>
            <p><strong>Monday – Friday:</strong> 10:00 AM – 5:00 PM</p>
            <p><strong>Saturday:</strong> 10:00 AM – 1:00 PM</p>
            <p><strong>Sunday:</strong> Closed</p>
            <small>* Please schedule appointments in advance via email</small>
          </div>
        </motion.div>

        {/* RIGHT – FORM */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Send a Message</h2>

          <form>
            <label>Name</label>
            <input type="text" placeholder="Your full name" />

            <label>Email</label>
            <input type="email" placeholder="your.email@example.com" />

            <label>Subject</label>
            <input type="text" placeholder="Message subject" />

            <label>Message</label>
            <textarea placeholder="Your message..." rows="5"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
