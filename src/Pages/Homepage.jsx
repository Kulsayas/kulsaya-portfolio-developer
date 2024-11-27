import Profile from "../components/Profile";
import Aboutme from "../components/AboutMe";
import CardExperience from "../components/CardExperience";
import GenerationContent from "../components/GenerationContent";
import WorkExperienceContent from "../components/WorkExperienceContent";
import PhotoHeader from "../components/PhotoHeader";
import ProjectContent from "../components/ProjectContent";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <Profile />
      <Aboutme />
      <CardExperience />
      <GenerationContent />
      <WorkExperienceContent />
      <ProjectContent />
      <PhotoHeader />
    </div>
  );
}

export default Homepage;
