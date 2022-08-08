import React from 'react'
import { CopyBlock, dracula, googlecode } from 'react-code-blocks'
import { useSelector } from "react-redux";

function Start() {

  const showLineNumbers = true
  const codeBlock = true
  const { dark } = useSelector((state) => state.dark);

  return (
    <div className='container mb-5'>
      <h2>Getting Started 👨🏻‍💻</h2>
      <a href="https://ant.design" target="_blank" rel="noreferrer">👉 Ant Design Page</a>
      <hr />

      <p className='small fw-bold'>The creators and collaborators of Ant Design deserve all the credit for creating this 
      wonderful library. When I tried to customize the antd default css styles, I had a little trouble. So, 
      here I am attempting to assist all the other developers who, like me, found it a little challenging. 
      Feel free to offer your recommendations on this. It will contribute to making this more beneficial and trustworthy to 
      utilize. Thank you! 😀
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