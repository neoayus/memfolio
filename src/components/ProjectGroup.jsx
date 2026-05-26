import Project from "./Project";

export default function Projects() {
  return (
    <div class="section-dkblue">
      <section id="projects">
        <h2>innovations i stand behind</h2>

        {/* portfolio */}
        <Project
          name="Memfolio"
          reverse={false}
          shortdesc="Static personal portfolio site (react)"
          description="Memfolio is my personal portfolio website designed to showcase my projects, skills, and development journey. I originally created it as a simple website and later rewrote the entire project in React to improve maintainability, component reusability, and overall frontend structure. The project reflects my interest in modern frontend development, clean UI design, and efficient developer workflows. It also helped me gain hands-on experience with React fundamentals, project architecture, and responsive design."
          techstack="HTML CSS JS REACT"
          imageURL={"./memfolio.png"}
        />

        {/*  raptv pot generator*/}
        <Project
          name="RapTv Post Generator"
          reverse={true}
          shortdesc="Custom WebApp for IG Media Page (RapTv inspired)"
          description="This project is a custom Instagram post generator built for some Dhh media page to streamline the process of creating RapTV-style news posts. The application takes an image and headline/news content as input, automatically highlights important words, and generates a ready-to-upload Instagram post within seconds. The core logic and layout system were inspired by another project of mine a lyric card generator app and were adapted to fit fast-paced social media news content. The project helped me explore dynamic text rendering, automated design workflows, and content-focused UI generation while building something practical for real-world use."
          techstack="REACT HTML2IMAGE "
          imageURL={"./raptvPostGen.png"}
        />

        <Project
          name="YomiBashi"
          reverse={false}
          shortdesc="Japanese Subtitle Converter (Kanji to Romaji)"
          description="YomiBashi is a React-based web application that helps Japanese language learners convert Japanese .srt subtitle files into a more beginner-friendly romaji format. The project was built to solve a common issue for new learners who struggle reading Kanji-heavy subtitles while watching anime, movies, or TV shows. Users can upload subtitle files, send them to a FastAPI backend for processing, and download the converted result through a simple mobile-first interface. While building the project, I worked on frontend-backend integration, file upload handling, API communication, and creating a clean, distraction-free experience focused on practical language learning."
          techstack="REACT REST API PYTHON "
          imageURL={"./yomibashi.png"}
        />

        <Project
          name="lyriQ"
          reverse={true}
          shortdesc="lyrics card web app (genius.com inspired)"
          description="LyriQ is a lightweight lyric card generator inspired by the Genius Android app, built for creating custom lyric cards for songs, snippets, and unreleased tracks that may not exist on Genius. Users can upload background images, add custom lyrics and song details, and export cards in social-media-friendly formats like 1:1 and 4:5. While building the project, I worked with DOM-to-image rendering using the html-to-image library and solved image export issues by converting uploaded files from Blob URLs to Base64 using the FileReader API, ensuring background images rendered correctly during export."
          techstack="REACT HTML2IMAGE"
          imageURL={"./lyriqs.png"}
        />

        <Project
          name="other web apps"
          reverse={false}
          shortdesc=""
          description="Frontend Practice Collection is a repository containing multiple small frontend projects, website recreations, and UI experiments built during my learning journey. The collection includes projects such as Apple.com desktop clones, Figma-to-code recreations, SaaS landing pages, Hulu-inspired interfaces, weather applications, and various CSS/JavaScript experiments. Instead of treating them as standalone projects, I grouped them together as a showcase of consistent frontend practice, layout building, responsive design work, and hands-on experimentation with modern web development concepts."
          techstack="HTML CSS JS SASS-CSS"
          imageURL={"./lyriqs.png"}
        />
      </section>
    </div>
  );
}
