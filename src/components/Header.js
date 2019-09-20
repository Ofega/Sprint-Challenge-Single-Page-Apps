import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.nav`
  display: flex;
  margin: 1rem 0;
  background: #fff;
  font-weight: 400;
  border: 1px solid rgba(34,36,38,.15);
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
  border-radius: 4px;
  min-height: 40px;
  font-size: 1rem;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  a {
    position: relative;
    vertical-align: middle;
    line-height: 1;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    flex: 0 0 auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background: 0 0;
    padding: 1rem;
    text-transform: none;
    color: rgba(0,0,0,.87);
    font-weight: 400;
    transition: background .1s ease,box-shadow .1s ease,color .1s ease;

    &.selected {
      background: rgba(0,0,0,.05);
      color: rgba(0,0,0,.95);
      font-weight: 400;
      box-shadow: none;

      &:after {
        visibility: visible;
        background-color: #f2f2f2;
      }
    }

    &:before {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      height: 100%;
      width: 1px;
      background: rgba(34,36,38,.1);
    }

    &:after {
      visibility: hidden;
      position: absolute;
      content: '';
      top: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
      background: 0 0;
      margin: .5px 0 0;
      width: .57142857em;
      height: .57142857em;
      border: none;
      border-bottom: 1px solid #d4d4d5;
      border-right: 1px solid #d4d4d5;
      z-index: 2;
      transition: background .1s ease;
    }
  }
`

export default function Header() {
  return (
    <>
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </header>

      <Menu pointing>
        <NavLink exact to="/" activeClassName="selected">Home Page</NavLink>
        <NavLink to="/characters" activeClassName="selected">Characters</NavLink>
        <NavLink to="/locations" activeClassName="selected">Locations</NavLink>
    </Menu>
    </>
  );
}
