import React, { useState } from 'react'
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

export default SwitchComponent