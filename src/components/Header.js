import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "./styles";

export default function Header() {
  return (
    <>
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </header>

      <Menu>
        <div className="menu-container">
          <NavLink exact to="/" activeClassName="selected">Home Page</NavLink>
          <NavLink to="/characters" activeClassName="selected">Characters</NavLink>
          <NavLink to="/locations" activeClassName="selected">Locations</NavLink>
        </div>
      </Menu>
    </>
  );
}
