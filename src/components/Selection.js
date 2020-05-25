import React, {useState} from 'react';
import styled from "styled-components";
import { layout,  pxToRem } from "../theme/helpers";
import massage from "../images/selection/massage.png";
import bouche from "../images/selection/bouche.png";
import sein from "../images/selection/sein-choco.png";
import penis from "../images/selection/penis-choco.png";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaInfoCircle } from "react-icons/fa";



const Selection = ({ className }) => {

    const [value, setValue] = useState(0);

    function onChange(value) {
        setValue(value);
    };

    return (
        <div className={className} id="selections">
            <h1>Notre séléctions</h1>
            <div>
                Nous avons un large choix de chocolat érotique, d'huile de massage, de jouet en chocolat pour rendre votre sexualitée plus appétissante !
                
            </div>
            <div className="carousel">
                <Carousel
                    value={value}
                    onChange={onChange}
                    slides={[
                    (<img src={massage} alt="selection" />),
                    (<img src={bouche} alt="selection" />),
                    (<img src={sein} alt="selection" />),
                    (<img src={penis} alt="selection" />),
                    ]}

                    arrowLeft={<FaAngleDoubleLeft />}
                    arrowLeftDisabled={<FaAngleLeft />}
                    arrowRight={<FaAngleDoubleRight />}
                    arrowRightDisabled={<FaAngleRight />}
                    addArrowClickHandler
                />
            </div>
            <p>
                <FaInfoCircle /> Notre galerie sera plus étoffé dans les prochains jours ! 
            </p>
        </div>
    )
}

export default styled(Selection) `

${layout(1440)};
padding: ${pxToRem(100)} 0px;

.carousel {
    padding: ${pxToRem(50)} ${pxToRem(100)};

}


`;