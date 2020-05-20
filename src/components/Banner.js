import React from "react";
import Hero from "../theme/Hero";
import styled from "styled-components";
import { colors, layout, pxToRem } from "../theme/helpers";
import img from "../images/logo.png";

const Banner = ({ className }) => {
  return (
    <div className={className}>
      <Hero>
        <div className="container">
          <div className="title">
            <img src={img} alt="logo"/>
          </div>
          <div>Content</div>
        </div>
      </Hero>
    </div>
  );
};

export default styled(Banner)`
  color: ${colors.background};

  .title {
    padding-top: ${pxToRem(25)};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;

  }

  .container {
    ${layout(1440)};
  }
`;
