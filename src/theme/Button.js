import React from "react";
import styled from "styled-components";
import { colors, pxToRem } from "./helpers";
import { FaTwitterSquare, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Button = ({ className, href, name }) => {

  let icon;

  switch(name) {
    case "twitter": 
      icon = <FaTwitterSquare />;
      break;
    case "facebook":
      icon = <FaFacebookSquare />;
      break;
    case "instagram":
      icon = <FaInstagram />;
      break;
    default:
      icon = "";
  }

  return (
    <li className={className}>
      <AnchorLink href={href} className="link">
        {
          icon
        }
        {name}
      </AnchorLink>
    </li>
  );
};

export default styled(Button)`
  padding: ${pxToRem(5)};

  .link {
    text-decoration: none;
    text-transform: capitalize;
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

  svg {
    margin-right: ${pxToRem(5)};
  }
`;
