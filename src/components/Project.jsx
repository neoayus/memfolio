export default function Project({
  reverse,
  name,
  shortdesc,
  description,
  techstack,
  imageURL,
}) {
  return (
    <article class={reverse && "reverse"}>
      <div class="text">
        <h4>{shortdesc}</h4>
        <h3>{name}</h3>
        <p class="blackbox">{description}</p>

        <h4>Technologies used include:</h4>
        <ul>
          {techstack.split(" ").map((tech) => (
            <li key={tech}> {tech}</li>
          ))}
        </ul>
      </div>
      <img src={imageURL} />
    </article>
  );
}
