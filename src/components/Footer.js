import React from "react";
import styled from "styled-components";
import { colors, pxToRem } from "../theme/helpers";
import data from "../theme/data";
import Button from "../theme/Button";
import { FaHeart } from "react-icons/fa";


const Footer = ({ className }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="entreprise">
          <h3>{data.compagny.name}</h3>
          <p>{data.compagny.baseline}</p>
        </div>
        <div className="social-network">
          <h3>Nos Réseau Sociaux</h3>
          <ul>
            {data.links.map((link) => (
              <Button key={link.id} href={link.link} name={link.name} />
            ))}
          </ul>
        </div>
        <div className="shops">
          <h3>Boutiques les plus populaires</h3>
          <p>{data.cities[0].city}</p>
          <p>{data.cities[1].city}</p>
          <p>{data.cities[2].city}</p>
        </div>
      </div>
      <div className="admin"> © {new Date().getFullYear()} | Made with <FaHeart /> by <Button name="Anthony Gorski" href="https://agorski.netlify.app/" /></div>
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

  li {
    list-style: none;
  }

  h3 {
    margin-bottom: 2em;
    text-decoration: underline;
  }

  .container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

svg {
  margin: 0px ${pxToRem(5)};
}

.admin {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(10)};
  background-color: ${colors.primary};
}
  .social-network,
  .shops,
  .entreprise {
    padding: ${pxToRem(20)};
  }

  .social-network, .shops {
    text-align: center;
  }
`;
