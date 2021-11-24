import styled from 'styled-components';

export const LoaderStyled = styled.div`
  && {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 5rem;
    height: 5rem;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    margin: 0 auto;
    /* Safari */
    @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
  }
`;