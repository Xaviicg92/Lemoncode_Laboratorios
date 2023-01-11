import React from "react";
import { AnimalsContext } from "../context/context.component";
import { addToCart } from "../../app-common/functions/addCart.function";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Checkbox, FormControlLabel } from "@mui/material";

export const KittiesComponent = () => {
  const { kitties, setKitties, cart, setCart } =
    React.useContext(AnimalsContext);

  return (
    <>
      {kitties.map((kitty) => (
        <div key={kitty.id}>
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={kitty.picUrl}
              title={kitty.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {kitty.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Los gatos domesticos son animales independientes y
                territoriales, y suelen ser muy cariñosos y afectuosos con sus
                dueños. Aunque no son tan leales como los perros, pueden ser muy
                protectores y apegados a sus dueños
              </Typography>
            </CardContent>
            <CardActions>
              <FormControlLabel
                value="start"
                control={
                  <Checkbox
                    checked={kitty.selected}
                    onChange={() => {
                      addToCart(kitties, kitty.id, setKitties, cart, setCart);
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
