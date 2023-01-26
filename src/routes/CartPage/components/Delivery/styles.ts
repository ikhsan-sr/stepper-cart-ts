import styled from 'styled-components'

export const StyledDelivery = styled.div`
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

  .input-wrapper {
    padding: 6px;
  }

  .form-wrapper {
    margin-left: -1rem;
    margin-top: 3rem;
  }

  .is-dropshipper {
    text-align: end;
    padding-right: 2rem;
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