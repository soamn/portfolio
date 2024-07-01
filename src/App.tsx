import "./css/App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import Projects from "./Components/Projects";
import About from "./Components/About";
import { useEffect, useRef, useState } from "react";
const App: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const cards = [
    {
      title: "Learning",
      description:
        "Enthusiasm for staying updated with the latest industry trends, tools, and technologies in the JavaScript and React ecosystem.",
    },
    {
      title: "Problem-Solving",
      description:
        'I excel at analyzing complex issues, identifying underlying causes, and developing strategic solutions." My problem-solving skills are grounded in my ability to think critically and creatively." ',
    },
  ];
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={<Home index={index} setIndex={setIndex} cards={cards} />}
        />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
};
export default App;
