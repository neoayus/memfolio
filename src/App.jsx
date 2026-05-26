import Navbar from "./components/Navbar";
import ProfileIntro from "./components/ProfileIntro";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProjectGroup from "./components/ProjectGroup";

export default function App() {
  return (
    <>
      <Navbar />
      <ProfileIntro />
      <div class="gradient"></div>
      <ProjectGroup />
      <ContactSection />
      <div class="gradient"></div>
      <Footer />
    </>
  );
}
