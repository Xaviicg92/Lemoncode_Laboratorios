import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { AnimalsContext } from "../context/context.component";

export const ShoppingCartContainer = () => {
  const { cart, setCart, kitties, setKitties, puppies, setPuppies } =
    React.useContext(AnimalsContext);
  const [isVisible, setIsVisible] = React.useState(true);

  const deleteCart = (id: number) => {
    const deletedAnimals = cart.filter((animal) => animal.id !== id);
    setCart(deletedAnimals);
    if (kitties.some((t) => t.id === id)) {
      const kittiesUpdate = kitties.map((kittie) => {
        if (kittie.id === id) {
          return { ...kittie, selected: !kittie.selected };
        }
        return kittie;
      });
      setKitties(kittiesUpdate);
    }
    if (puppies.some((t) => t.id === id)) {
      const puppiesUpdate = puppies.map((puppy) => {
        if (puppy.id === id) {
          return { ...puppy, selected: !puppy.selected };
        }
        return puppy;
      });
      setPuppies(puppiesUpdate);
    }
  };
  console.log("soy los animals del cart", cart);

  return (
    <>
      <div className="cart">
        {isVisible && (
          <Card sx={{ minWidth: 275, Height: 300 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              ></Typography>
              <Typography variant="h5" component="div" paddingBottom={"10px"}>
                CART
              </Typography>

              <div>
                {cart.map((kittyCart) => (
                  <div key={kittyCart.id} className="cart-item">
                    <div>{kittyCart.title}</div>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => deleteCart(kittyCart.id)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
              <br />
            </CardContent>
          </Card>

          // <div className="cart">
          //   <h3>Cart</h3>
          //   {cart.map((kittyCart) => (
          //     <div key={kittyCart.id} className="cart-item">
          //       <div>{kittyCart.title}</div>
          //       <button onClick={() => deleteCart(kittyCart.id)}>Delete</button>
          //     </div>
          //   ))}
          // </div>
        )}
        <Button onClick={() => setIsVisible(!isVisible)} variant="contained">
          Hide/Show Cart
        </Button>
      </div>
    </>
  );
};
