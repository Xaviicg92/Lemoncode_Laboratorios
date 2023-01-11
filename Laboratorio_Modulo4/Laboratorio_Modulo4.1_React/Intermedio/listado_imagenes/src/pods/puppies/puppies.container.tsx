import React from "react";
import { AppLayoutCenter } from "../../Layouts/app.layout.center";
import { ShoppingCartContainer } from "../shopping-cart/shoppingCart.container";
import { PuppiesComponent } from "./puppies.component";

export const PuppiesContainer = () => {
  return (
    <AppLayoutCenter>
      <PuppiesComponent></PuppiesComponent>
      <ShoppingCartContainer></ShoppingCartContainer>
    </AppLayoutCenter>
  );
};
