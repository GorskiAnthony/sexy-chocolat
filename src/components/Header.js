import React from "react";
import styled from "styled-components";
import { colors, pxToRem, layout } from "../theme/helpers";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="logo">
          <h2>Sexy Chocolat</h2>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/">Produit</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default styled(Header)`
  background-color: ${colors.primary};
  color: ${colors.background};

  .logo {
    width: 40%;
    height: auto;
  }

  .container {
    ${layout(1220)};
    font-family: "Oxygen", sans-serif;
    font-size: ${pxToRem(20)};
    font-weight: 400;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: ${pxToRem(10)} 0px;
  }

  .menu li {
    display: inline;
    text-align: center;
    padding: ${pxToRem(20)};
  }

  a {
    text-decoration: none;
    color: ${colors.background};
  }

  a:hover {
    background-color: ${colors.background};
    padding: ${pxToRem(7)};
    border-radius: ${pxToRem(3)};
    color: ${colors.accent};
  }

  @media only screen and (max-width: 750px) {
    .logo {
      display: flex;
      justify-content: center;
    }

    .container {
      flex-wrap: wrap;
    }
  }
`;
