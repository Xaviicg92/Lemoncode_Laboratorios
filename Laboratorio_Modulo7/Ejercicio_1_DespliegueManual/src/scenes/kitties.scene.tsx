import React from "react";
import { SelectorScene } from "../pods/selector/selector.container";
import { KittiesContainer } from "../pods/kitties/kitties.container";
import { AppLayout } from "../Layouts/app.layout";

export const KittiesScene = () => {
  return (
    <AppLayout>
      <SelectorScene />
      <KittiesContainer />
    </AppLayout>
  );
};
