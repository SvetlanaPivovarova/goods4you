import Button from "../atoms/button";

type StepperProps = {
    currentStep: number,
    handleStep: () => void,
    setCurrentStep: (ard: number) => void,
    isDisabledButton: boolean
}

function Stepper(props: StepperProps) {
    const {currentStep, setCurrentStep, handleStep, isDisabledButton} = props

    const totalSteps = 2

    function handleStepForward() {
        handleStep();
        if (currentStep === 1) {
            setCurrentStep(2)
        } else setCurrentStep(1)
    }

    const buttonName = currentStep === 1 ? 'Next step' : 'Change selection'

    return (
        <div className="stepper">
            <p className="stepper__steps">{currentStep} of {totalSteps}</p>
            <Button
                color={"tertiary"}
                size={"s"}
                name={buttonName}
                isVisible={true}
                onClick={handleStepForward}
                disabled={isDisabledButton}/>
        </div>
    )
}

export default Stepper