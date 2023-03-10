import { useState } from 'react'

import { Grid, Button, Checkbox, TextField, FormControlLabel } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';

import { INITIAL_CART } from '../../const';
import { COURIERS, PAYMENTS } from './dummy';
import { StyledFinish } from './styles'

const Finish = ({ handleNext, cart, setCart }) => {
  const [data, setData] = useState({
    shipment: COURIERS[0] ,
    payment: PAYMENTS[0],
  })
  const id = Math.random().toString(36).slice(7);
  const idFormated = id.toUpperCase()
    .replaceAll('1', 'X')
    .replaceAll('l', 'X')
    .replaceAll('0', 'X')
    .replaceAll('1', 'O');

  const shipment = cart.shipment || COURIERS[0];
  const payment = cart.payment || PAYMENTS[0];

  const handleReset = () => {
    setCart(INITIAL_CART);
  }
  
  return (
    <StyledFinish>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>

          <Grid container>
            <Grid item xs={12} className="content-wrapper">
              <h1>Thank you</h1>
              <p><strong>Order ID: {idFormated}</strong></p>
              <p>Your order will be delivered today with GO-SEND</p>
              <Button 
                variant="text" 
                onClick={handleReset}
                color="inherit"
                startIcon={<ArrowBackIcon />}
                className="btn-back"
              >
                Back to homepage
              </Button>
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
          <div className="summary-wrapper">
            <div>
              <h2>Summary</h2>
              <p>10 items purchased</p>

              <hr />

              <p className="eta-label">Delivery estimation</p>
              <p className="eta">{shipment.eta} by {shipment.name}</p>
            </div>

            <div className="details">
              <Grid container>
                
                <Grid item xs={6} className="item">
                  <p>Cost of goods</p>
                </Grid>
                <Grid item xs={6} className="item right">
                  <p><strong>500,000</strong></p>
                </Grid>
                
                <Grid item xs={6} className="item">
                  <p>Dropshipping Fee</p>
                </Grid>
                <Grid item xs={6} className="item right">
                  <p><strong>5,900</strong></p>
                </Grid>
                
                <Grid item xs={9} className="item">
                  <p>{shipment.name} shipment</p>
                </Grid>
                <Grid item xs={3} className="item right">
                  <p><strong>{shipment.cost}</strong></p>
                </Grid>
                
                <Grid item xs={6} className="total">
                  <p>Total</p>
                </Grid>
                <Grid item xs={6} className="total right">
                  <p><strong>{500000 + 5900}</strong></p>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </StyledFinish>
  )
}

export default Finish