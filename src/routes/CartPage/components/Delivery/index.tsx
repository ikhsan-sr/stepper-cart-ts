import { Grid, Button, Checkbox, TextField, FormControlLabel } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { StyledDelivery } from './styles'

const Delivery = ({ handleBack, handleNext }) => {
  console.log(handleBack);
  
  return (
    <StyledDelivery>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
          <Button 
            variant="text" 
            onClick={handleBack}
            color="inherit"
            startIcon={<ArrowBackIcon />}
            className="btn-back"
          >
            Back to cart
          </Button>

          <Grid container>
            <Grid item xs={6}>
              <h1>Delivery details</h1>
            </Grid>
            <Grid item xs={6} className="is-dropshipper">
              <FormControlLabel control={<Checkbox defaultChecked />} label="Send as dropshipper" />
            </Grid>

            <Grid container className="form-wrapper">
              <Grid item xs={12} sm={7} md={7} lg={7} xl={7} className="input-wrapper">
                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
              </Grid>

              <Grid item xs={12} sm={5} md={5} lg={5} xl={5} className="input-wrapper">
                <TextField id="outlined-basic" label="Dropshipper name" variant="outlined" fullWidth />
              </Grid>

              <Grid item xs={12} sm={7} md={7} lg={7} xl={7} className="input-wrapper">
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" fullWidth />
              </Grid>

              <Grid item xs={12} sm={5} md={5} lg={5} xl={5} className="input-wrapper">
                <TextField id="outlined-basic" label="Dropshipper phone number" variant="outlined" fullWidth />
              </Grid>

              <Grid item xs={12} sm={7} md={7} lg={7} xl={7} className="input-wrapper">
                <TextField
                  id="standard-textarea"
                  label="Delivery Address"
                  placeholder="Delivery Address"
                  multiline
                  variant="outlined"
                  rows={4}
                  fullWidth
                />
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
          <div className="summary-wrapper">
            <div>
              <h2>Summary</h2>
              <p>10 items purchased</p>
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
                
                <Grid item xs={6} className="total">
                  <p>Total</p>
                </Grid>
                <Grid item xs={6} className="total right">
                  <p><strong>500,000</strong></p>
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
    </StyledDelivery>
  )
}

export default Delivery