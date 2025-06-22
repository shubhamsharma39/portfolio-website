import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi"; // 🎓 Education icon

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#main");

  return (
    <nav>
      <a href="#main" onClick={() => setActiveNav("#main")} className={activeNav === "#main" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>
        <BiBook />
      </a>
      <a href="#certifications" onClick={() => setActiveNav("#certifications")} className={activeNav === "#certifications" ? "active" : ""}>
        <BsPatchCheckFill />
      </a>
      <a href="#education" onClick={() => setActiveNav("#education")} className={activeNav === "#education" ? "active" : ""}>
        <GiGraduateCap />
      </a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a href="#exploring" onClick={() => setActiveNav("#exploring")} className={activeNav === "#exploring" ? "active" : ""}>
        <MdExplore />
      </a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
