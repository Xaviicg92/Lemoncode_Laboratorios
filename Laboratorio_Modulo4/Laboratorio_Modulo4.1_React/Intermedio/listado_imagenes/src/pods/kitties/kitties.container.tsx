import React from "react";
import { ShoppingCartContainer } from "@/pods/shopping-cart";
import { AppLayoutCenter } from "@/Layouts";
import { KittiesComponent } from "./kitties.component";

export const KittiesContainer = () => {
  return (
    <AppLayoutCenter>
      <KittiesComponent></KittiesComponent>
      <ShoppingCartContainer></ShoppingCartContainer>
    </AppLayoutCenter>
  );
};
