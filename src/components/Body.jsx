import axios from "axios";
import React, { useState } from "react";
import logo from "./coins.svg";

function Body() {
  //const [count,setCount]=useState(0)

  return (
    <article className="articles">
      <section className="about">
        <h2 className="abouthead"> О нашем проекте</h2>
        <p className="abouttext">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          laoreet non est eget pharetra. Aenean auctor molestie euismod. Sed
          dignissim lectus magna, vitae consequat mi vulputate eu. Nullam
          scelerisque lorem non dictum ornare. Nam vitae feugiat nisi. Etiam
          iaculis massa vel lectus dictum efficitur. Interdum et malesuada fames
          ac ante ipsum primis in faucibus.{" "}
        </p>
      </section>
    </article>
  );
}
export default Body;
