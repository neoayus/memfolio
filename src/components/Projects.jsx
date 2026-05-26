import Project from "./Project";

export default function Projects() {
  return (
    <div class="section-dkblue">
      <section id="projects">
        <h2>Innovations I Stand Behind</h2>
        <Project
          reverse={false}
          name="slatt"
          shortdesc="short description"
          description="description"
          techstack="nvim html css"
          imageURL={"./amazon-clone.png"}
        />
      </section>
    </div>
  );
}
