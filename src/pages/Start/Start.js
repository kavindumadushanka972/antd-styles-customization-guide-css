import React from 'react'
import { CopyBlock, dracula, googlecode } from 'react-code-blocks'
import { useSelector } from "react-redux";

function Start() {

  const showLineNumbers = true
  const codeBlock = true
  const { dark } = useSelector((state) => state.dark);

  return (
    <div className='container'>
      <h2>Getting Started 👨🏻‍💻</h2>
      <a href="https://ant.design" target="_blank" rel="noreferrer">👉 Ant Design Page</a>
      <hr />

      <p className='small fw-bold'>All thanks to Ant Design developers and contributors for developing this fantastic library. I found it a little bit hard when customizing
        antd default css styles. So here I am trying to help all the developers like me out there who found it a bit hard.
        Please provide your suggestions on this. It will help to make this more helpful and reliable to use. Thanks! 😀
      </p>

      <h4 className='mt-4'>Installation</h4>
      <span className='fw-bold'>Using npm or yarn</span>

      <div className='code-block mt-3'>
        <CopyBlock
        text={`npm install antd`}
        language={'bash'}
        theme={ dark ? dracula : googlecode }
        {...{ showLineNumbers, codeBlock }}
        />
      </div>

      <div className='code-block mt-3'>
        <CopyBlock
        text={`yarn add antd`}
        language={'bash'}
        theme={dark ? dracula : googlecode }
        {...{ showLineNumbers, codeBlock }}
        />
      </div>

      <h4 className='mt-4'>Usage</h4>
      <div className='code-block mt-3'>
        <CopyBlock
        text={`import { DatePicker } from 'antd';

ReactDOM.render(<DatePicker />, mountNode);`}
        language={'jsx'}
        theme={dark ? dracula : googlecode }
        {...{ showLineNumbers, codeBlock }}
        />
      </div>

    </div>
  )
}

export default Start