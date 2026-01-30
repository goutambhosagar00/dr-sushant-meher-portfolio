import PublicationsHeader from "../components/PublicationsHeader";
import CitationMetrics from "../components/CitationMetrics";
import AcademicProfiles from "../components/AcademicProfiles";
import JournalPublications from "../components/JournalPublications";
import ConferencePublications from "../components/ConferencePublications";

const Publications = () => {
  return (
    <>
      <PublicationsHeader />
      <AcademicProfiles />
      <JournalPublications />
      <ConferencePublications />
      <CitationMetrics />
    </>
  );
};

export default Publications;
