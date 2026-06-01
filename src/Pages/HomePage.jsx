import ProfileIntro from "../components/ProfileIntro";
import ContactSection from "../components/ContactSection";
import ProjectGroup from "../components/ProjectGroup";

export default function HomePage() {
  return (
    <>
      <section id="#intro">
        <ProfileIntro />
      </section>

      <section id="#projects">
        <ProjectGroup />
      </section>

      <section id="#contact">
        <ContactSection />
      </section>
    </>
  );
}
