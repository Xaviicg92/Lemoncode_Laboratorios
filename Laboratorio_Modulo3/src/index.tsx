import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
import classes from "./styles.scss";
import "./environment";

const root = createRoot(document.getElementById("root"));
const welcome: string = "Hello World";
root.render(
  <div>
    <a href="#">
      <span>{welcome}</span>
      <div className={classes.liquid}></div>
    </a>
  </div>
);
