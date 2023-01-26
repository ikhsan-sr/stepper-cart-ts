import { useState } from 'react'

import { Grid, Button, Checkbox, TextField, FormControlLabel } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';

import { COURIERS, PAYMENTS } from './dummy';
import { StyledFinish } from './styles'

const Finish = ({ handleBack, handleNext }) => {
  const [data, setData] = useState({
    shipment: COURIERS[0],
    payment: PAYMENTS[0],
  })

  console.log(handleBack);
  
  return (
    <StyledFinish>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>

          <Grid container>
            <Grid item xs={12} className="content-wrapper">
              <h1>Thank you</h1>
              <p><strong>Order ID: XXYKB</strong></p>
              <p>Your order will be delivered today with GO-SEND</p>
              <Button 
                variant="text" 
                onClick={handleBack}
                color="inherit"
                startIcon={<ArrowBackIcon />}
                className="btn-back"
              >
                Back to delivery
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
              <p className="eta">{data.shipment.eta} by {data.shipment.name}</p>
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
                  <p>{data.shipment.name} shipment</p>
                </Grid>
                <Grid item xs={3} className="item right">
                  <p><strong>{data.shipment.cost}</strong></p>
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