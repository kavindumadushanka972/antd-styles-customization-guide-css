import React from 'react'
import { CopyBlock, dracula, googlecode } from 'react-code-blocks'
import { useSelector } from "react-redux";
import SwitchComponent from '../../AntdComponents/Switch/SwitchComponent';

function SwitchPage() {

    const showLineNumbers = true
    const codeBlock = true
    const { dark } = useSelector((state) => state.dark);

    return (
        <div className='container mb-5'>
            <h2>Switch Styles Customization 🪪</h2>
            <a href="https://ant.design/components/switch/" target="_blank" rel="noreferrer">👉 Ant Design Switch</a>
            <hr />

            <div className='mt-4'>
                <SwitchComponent />
            </div>

            <div className='mt-5'>
                <h4>JavaScript Code</h4>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`import React, { useState } from 'react'
import { Switch } from 'antd'
import './SwitchComponent.css'

function SwitchComponent() {

    const [switchColor, setSwitchColor] = useState('false-colour') // default false

    const onChange = (e) => {
        if(e === true){
            setSwitchColor('true-colour') 
        } else {
            setSwitchColor('false-colour') 
        }
    }

    return (
        <div>
            <Switch onChange={onChange} className={switchColor} />
        </div>
    )
}

export default SwitchComponent`}
                    language={'jsx'}
                    theme={dark ? dracula : googlecode }
                    {...{ showLineNumbers, codeBlock }}
                    />
                </div>
            </div>

            <div className='mt-5'>
                <h4>CSS Styles</h4>
                <span className='small fw-bold'>SwitchComponent.css</span>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`.true-colour {
    background: #4287f5 !important;
}

.false-colour {
    background: #7199d9 !important;
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

export default SwitchPage