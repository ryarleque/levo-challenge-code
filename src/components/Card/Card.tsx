import * as React from 'react';
import {
    CardContainerStyled,
    CardTitleStyled
} from './Card.style';
import bag from '../../static/images/bag.png';

interface CardComponentProps {    
    name: string
};

const CardComponent: React.FC<CardComponentProps> = ({ name }) => {

    return (
      <CardContainerStyled>
            <img src={bag} alt="bag"/>
            <CardTitleStyled>{name}</CardTitleStyled>
      </CardContainerStyled>
    );
}

export default CardComponent;