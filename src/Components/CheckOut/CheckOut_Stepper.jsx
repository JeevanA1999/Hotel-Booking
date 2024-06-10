import React, { useEffect, useRef, useState } from "react";

function CheckOut_Stepper({ stepConfig = [] }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const stepRef = useRef([]);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth/2 ,
      marginRight: stepRef.current[stepConfig.length - 1].offsetWidth/2,
    });
    console.log(stepRef.current[0].offsetWidth)
  }, [stepRef, stepConfig.length]);

  if (!stepConfig) {
    <></>;
  }
  const handleNxt = () => {
    setCurrentStep((prevState) => {
      if (prevState === stepConfig.length) {
        setIsCompleted(true);
        return prevState;
      } else {
        return prevState + 1;
      }
    });
  };
  const handleBack = () => {
    setCurrentStep((prevState) => {
      if (prevState === 1) {
        setIsCompleted(false);
        return prevState;
      } else {
        return prevState - 1;
      }
    });
  };
  const ActiveComponent = stepConfig[currentStep - 1].Component;

  const calculateProgressWidth = () => {
    return ((currentStep - 1) / (stepConfig.length - 1)) * 100;
  };
  return (
    <>
      <div className="stepper">
        {stepConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${
                currentStep > index + 1 || isCompleted ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isCompleted ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
              {/* <div><h1>{step.Component()}</h1></div> */}
            </div>
          );
        })}
        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: `${margins.marginLeft}px`,
              marginRight: `${margins.marginRight}px`,
          }}
            
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressWidth()}%` }}
          ></div>
        </div>
      </div>
      <ActiveComponent />

      {!isCompleted && (
        <>
          {currentStep === 1 ? null : (
            <button className="btnBack btn" onClick={handleBack}>
              Back
            </button>
          )}
          <button className="btnNxt btn" onClick={handleNxt}>
            {currentStep === stepConfig.length ? "Finish" : "Next"}
          </button>
        </>
      )}
    </>
  );
}

export default CheckOut_Stepper;
