import Button from "../atoms/button";

function Stepper() {
    const currentStep = 1
    const totalSteps = 2

    return (
        <div className="stepper">
            <p className="stepper__steps">{currentStep} of {totalSteps}</p>
            <Button type={"tertiary"} size={"s"} name={"Next step"} />
        </div>
    )
}

export default Stepper