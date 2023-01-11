import React from "react";
import { SelectorScene } from "../pods/selector/selector.container";
import { PuppiesContainer } from "../pods/puppies/puppies.container";
import { AppLayout } from "../Layouts/app.layout";

export const PuppiesScene = () => {
  return (
    <AppLayout>
      <SelectorScene />
      <PuppiesContainer />
    </AppLayout>
  );
};
