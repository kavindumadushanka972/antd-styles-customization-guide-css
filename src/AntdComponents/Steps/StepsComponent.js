import React, { useState } from 'react'
import './StepsComponent.css'
import { Steps, Button } from 'antd'

function StepsComponent() {

  const { Step } = Steps;
  const [stepNumber, setStepNumber] = useState(0)

  return (
    <div>
      <Steps current={stepNumber}>
        <Step title="Step 01" description="Step 01 Description" />
        <Step title="Step 02" description="Step 02 Description" />
        <Step title="Step 03" description="Step 03 Description" />
        <Step title="Step 04" description="Step 04 Description" />
      </Steps>

      <div className='text-center mt-5'>
        <Button type="primary" onClick={() => setStepNumber(stepNumber-1)} style={{marginRight: '5px'}}>Back</Button>
        <Button type="primary" onClick={() => setStepNumber(stepNumber+1)} style={{marginLeft: '5px'}}>Next</Button>
      </div>
      
    </div>
  )
}

export default StepsComponent