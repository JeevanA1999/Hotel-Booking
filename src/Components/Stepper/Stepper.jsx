import React from 'react'

function Stepper() {
  return (
    <div className="step-container ">
      <div className="step">
        <div className="step-number">
          {/* Display number */}
          1
        </div>
        <div className="step-description">
          {/* Display description */}
          Description
        </div>
      </div>
      <div className='stepper-line'>{/* Additional Content */}</div>
      
    </div>
  )
}

export default Stepper
