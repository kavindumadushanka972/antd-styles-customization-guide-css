import React from 'react'
import StepsComponent from '../../AntdComponents/Steps/StepsComponent'
import { CopyBlock, dracula, googlecode } from 'react-code-blocks'
import { useSelector } from "react-redux";

function StepsPage() {

    const showLineNumbers = true
    const codeBlock = true
    const { dark } = useSelector((state) => state.dark);

    return (
        <div className='container mb-5'>
            <h2>Steps Styles Customization 📑</h2>
            <a href="https://ant.design/components/steps/" target="_blank" rel="noreferrer">👉 Ant Design Steps</a>
            <hr />

            <div className='mt-4'>
               <StepsComponent /> 
            </div>

            <div className='mt-5'>
                <h4>JavaScript Code</h4>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`import React, { useState } from 'react'
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

export default StepsComponent`}
                    language={'jsx'}
                    theme={dark ? dracula : googlecode }
                    {...{ showLineNumbers, codeBlock }}
                    />
                </div>
            </div>

            <div className='mt-5'>
                <h4>CSS Styles</h4>
                <span className='small fw-bold'>StepsComponent.css</span>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`/* Title color in process */
.ant-steps-item-process .ant-steps-item-title {
    color: #1990fe !important;
}

/* In process description color */
.ant-steps-item-process .ant-steps-item-description {
    color: #1990fe !important;
}

/* Title color finished */
.ant-steps-item-finish .ant-steps-item-title {
    color: #393c70 !important;
}

/* Description color finished */
.ant-steps-item-finish .ant-steps-item-description {
    color: #393c70 !important;
}

/* Title color waiting */
.ant-steps-item-wait .ant-steps-item-title {
    color: grey !important;
}

/* Discription color waiting */
.ant-steps-item-wait .ant-steps-item-description {
    color: grey !important;
}

/* Finished circle background color */
.ant-steps-item-finish .ant-steps-item-icon {
    background: #393c70 !important;
}


/* Connector color change */
.ant-steps-item-title:after {
    background-color: #1990fe !important;
}

/* In process circle background color */
.ant-steps-item-process .ant-steps-item-icon { 
    background: #1990fe !important;
}`}
                    language={'css'}
                    theme={dark ? dracula : googlecode }
                    {...{ showLineNumbers, codeBlock }}
                    />
                </div>
            </div>
        </div>
    )
}

export default StepsPage