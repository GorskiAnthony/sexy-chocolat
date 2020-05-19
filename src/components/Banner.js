import React from "react";
import Hero from "../theme/Hero";
import styled from "styled-components";
import { colors } from "../theme/helpers";

const Banner = ({ className }) => {
  return (
    <div className={className}>
      <Hero>
        <div className="container">
          <div>
            <h1>Sexy Chocolat</h1>
            <h2>Le chocolat a partager</h2>
          </div>
          <div>Content</div>
        </div>
      </Hero>
    </div>
  );
};

export default styled(Banner)`
  color: ${colors.background};

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
