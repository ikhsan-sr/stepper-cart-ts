import Finish from './components/Finish'
import Payment from './components/Payment'
import Delivery from './components/Delivery'

const Content = (props) => {
  switch (props.activeStep) {
    case 1:
      return <Payment {...props}/>
    case 2:
      return <Finish {...props} />
    default:
      return <Delivery {...props} />
  }
}

export default Content