import styled from 'styled-components'

export const StyledPayment = styled.div`
  p {
    color: grey;
    font-size: 14px;
  }

  h1, h2 {
    font-weight: 700;
    color: var(--primary-color);
  }

  .btn-back {
    text-transform: none;
    color: gray;
    position: absolute;
    top: 20px;
  }

  .items-wrapper {
    padding: 5px;
    margin-top: 1.5rem;
  }

  .item-card {
    border: solid 2px lightgrey;
    padding: 12px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 65px;
    
    p {
      color: grey;
      font-weight: 500;
    }
  }
  
  .selected {
    border-color: var(--primary-success);
    background: rgba(27, 217, 123, 0.1);
    
    p {
      color: black;
      font-weight: 600;
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