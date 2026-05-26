import Navbar from "./components/Navbar";
import ProfileIntro from "./components/ProfileIntro";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <ProfileIntro />
      <div class="gradient"></div>
      <Projects />
      <ContactSection />
      <div class="gradient"></div>
      <Footer />
    </>
  );
}
