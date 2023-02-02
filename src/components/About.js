import React from "react";
import user from "../data/user";
import Link from "./Links"



function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {<Link />}
    </div>
  );
}

export default About;
