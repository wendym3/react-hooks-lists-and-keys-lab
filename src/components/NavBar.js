import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {/* display an <a> tag for each link here */}

    <a key={links.home} href="#home">home</a>
    <a key={links.about} href="#about">about</a>
    <a key={links.projects} href="#projects">projects</a>
    
   

  
  </nav>;
}

export default NavBar;
