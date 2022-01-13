import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  && {
    background: #c3cfd9;
    padding: 2.5rem;
    position: relative;
    width: 33rem;
    margin: 0 auto;
    margin-bottom: 1.25rem;
    border: 2px solid green;
    cursor: pointer;
    &:hover {
        background: green;
    }
    img {
        position: absolute;
        top: 50%;
        left: 3rem;
        font-size: 1.5rem;
        border-radius: 3rem;
        padding: 0.25rem;
        transform: translateY(-50%);
    }
}
`;

export const CardTitleStyled = styled.div`
  && {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;