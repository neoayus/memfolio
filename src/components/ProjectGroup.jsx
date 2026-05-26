import Project from "./Project";

export default function Projects() {
  return (
    <div class="section-dkblue">
      <section id="projects">
        <h2>Innovations I Stand Behind</h2>

        <Project
          name="Apple.com CLone"
          reverse={true}
          shortdesc="Frontend Project Using (HTML, CSS & JS)"
          description="This project is a responsive web clone of the official Apple website, developed using HTML, CSS, and JavaScript. The goal was to recreate the look and feel of the Apple homepage, showcasing products with elegant design and clean UI elements."
          techstack="HTML CSS JS"
          imageURL={"./apple-clone.png"}
        />

        <Project
          name="Personal Portfolio"
          shortdesc="Latest Project"
          description="Memfolio is a personal portfolio website designed to showcase my work, skills, and journey as a Computer Science student. Built using HTML, CSS, and JavaScript, this project demonstrates clean design principles and effective use of front-end technologies."
          techstack="HTML CSS"
          imageURL={"./memfollio.png"}
        />

        <Project
          reverse={true}
          shortdesc="JS Project"
          name="Weather App wih API"
          description="WeatherApp.js is a simple, interactive weather application built using HTML, CSS, and JavaScript. The app allows users to input any location and get real-time weather information, including temperature, weather conditions, and more.It fetches data from the OpenWeather API and displays it in a clean, user-friendly interface. The application also demonstrates skills in API integration, DOM manipulation, and responsive design."
          techstack="HTML CSS JS API"
          imageURL={"./weather-app.png"}
        />

        <Project
          reverse={true}
          shortdesc="Frontend Project"
          name="Netflix Clone (using HTML & CSS)"
          description="This project is a Static clone of the Netflix homepage, developed using HTML, CSS. It aims to replicate the visual layout and functionality of Netflix, with a focus on front-end design Only."
          techstack="HTML CSS"
          imageURL={"./netflix-clone.png"}
        />

        <Project
          shortdesc="Frontend Project"
          name="Hulu Clone (using HTML & CSS)"
          description="This project is a static clone of the Hulu homepage, developed using HTML and CSS. The goal of this project is to replicate the visual layout of Hulu with a focus on front-end design elements."
          techstack="HTML CSS"
          imageURL={"./hulu-clone.png"}
        />

        <Project
          reverse={true}
          shortdesc="Frontend Project"
          name="Amazon Clone (using HTML & CSS)"
          description="This project is a static clone of the Amazon homepage, created using HTML and CSS. The aim of this project is to replicate the core visual elements of Amazon’s homepage with a focus on layout, design, and responsiveness."
          techstack="HTML CSS"
          imageURL={"./amazon-clone.png"}
        />
      </section>
    </div>
  );
}
