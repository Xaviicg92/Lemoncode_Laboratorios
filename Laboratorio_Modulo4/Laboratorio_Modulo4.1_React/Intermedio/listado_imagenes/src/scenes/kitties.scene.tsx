import React from "react";
import { SelectorContainer } from "@/pods/selector";
import { KittiesContainer } from "@/pods/kitties";
import { AppLayout } from "@/Layouts";

export const KittiesScene = () => {
  return (
    <AppLayout>
      <SelectorContainer />
      <KittiesContainer />
    </AppLayout>
  );
};
