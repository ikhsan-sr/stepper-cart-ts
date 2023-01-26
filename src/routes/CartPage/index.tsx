import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

import Card from '@/src/components/Card'
import Steps from '@/src/components/Steps'
import Content from './Content'

import { StyledCartPage } from './styles'

const STEPS = ['Delivery', 'Payment', 'Finish'];

const CartPage = () => {
  const { push, query } = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      push(`?step=${activeStep - 1}`);
    }
  };

  const handleNext = () => {
    if (activeStep < STEPS.length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      push(`?step=${activeStep + 1}`);
    }
  };

  return (
    <StyledCartPage>
      <Card>
        <Steps steps={STEPS} activeStep={Number(query?.step) || activeStep} />
          <div className="wrapper">
            <Content 
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </div>
      </Card>
    </StyledCartPage>
  )
}

export default CartPage
