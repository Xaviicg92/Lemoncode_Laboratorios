import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../core/router/routes";

export const SelectorScene = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PETS
          </Typography>

          <Link className="links" to={switchRoutes.puppies}>
            Puppies
          </Link>

          <Link className="links" to={switchRoutes.kitties}>
            Kitties
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
