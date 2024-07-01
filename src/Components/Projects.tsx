import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects: React.FC = () => {
  const tiles = [
    {
      title: "Web Drawing tool",
      image: `${process.env.PUBLIC_URL}/draw.png`,
      description: `Draw-flow is a browser application that uses html canvas and rough.js to 
        draw and manipulate different shapes ,
        like line, Rectangle , circle , ellipse , dashed-shapes and Text elements
        You Can Pan the canvas infinitly , move canvas elements
        , Undo and Redo your actions , and Reset the canvas.
        It uses mouse events and states to get information about the user actions
    ( whether user wants to draw , select , move or add text ) It updates
     and draws the elemets by tracking the mouse X and Y positions and generating them using
     Roughjs , which is a graphic library that lets you draw rough shapes on html canvas
    . The project is available on github... `,
    },
    {
      title: "Todo App",
      image: `${process.env.PUBLIC_URL}/todo.png`,
      description: `Easily Input Tasks ,
         Add them to your List of tasks ,
         Edit Your Added Task , Delete Any Task ,
          Local storage (Tasks persist even after a reload) ,
          Four Major React Components to Structure this Small project ,
           A todoInput component to handle the adding of todos ,
            A todo List and todo card component to render the added todo( with options to add or delete a todo ) ,
             A parent to all an App component to handle all the added todos through state and handle features like editing and deleting a task with the help of React state`,
    },
  ];
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleClick = (index: number) => {
    const imgElement = imageRefs.current[index];
    if (imgElement) {
      if (imgElement.requestFullscreen) {
        imgElement.requestFullscreen();
      }
    }
  };
  return (
    <>
      <div className="tile-container">
        <div className="tile-slideshow">
          <div className="tile-slide">
            {tiles.map((tile, index) => (
              <div key={index} className="tile">
                <h2> {tile.title}</h2>
                <p> {tile.description}</p>
                <img
                  key={index}
                  src={tile.image}
                  loading="lazy"
                  onClick={() => handleClick(index)}
                  ref={(el) => (imageRefs.current[index] = el)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Repo-links">
        <div className="outer">
          <FaGithub className="ext-icon" />
          <h3>Drawing App</h3>
          <a href="https://github.com/soamn/Flow" target="_blank">
            <FaExternalLinkAlt className="ext-icon" />
          </a>
        </div>
        <div className="outer">
          <FaGithub className="ext-icon" />
          <h3>Todo App </h3>
          <a
            href="https://github.com/soamn/Todo_app/tree/master/todoapp"
            target="_blank"
          >
            <FaExternalLinkAlt className="ext-icon" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Projects;
