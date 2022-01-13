import styled from 'styled-components';

export const InfoCardContainer = styled.div`
  && {
    display: flex;
    justify-content: space-between;
    align-content: center;
    background: #9dd6e940;
    padding: 1rem;
    margin-bottom: 1.25rem;
    align-items: center;
    border-radius: 0.5rem;
    cursor: pointer;
    &: hover {
        background: lightcyan;
    }
    &.success {
        border-left: solid 10px green;
    }
    &.failed {
        border-left: solid 10px red;
    }
  }
`;

export const TitleStyled = styled.div`
  && {
    font-size: 1rem;
    color: gray;
    line-height: 1.75rem;
    font-weight: 500;
  }
`;

export const SubTitleStyled = styled.div`
  && {
    font-size: 0.75rem;
    color: lightblue;
    font-weight: 500;
  }
`;

export const SuccessInfoStyled = styled.div`
  && {
    font-size: 0.75rem;
    color: green;
    font-weight: bold;
    width: 6rem;
  }
`;

export const FailedInfoStyled = styled.div`
  && {
    font-size: 0.75rem;
    color: red;
    font-weight: bold;
    width: 4rem;
  }
`;

export const DescriptionInfoStyled = styled.div`
  && {
    font-size: 0.75rem;
    color: gray;
    font-weight: 500;
  }
`;

export const DetailSectionStyled = styled.div`
  && {
    display: flex;
  }
`;