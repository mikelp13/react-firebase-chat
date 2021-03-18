import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/constants";

const Navbar = () => {
  const isAuth = false;
  return (
    <AppBar color={"secondary"} position="static">
      <Toolbar variant={"dense"}>
        <Grid container justify={"flex-end"}>
          {isAuth ? (
            <Button variant={"outlined"}>Logout</Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"}>Login</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
