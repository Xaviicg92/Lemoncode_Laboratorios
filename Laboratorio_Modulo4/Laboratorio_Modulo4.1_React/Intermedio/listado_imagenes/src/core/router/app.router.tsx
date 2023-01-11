import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimalsContextProvider } from "../../pods/context/context.component";

import { KittiesScene } from "../../scenes/kitties.scene";
import { PuppiesScene } from "../../scenes/puppies.scene";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <AnimalsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={switchRoutes.kitties} element={<KittiesScene />}></Route>
          <Route path={switchRoutes.puppies} element={<PuppiesScene />}></Route>
        </Routes>
      </BrowserRouter>
    </AnimalsContextProvider>
  );
};
