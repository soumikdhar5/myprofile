import React from 'react'
import { Button } from '@mui/material'
import './Button.css'

const CustomButton = ({text = 'Download',icon ,downloadfilelink, fileName}) => {
  return (
    <Button 
      className='custom_btn' 
      endIcon={icon?(<div className='btn_icon_container'>{icon}</div>):null}
      href={downloadfilelink}
      download={fileName}
      >
        <span className='btn_text'>{text}</span></Button>
  )
}

export default CustomButton