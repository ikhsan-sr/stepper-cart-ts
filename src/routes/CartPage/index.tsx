import Card from '@/src/components/Card'
import Steps from '@/src/components/Steps'
import Content from './Content'
import useLocalStorage from '@/src/hooks/useLocalStorage';
import useWindowSize from '@/src/hooks/useWindowSize';

import { INITIAL_CART, STEPS } from './const';
import { StyledCartPage } from './styles'

const CartPage = () => {
  const [cart, setCart] = useLocalStorage("cart", INITIAL_CART);
  const size = useWindowSize();
  const activeStep = cart?.activeStep || 0;

  const handleBack = () => {
    if (cart.activeStep > 0) {
      setCart({...cart, activeStep: cart.activeStep - 1 })
    }
  };

  const handleNext = () => {
    if (cart.activeStep < STEPS.length) {
      setCart({...cart, activeStep: cart.activeStep + 1 })
    }
  };

  if (size.width < 1000) {
    return <p>Responsive UI is under development, please open with desktop screen</p>
  }

  return (
    <StyledCartPage>
      <Card>
        <Steps steps={STEPS} activeStep={activeStep} />
          <div className="wrapper">
            <Content 
              cart={cart}
              setCart={setCart}
              handleBack={handleBack}
              handleNext={handleNext}
              activeStep={activeStep}
            />
          </div>
      </Card>
    </StyledCartPage>
  )
}

export default CartPage
