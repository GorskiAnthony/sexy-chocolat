import React from "react";
import styled from "styled-components";
import Button from "../theme/Button";
import { colors, pxToRem, layout } from "../theme/helpers";
import data from "../theme/data";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="logo">
          <h2>{data.compagny.name}</h2>
        </div>
        <div className="menu">
          <ul className="list">
            {data.navigation.map((nav) => (
              <Button key={nav.id} href={nav.link} name={nav.name} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default styled(Header)`
  background-color: ${colors.primary};
  color: ${colors.background};

  .container {
    ${layout(1220)};
    font-family: "Oxygen", sans-serif;
    font-size: ${pxToRem(17)};
    font-weight: 400;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .list li {
    display: inline;
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
