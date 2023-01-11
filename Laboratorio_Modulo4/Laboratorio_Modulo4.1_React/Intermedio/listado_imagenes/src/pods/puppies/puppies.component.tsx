import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React from "react";
import { addToCart } from "../../app-common/functions/addCart.function";
import { AnimalsContext } from "../context/context.component";

export const PuppiesComponent = () => {
  const { puppies, setPuppies, cart, setCart } =
    React.useContext(AnimalsContext);

  return (
    <>
      {puppies.map((puppy) => (
        <div key={puppy.id}>
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={puppy.picUrl}
              title={puppy.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {puppy.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Un perro fiel es un animal que muestra lealtad y devoción hacia
                su dueño. Estos perros son muy leales y siempre están dispuestos
                a proteger y servir a su dueño.
              </Typography>
            </CardContent>
            <CardActions>
              <FormControlLabel
                value="start"
                control={
                  <Checkbox
                    checked={puppy.selected}
                    onChange={() => {
                      addToCart(puppies, puppy.id, setPuppies, cart, setCart);
                    }}
                  />
                }
                label="ADD TO CART"
                labelPlacement="start"
              />
            </CardActions>
          </Card>
        </div>
      ))}
    </>
  );
};
