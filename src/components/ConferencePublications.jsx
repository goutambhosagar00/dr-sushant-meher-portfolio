import { motion } from "framer-motion";

const conferences = [
  {
    title:
      "Deep Learning Based Traffic Prediction for Proactive Resource Allocation in 5G Networks",
    authors: "Meher, S., Reddy, P., Chen, X.",
    venue: "IEEE International Conference on Communications (ICC), 2023",
    location: "Rome, Italy | pp. 1–6",
  },
  {
    title:
      "Blockchain-Enabled Security Framework for 5G Network Slicing",
    authors: "Meher, S., Ahmed, F.",
    venue: "IEEE Global Communications Conference (GLOBECOM), 2023",
    location: "Kuala Lumpur, Malaysia | pp. 1–7",
    highlight: true,
  },
  {
    title:
      "Performance Analysis of Massive MIMO Systems in 5G Urban Deployments",
    authors: "Meher, S., Wang, L., Kumar, S.",
    venue: "IEEE Wireless Communications and Networking Conference (WCNC), 2022",
    location: "Austin, TX, USA | pp. 1–5",
  },
  {
    title:
      "Intelligent Handover Management for High-Mobility Scenarios in 5G Networks",
    authors: "Meher, S., Kim, J.",
    venue:
      "IEEE International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC), 2022",
    location: "Kyoto, Japan | pp. 1–6",
  },
  {
    title:
      "Software-Defined Networking Approaches for Dynamic 5G Network Management",
    authors: "Meher, S., Patel, D., Singh, R.",
    venue:
      "ACM International Conference on Mobile Computing and Networking (MobiCom), 2021",
    location: "New Orleans, LA, USA | pp. 123–135",
  },
];

const ConferencePublications = () => {
  return (
    <motion.section
      className="conference-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="conference-title">
        📘 Conference Publications
      </h2>

      <div className="conference-list">
        {conferences.map((item, index) => (
          <div
            key={index}
            className={`conference-card ${
              item.highlight ? "highlight" : ""
            }`}
          >
            <h3>{item.title}</h3>
            <p className="authors">{item.authors}</p>
            <p className="venue">{item.venue}</p>
            <p className="location">{item.location}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ConferencePublications;
