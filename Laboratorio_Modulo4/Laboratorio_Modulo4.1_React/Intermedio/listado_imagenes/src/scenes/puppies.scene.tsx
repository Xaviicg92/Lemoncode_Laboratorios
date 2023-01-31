import React from "react";
import { SelectorContainer } from "@/pods/selector";
import { PuppiesContainer } from "@/pods/puppies";
import { AppLayout } from "@/Layouts";

export const PuppiesScene = () => {
  return (
    <AppLayout>
      <SelectorContainer />
      <PuppiesContainer />
    </AppLayout>
  );
};
