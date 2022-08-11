import React from 'react'
import CountdownComponent from '../../AntdComponents/Countdown/CountdownComponent'
import { CopyBlock, dracula, googlecode } from 'react-code-blocks'
import { useSelector } from "react-redux";

function CountdownPage() {

    const showLineNumbers = true
    const codeBlock = true
    const { dark } = useSelector((state) => state.dark);

    return (
        <div className='container mb-5'>
            <h2>Card Styles Customization 🪪</h2>
            <a href="https://ant.design/components/card/" target="_blank" rel="noreferrer">👉 Ant Design Card</a>
            <hr />

            <div className='mt-4'>
                <CountdownComponent />
            </div>

            <div className='mt-5'>
                <h4>JavaScript Code</h4>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`import React from 'react'
import Countdown from 'react-countdown'
import './CountDown.css'

function CountdownComponent() {
    return (
        <div>
            <Countdown date={Date.now() + 100000000} 
            renderer={props => (
                <div>
                    <span className='cd-digit-cell'>
                    {props.formatted.days}
                    </span>
                    :
                    <span className='cd-digit-cell'>
                    {props.formatted.hours}
                    </span>
                    :
                    <span className='cd-digit-cell'>
                    {props.formatted.minutes}
                    </span>
                    :
                    <span className='cd-digit-cell'>
                    {props.formatted.seconds}
                    </span>
                </div>
                )}
                zeroPadTime={2}
            />
        </div>
    )
}

export default CountdownComponent`}
                    language={'jsx'}
                    theme={dark ? dracula : googlecode }
                    {...{ showLineNumbers, codeBlock }}
                    />
                </div>
            </div>

            <div className='mt-5'>
                <h4>CSS Styles</h4>
                <span className='small fw-bold'>CountDown.css</span>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`.cd-digit-cell {
    font-size: 20px;
    font-weight: 900;
    background-color: #00b0f2;
    padding: 8px;
    margin: 0 3px;
    border-radius: 3px;
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

export default CountdownPage