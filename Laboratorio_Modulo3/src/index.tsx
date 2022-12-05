import React from "react";
import {createRoot} from "react-dom/client";
import {AverageComponent} from "./averageComponent";
import "./styles.scss"
import classes from "./styles.scss"


const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <a href="#">
        <span>Hello World</span>
        <div class={classes.liquid}></div>
        </a>
    </div>
    
    
);

