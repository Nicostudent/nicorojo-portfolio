import { useState } from "react";
import "./styles.css";
import { Expertise } from "./components/Expertise";
import { Contact } from "./components/Contact";
import { Lenguage } from "./components/Lenguage";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import nicocv from "./assets/Nicocv.jpeg";

const App = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>("home");

  const handleItemHover = (item: string) => {
    setHoveredItem(item);
  };

  return (
    <div className="bg-hexagon_big bg-top-left-bottom-right bg-20% bg-no-repeat flex justify-center items-center h-screen text-slate-700">
      {/* Left panel */}
      <div className="w-1/5 h-full border-r-2  border-slate-200 flex justify-center items-center">
        <ul>
          <li
            className="hover:bg-slate-100 p-2 cursor-pointer transition duration-200 ease-in rounded"
            onClick={() => handleItemHover("home")}
          >
            Home
          </li>
          <li
            className="hover:bg-slate-100 p-2 cursor-pointer transition duration-200 ease-in rounded"
            onClick={() => handleItemHover("expertise")}
          >
            Expertise
          </li>
          <li
            className="hover:bg-slate-100 p-2 cursor-pointer transition duration-200 ease-in rounded"
            onClick={() => handleItemHover("language")}
          >
            Language
          </li>
          <li
            className="hover:bg-slate-100 p-2 cursor-pointer transition duration-200 ease-in rounded"
            onClick={() => handleItemHover("projects")}
          >
            Projects
          </li>
          <li
            className="hover:bg-gray-200 p-2 cursor-pointer transition duration-200 ease-in rounded"
            onClick={() => handleItemHover("contact")}
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Middle panel */}
      <div className="w-1/2 flex pl-2 relative h-full justify-center align-middle items-center">
        <h1
          className="flex flex-col text-6xl text-center font-bold mb-4 absolute right-0 left-0 top-10 m-auto cursor-pointer w-fit"
          onClick={() => setHoveredItem(hoveredItem === 'image' ? 'home' : 'image')}
          onMouseLeave={() => handleItemHover("home")}
          // onMouseLeave={() => handleItemHover('home')}
        >
          Nicolás Rojo
          <span className="text-lg text-center mt-2 text-slate-900 animate-bounce">
            Front-End Developer
          </span>
        </h1>

        {/* Display information based on hovered item */}
        <div className="w-3/4 flex justify-center items-center align-middle">
          <div
            className="p-4 rounded transition-opacity duration-700 ease-in z-0"
            style={{ opacity: hoveredItem === "home" ? 1 : 0 }}
          >
            {/* Render home component only when hoveredItem is "home" */}
            {hoveredItem === "home" && <Home />}
          </div>

          <div
            className=" rounded transition-opacity duration-700 ease-in z-10"
            style={{ opacity: hoveredItem === "expertise" ? 1 : 0 }}
          >
            {/* Render Expertise component only when hoveredItem is "expertise" */}
            {hoveredItem === "expertise" && <Expertise />}
          </div>
          <div
            className=" rounded transition-opacity duration-700 ease-in z-20 "
            style={{ opacity: hoveredItem === "language" ? 1 : 0 }}
          >
            {/* Render Language component only when hoveredItem is "language" */}
            {hoveredItem === "language" && <Lenguage />}
          </div>
          <div
            className=" rounded transition-opacity duration-700 ease-in-out z-0"
            style={{ opacity: hoveredItem === "projects" ? 1 : 0 }}
          >
            {/* // Render About component only when hoveredItem is "about"  */}
            {hoveredItem === "projects" && <Projects />}
          </div>
          <div
            className=" rounded transition-opacity duration-700 ease-in z-30"
            style={{ opacity: hoveredItem === "contact" ? 1 : 0 }}
          >
            {/* Render Contact component only when hoveredItem is "contact" */}
            {hoveredItem === "contact" && <Contact />}
          </div>
          <div
            className="flex justify-center rounded transition-opacity duration-700 ease-in z-40"
            style={{ opacity: hoveredItem === "image" ? 0.7 : 0 }}
          >
            {/* Render Contact component only when hoveredItem is "contact" */}
            {hoveredItem === "image" && (
              <img
                className="rounded-full size-8/12	 self-center border-2 "
                src={nicocv}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
