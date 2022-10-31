import React from "react";
import CartIcon from "../Icon/CartIcon";
import classes from './HeaderButton.module.css'

function HeaderButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}><CartIcon/></span>
      <span>Your Cart</span> 
      <span>3</span>
    </button>
  );
}

export default HeaderButton;
