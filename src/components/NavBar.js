import React from "react";
import home from "./Home"

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav><a key={home.id} href="#home">home</a>
  <a href="#about">about</a>
  <a href="#projects">projects</a></nav>;
}

export default NavBar;
