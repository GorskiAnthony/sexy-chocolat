import styled from "styled-components";

import img from "../images/heart-chocolat.jpg";

const Hero = styled.div`
  min-height: 85vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url(${img}) center/cover fixed no-repeat;
  width: 100%;
`;

export default Hero;
