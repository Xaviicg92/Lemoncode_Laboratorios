import React from "react";
import { ShoppingCartContainer } from "../shopping-cart/shoppingCart.container";
import { AppLayoutCenter } from "../../Layouts/app.layout.center";
import { KittiesComponent } from "./kitties.component";

export const KittiesContainer = () => {
  return (
    <AppLayoutCenter>
      <KittiesComponent></KittiesComponent>
      <ShoppingCartContainer></ShoppingCartContainer>
    </AppLayoutCenter>
  );
};
