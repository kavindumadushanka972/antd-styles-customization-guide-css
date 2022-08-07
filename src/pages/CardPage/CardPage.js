import React from 'react'
import CardComponent from '../../AntdComponents/Card/CardComponent'
import { CopyBlock, dracula, googlecode } from 'react-code-blocks'
import { useSelector } from "react-redux";

function CardPage() {

    const showLineNumbers = true
    const codeBlock = true
    const { dark } = useSelector((state) => state.dark);

    return (
        <div className='container mb-5'>

            <h2>Card Styles Customization 🪪</h2>
            <a href="https://ant.design/components/card/" target="_blank" rel="noreferrer">👉 Ant Design Card</a>
            <hr />
            
            <div className='mt-4'>
                <CardComponent />
            </div>

            <div className='mt-5'>
                <h4>JavaScript Code</h4>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`import React from 'react'
import { Card } from 'antd'
import './CardComponent.css'

function CardComponent() {
    return (
        <Card title="Card Title">
            <p>Card content</p> 
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
}

export default CardComponent`}
                    language={'jsx'}
                    theme={dark ? dracula : googlecode }
                    {...{ showLineNumbers, codeBlock }}
                    />
                </div>
            </div>

            <div className='mt-5'>
                <h4>CSS Styles</h4>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`/* add styles to whole card */
.ant-card {
    border: none !important;
}

/* card header styles */
.ant-card-head {
    background: #1990ff !important;
    border-bottom: 2px solid grey !important;
}

/* card body styles */
.ant-card-body {
    color: white;
    background: #001429 !important;
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

export default CardPage