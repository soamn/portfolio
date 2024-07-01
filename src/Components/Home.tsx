import { FaReact, FaHtml5, FaCss3Alt, FaRust } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiGodotengine } from "react-icons/si";
import Draggable from "react-draggable";
import { Tooltip } from "react-tooltip";

interface cards {
  title: string;
  description: string;
}
interface IPROPS {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  cards: cards[];
}

const devImg = [
  `${process.env.PUBLIC_URL}/dev1.svg`,
  `${process.env.PUBLIC_URL}/dev2.svg`,
];

const Home: React.FC<IPROPS> = ({ index, setIndex, cards }) => {
  return (
    <>
      // Introduction elements
      <div className="container">
        <div className="line"></div>
        <div className="content">
          <h1>
            Hello Its{" "}
            <a target="_blank" href="https://www.linkedin.com/in/soamn/">
              soamn
            </a>
          </h1>
        </div>
      </div>
      <div className="container2">
        <div className="line"></div>
        <div className="content">
          <h1>A Developer</h1>
        </div>
      </div>
      //Card element
      <div className="card-container">
        <div className="card-slideshow">
          <div
            className="card-slide"
            style={{
              transform: `translate3d(${-index * 100}%, 0, 0)`,
            }}
          >
            {cards.map((cardinfo, index) => (
              <div key={index} className="card">
                <h2> {cardinfo.title}</h2>
                <p> {cardinfo.description}</p>
              </div>
            ))}
          </div>
          <div className="card-dots">
            {cards.map((_, idx) => (
              <div
                key={idx}
                className={`card-dot ${index === idx ? "active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      //Skill section element
      <div
        className="skills"
        data-tooltip-id="dragme"
        data-tooltip-content="Drag The Icons"
      >
        <Tooltip id="dragme" />
        <h2>Skills</h2>

        <Draggable>
          <FaHtml5 className="skill-iconH" />
        </Draggable>
        <Draggable>
          <FaCss3Alt className="skill-iconR" />
        </Draggable>
        <Draggable>
          <IoLogoJavascript className=" skill-iconJ" />
        </Draggable>
        <Draggable>
          <FaReact className="skill-iconR" />
        </Draggable>
        <Draggable>
          <FaRust className="skill-iconH" />
        </Draggable>
        <Draggable>
          <SiGodotengine className="skill-iconR" />
        </Draggable>
      </div>
      //sliding Image section
      <div className="img-container">
        <div className="image-slideshow">
          <div
            className="image-slide"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {devImg.map((image, index) => (
              <img src={image} key={index} alt="deceloper-image" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
