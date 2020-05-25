import React from "react";
import Hero from "../theme/Hero";
import styled from "styled-components";
import { colors, layout, pxToRem } from "../theme/helpers";

const Banner = ({ className }) => {
  return (
    <div className={className}>
      <Hero>
        <div className="container">
          <div className="left">
            <h1 className="bold">La boutique</h1>
              Votre boutique <span className="bold">Sexy Chocolat</span> vous accueille du Dimanche au Jeudi dans tout nos points de vente en france métropolitaine de <span className="bold">12h00</span> à <span className="bold">00h00</span>.
              <p>
                Si vous souhaitez faire plaisir à une personne de votre choix, d'une manière différente, nous sommes là pour vous ! <br />
                Nous vous livrons en toute discrétion, de partout en france grâce à notre service de livraison.
              </p>
            </div>
          <div className='right'>
            <h1 className="accent">Nos compositions</h1>
            
              <ul>
                <li>
                  <h3 className="bold">

                  Le panier garni :
                  </h3>
                  <ol>
                    Huile de massage au chocolat
                  </ol>
                  <ol>
                    Les choukekettes
                  </ol>
                  <ol>
                    Les menottes en chocolat
                  </ol>
                  <ol>
                    Un bouquet de roses en chocolat
                  </ol>
                  <ol>
                    Un bouquet de roses en chocolat
                  </ol>
                </li>
                <li>
                  <h3 className="bold">

                  La découverte :
                  </h3>
                  <ol>
                    Huile de massage au chocolat
                  </ol>
                   <ol>
                    Les menottes en chocolat
                  </ol>
                  <ol>
                    Les choukekettes
                  </ol>
                </li>
                <li>
                  <h3 className="bold">

                  La surprise :
                  </h3>
                  <ol>
                    Un lot qui sera préparé selon les tendances de la journée et nos envies !
                  </ol>
                </li>
              </ul>
          </div>
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
    font-weight: 400;
    font-size: ${pxToRem(20)};
    letter-spacing: ${pxToRem(2)};
  }

  li {
    list-style: none;
  }

  .right {
    font-size: ${pxToRem(15)};

    border-radius: 37px;
    box-shadow:  -7px 14px 9px 7px #baac9d70;
    width: 100%;
    background-color: ${colors.background};
    color: ${colors.accent};
  }

  .container {
    ${layout(1440)};
    padding: ${pxToRem(100)} 0px;
    align-items: center;
    display: flex;
    justify-content: space-around;
  }

  @media only screen and (max-width: 875px) {
    .container {
      flex-wrap: wrap;
    }
  }
`;
