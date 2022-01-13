import styled from 'styled-components';


export const TestReportContainer= styled.div`
  && {
    display: flex;
  }
`;

export const TestReportDetail = styled.div`
  && {
    margin: 2rem;
    width: 100%;
    input {
        width: 99%;
        padding: 0.5rem;
        margin: 1rem 0;
        border: 1px solid green;
        border-radius: 0.5rem;
    }
  }
`;

export const TestReportStyled = styled.div`
  && {
    margin-bottom: 3rem;
    color: #a722a7;
    font-size: 1.15rem;
    font-weight: 400;
    margin-right: 0.5rem;
  }
`;

export const TestReportDetailTopInfo = styled.div`
  && {
    display: flex;
    align-items: baseline;
  }
`;

export const SuccessLabelStyled = styled.div`
  && {
    background: green;
    padding: 0.25rem;
    color: white;
    border-radius: 4rem;
    margin-left: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
    width: 4.5rem;
    text-align: center;
  }
`;

export const FailedLabelStyled = styled.div`
  && {
    background: red;
    padding: 0.25rem;
    color: white;
    border-radius: 4rem;
    margin-left: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
    width: 3rem;
    text-align: center;
  }
`;    

export const LabelStatusStyled = styled.div`
  && {
    font-weight: bold;
    margin: 1.5rem 0;
  }
`;    