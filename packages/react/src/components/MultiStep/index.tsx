import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export const MultiStep = ({ size, currentStep = 1 }: MultiStepProps) => {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, indice) => indice + 1).map(
          (step, index) => (
            <Step key={`step-${index}`} active={currentStep >= step} />
          ),
        )}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
