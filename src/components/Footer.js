import React from "react";
import styled from "styled-components";
import { colors } from "../theme/helpers";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <div className="social-network">
        <h3>Nos Réseau Sociaux</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/LovinFun/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/lovinfun/">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/Lovinfun">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default styled(Footer)`
  background-color: ${colors.accent};
  color: ${colors.background};

  ul,
  h3 {
    padding: 0;
    margin: 0;
  }

  h3 {
    margin-bottom: 2em;
  }
`;
