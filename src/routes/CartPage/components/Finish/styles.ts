import styled from 'styled-components'

export const StyledFinish = styled.div`
  p {
    color: grey;
    font-size: 14px;
    line-height: 1.3em;
  }

  h1, h2 {
    font-weight: 700;
    color: var(--primary-color);
  }

  .btn-back {
    text-transform: none;
    color: gray;
    margin-top: 3rem;
  }

  .content-wrapper {
    margin: auto;
    padding: 14%;

    h1 {
      margin-bottom: 2rem;
    }

    p {
      line-height: 2em;
    }
  }

  .summary-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: solid var(--primary-color) 0.1px;
    padding-left: 1rem;

    h2 {
      margin-bottom: 1rem;
    }

    hr {
      margin: 30px;
      border: solid lightgray 0.1px;
      max-width: 100px;
      margin-left: 0;
    }

    .eta-label {
      font-weight: 500;
      color: black;
      margin: 4px 0;
    }
    
    .eta {
      font-weight: 600;
      color: var(--primary-success);
      margin-bottom: 5rem;
    }

    .details {
      .item {
        padding: 4px 0;

        strong {
          color: black;
        }
      }

      .right {
        text-align: end;
      }

      .total {
        padding: 1.5rem 0;
        
        p {
          font-weight: 600;
          color: var(--primary-color);
          font-size: 20px;
        }
      }

      button {
        padding: 12px 12px;
        text-transform: none;
        font-weight: bold;
        color: white;
      }
    }
  }
`;