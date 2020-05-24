import React from "react";
import Hero from "../theme/Hero";
import styled from "styled-components";
import { colors, layout, pxToRem } from "../theme/helpers";

const Banner = ({ className }) => {
  return (
    <div className={className}>
      <Hero>
        <div className="container">
          <div className="left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempore, fuga illo modi harum praesentium beatae ullam voluptas, saepe cumque corporis fugit dolorum placeat at laboriosam vero pariatur amet neque.</div>
          <div className='right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo quaerat atque quod numquam quam doloribus nostrum temporibus voluptas iure? Modi quod aperiam fugiat praesentium officia temporibus deserunt corporis rerum.</div>
        </div>
      </Hero>
    </div>
  );
};

export default styled(Banner)`
  color: ${colors.background};

  .left, .right {
    padding: ${pxToRem(25)};
  }

  .left {
  }

  .right {
    background-color: ${colors.background};
    color: ${colors.accent};
  }

  .container {
    ${layout(1440)};
    padding: ${pxToRem(100)} 0px;
    display: flex;
    justify-content: space-around;
  }

  @media only screen and (max-width: 875px) {
    .container {
      flex-wrap: wrap;
    }
  }
`;
