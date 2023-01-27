import { useEffect } from 'react';

import { useForm, Controller } from "react-hook-form";
import { Grid, Button, Checkbox, TextField, FormControlLabel, Input, Select } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { StyledDelivery } from './styles'
import { formatRupiah } from '@/src/utils/rupiahFormat';

const Delivery = ({ handleBack, handleNext, cart, setCart }) => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: cart.email,
      phone: cart.phone,
      address: cart.address,
      dropshipperPhone: cart.phone,
      name: cart.name,
      isDropshipper: cart.isDropshipper,
    }
  });

  const watchAllFields = watch();
  const isDropshipper = watch('isDropshipper')

  const onSubmit = () => { 
    setCart({...cart, activeStep: 1})
    handleNext()
  }

  useEffect(() => {
    const subscription = watch(value => {
      setCart({...cart, value})
    })
    
    return () => subscription.unsubscribe()
  }, [watch, setCart]);
  
  return (
    <StyledDelivery>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                <Controller 
                  name="isDropshipper"
                  control={control}
                  render={({ field}) => (
                    <FormControlLabel 
                      control={<Checkbox checked={isDropshipper} />} 
                      label="Send as dropshipper"
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid container className="form-wrapper">
                <Grid item xs={12} sm={7} md={7} lg={7} xl={7} className="input-wrapper">
                  <Controller 
                    name="email"
                    control={control}
                    render={({ field}) => (
                      <TextField 
                        {...field} 
                        name="email"
                        label="Email" 
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={5} md={5} lg={5} xl={5} className="input-wrapper">
                  <Controller 
                    name="name"
                    control={control}
                    render={({ field}) => (
                      <TextField 
                        {...field} 
                        name="name"
                        label="Dropshipper name" 
                        variant="outlined"
                        fullWidth
                        {...(!isDropshipper && { disabled: true, value: '' })}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={7} md={7} lg={7} xl={7} className="input-wrapper">
                  <Controller 
                    name="phone"
                    control={control}
                    render={({ field}) => (
                      <TextField 
                        {...field} 
                        name="phone"
                        label="Phone Number" 
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={5} md={5} lg={5} xl={5} className="input-wrapper">
                  <Controller 
                    name="dropshipperPhone"
                    control={control}
                    render={({ field}) => (
                      <TextField 
                        {...field} 
                        name="dropshipperPhone"
                        label="Dropshipper phone number" 
                        variant="outlined"
                        fullWidth
                        {...(!isDropshipper && { disabled: true, value: '' })}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={7} md={7} lg={7} xl={7} className="input-wrapper">
                  <Controller 
                    name="address"
                    control={control}
                    render={({ field}) => (
                      <TextField 
                        {...field} 
                        name="address"
                        label="Delivery Address"
                        placeholder="Delivery Address"
                        multiline
                        variant="outlined"
                        rows={4}
                        fullWidth
                      />
                    )}
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
                    <p><strong>{formatRupiah(cart.subTotal)}</strong></p>
                  </Grid>
                  {isDropshipper && (
                    <>
                      <Grid item xs={6} className="item">
                        <p>Dropshipping Fee</p>
                      </Grid>
                      <Grid item xs={6} className="item right">
                        <p><strong>5,900</strong></p>
                      </Grid>
                    </>
                  )}
                  
                  <Grid item xs={6} className="total">
                    <p>Total</p>
                  </Grid>
                  <Grid item xs={6} className="total right">
                    <p><strong>{formatRupiah(cart.subTotal)}</strong></p>
                  </Grid>

                  <Button variant="contained" fullWidth type="submit">
                    Continue to Payment
                  </Button>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </form>
    </StyledDelivery>
  )
}

export default Delivery