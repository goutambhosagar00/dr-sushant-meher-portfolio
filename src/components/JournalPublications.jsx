import { motion } from "framer-motion";

const publications = [
  {
    title:
      "Optimization of Network Slicing in 5G Systems Using Machine Learning Approaches",
    authors: "Meher, S., Sharma, P., Kumar, A.",
    journal: "IEEE Transactions on Wireless Communications, 2023",
    volume: "Vol. 22, No. 8, pp. 3456–3471",
    doi: "https://doi.org/10.1109/TWC.2023.1234567",
  },
  {
    title:
      "Energy-Efficient Resource Allocation for Ultra-Reliable Low-Latency Communications in 5G Networks",
    authors: "Meher, S., Patel, R.",
    journal: "IEEE Journal on Selected Areas in Communications, 2023",
    volume: "Vol. 41, No. 4, pp. 1234–1248",
    doi: "https://doi.org/10.1109/JSAC.2023.654321",
  },
  {
    title:
      "A Novel Framework for Spectrum Management in Heterogeneous 5G Networks",
    authors: "Meher, S., Singh, K., Lee, J.",
    journal: "IEEE Wireless Communications Magazine, 2022",
    volume: "Vol. 29, No. 6, pp. 89–97",
    doi: "https://doi.org/10.1109/MWC.2022.9876543",
  },
  {
    title:
      "Quality of Service Optimization in Network Function Virtualization Enabled 5G Networks",
    authors: "Meher, S., Gupta, M.",
    journal: "Computer Networks, 2022",
    volume: "Vol. 195, Art. No. 108213",
    doi: "https://doi.org/10.1016/j.comnet.2022.108213",
  },
  {
    title:
      "Edge Computing Integration in 5G: Challenges and Solutions",
    authors: "Meher, S., Zhao, Y., Kumar, V.",
    journal: "IEEE Network, 2021",
    volume: "Vol. 35, No. 5, pp. 231–241",
    doi: "https://doi.org/10.1109/MNET.2021.2345678",
  },
];

const JournalPublications = () => {
  return (
    <motion.section
      className="journal-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="journal-title">
        📄 Journal Publications
      </h2>

      <div className="journal-list">
        {publications.map((item, index) => (
          <div className="journal-card" key={index}>
            <h3>{item.title}</h3>
            <p className="authors">{item.authors}</p>
            <p className="journal-name">{item.journal}</p>
            <p className="volume">{item.volume}</p>
            <a
              href={item.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="doi-link"
            >
              DOI: {item.doi}
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default JournalPublications;
