import styled from 'styled-components'

export const StyledStepper = styled.div`
  position: absolute;
  width: 500px;
  background-color: #FFFAE6;
  left: calc(50% - 250px);
  height: 70px;
  top: -35px;
  border-radius: 35px;

  .MuiStepLabel-label {
    color: var(--primary-color);
  }

  .MuiStepIcon-text {
    fill: white;
  }

  .MuiStepConnector-root {
    top: 2
  }

  .MuiStepConnector-line {
    border: none;
  }

  .MuiStepConnector-root span::before {
    display: flex;
    justify-content: center;
    content: '❯';
    color: var(--primary-color);
  }
`;