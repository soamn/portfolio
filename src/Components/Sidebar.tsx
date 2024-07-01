import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  FaHome,
  FaAddressCard,
  FaLinkedin,
  FaGithub,
  FaInstagramSquare,
} from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Tooltip } from "react-tooltip";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const handleMenuClick = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <Tooltip id="menu-tooltip" />
      <button
        className="menu-btn "
        onClick={handleMenuClick}
        data-tooltip-id="menu-tooltip"
        data-tooltip-content="menu"
      >
        <IoMdMenu className="menu-btn" />
      </button>
      <div
        className="sidebar"
        style={sidebar ? { display: "flex" } : { display: "none" }}
      >
        <button
          className="close-btn"
          onClick={handleMenuClick}
          style={sidebar ? { display: "flex" } : { display: "none" }}
          data-tooltip-id="close-tooltip"
          data-tooltip-content="close"
        >
          <RxCross1 className="close-btn" />
        </button>
        <Tooltip id="close-tooltip" place="bottom" noArrow />

        <div className="nav-icons">
          <NavLink to="/" className="link">
            <FaHome
              className="nav-icon"
              data-tooltip-id="Home-tooltip"
              data-tooltip-content="Home"
            />
            <Tooltip id="Home-tooltip" place="right" noArrow />
          </NavLink>

          <NavLink to="/Projects" className="link">
            <AiFillProject
              className="nav-icon"
              data-tooltip-id="Projects-tooltip"
              data-tooltip-content="Projects"
            />
            <Tooltip id="Projects-tooltip" noArrow />
          </NavLink>

          <NavLink to="/About" className="link">
            <FaAddressCard
              className="nav-icon"
              data-tooltip-id="contact-tooltip"
              data-tooltip-content="Contact"
            />
            <Tooltip id="contact-tooltip" noArrow />
          </NavLink>
        </div>
        <div className="socials">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/soamn/"
            className="link"
          >
            <FaLinkedin
              className="social-icon"
              data-tooltip-id="linkedin-tooltip"
              data-tooltip-content="Linkedin"
            />
            <Tooltip id="linkedin-tooltip" noArrow />
          </a>
          <a target="_blank" href="https://github.com/soamn" className="link">
            <FaGithub
              className="social-icon"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="Github"
            />
          </a>
          <Tooltip id="github-tooltip" noArrow />

          <a
            target="_blank"
            href="https://www.instagram.com/soamn.dev/"
            className="link"
          >
            <FaInstagramSquare
              className="social-icon"
              data-tooltip-id="instagram-tooltip"
              data-tooltip-content="Instagram"
            />
            <Tooltip id="instagram-tooltip" noArrow />
          </a>
        </div>
      </div>
    </>
  );
}
