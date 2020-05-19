import React from "react";
import styled from "styled-components";
import { colors, pxToRem } from "./helpers";

const Button = ({ className, href, name }) => {
  return (
    <li className={className}>
      <a href={href} className="link">
        {name}
      </a>
    </li>
  );
};

export default styled(Button)`
  padding: ${pxToRem(5)};

  .link {
    text-decoration: none;
    color: ${colors.background};
    padding: ${pxToRem(7)};
    transition: 0.15s ease-in-out;
  }

  .link:hover {
    background-color: ${colors.background};
    padding: ${pxToRem(7)};
    border-radius: ${pxToRem(3)};
    color: ${colors.accent};
  }
`;
