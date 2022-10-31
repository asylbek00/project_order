import React from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderButton />
        {/* <button>Your Cart</button> */}
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="" />
      </div>
    </>
  );
}

export default Header;
