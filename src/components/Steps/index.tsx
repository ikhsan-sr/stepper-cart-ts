import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { StyledStepper } from './styles'

const Steps = ({ steps, activeStep }) => {
  return (
    <StyledStepper>
      <Box sx={{ width: '100%' }}>
         <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
      </Stepper>
      </Box>
    </StyledStepper>
  )
}

export default Steps