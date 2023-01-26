import { useState } from 'react'

import { Grid, Button, Checkbox, TextField, FormControlLabel } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';

import { COURIERS, PAYMENTS } from './dummy';
import { StyledPayment } from './styles'

const Payment = ({ handleBack, handleNext }) => {
  const [data, setData] = useState({
    shipment: COURIERS[0],
    payment: PAYMENTS[0],
  })

  console.log(handleBack);
  
  return (
    <StyledPayment>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
          <Button 
            variant="text" 
            onClick={handleBack}
            color="inherit"
            startIcon={<ArrowBackIcon />}
            className="btn-back"
          >
            Back to delivery
          </Button>

          <Grid container>
            <Grid item xs={12}>
              <h1>Shipment</h1>
            </Grid>

            {COURIERS.map((item, index) => (
              <Grid xs={6} sm={3} md={3} xl={3} key={index} className="items-wrapper">
                <div 
                  className={`item-card ${data.shipment.name === item.name && 'selected'}`}
                  onClick={() => setData({...data, shipment: item})}
                >
                  <div>
                    <p>{item.name}</p>
                    <p>{item.cost}</p>
                  </div>
                  {data.shipment.name === item.name && <CheckIcon color="success" />}
                </div>
              </Grid> 
            ))}

            <Grid item xs={12} style={{marginTop: '5rem'}}>
              <h1>Payment</h1>
            </Grid>

            {PAYMENTS.map((item, index) => (
              <Grid xs={6} sm={3} md={3} xl={3} key={index} className="items-wrapper">
                <div 
                  className={`item-card ${data.payment.name === item.name && 'selected'}`}
                  onClick={() => setData({...data, payment: item})}
                >
                  <div>
                    <p>{item.name}</p>
                    <p>{item.desc || ''}</p>
                  </div>
                  {data.payment.name === item.name && <CheckIcon color="success" />}
                </div>
              </Grid> 
            ))}


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

                <Button 
                  variant="contained"
                  fullWidth
                  onClick={handleNext}
                >
                  Continue to Payment
                </Button>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </StyledPayment>
  )
}

export default Payment