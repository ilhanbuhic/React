import { FlexContainer } from './FlexContainer'
import { Button } from './Button'

export const ButtonContainer = () => {
  return <FlexContainer className='mainFlexContainer'>
    <FlexContainer className= 'button-ui'>
      <Button className = 'mainButton' btnText='dsas' />
    </FlexContainer>
    <FlexContainer className= 'button-settings'></FlexContainer>
  </FlexContainer>
}
