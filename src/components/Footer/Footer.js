import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'
import resumeData from '../../utils/resumeData'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'>{resumeData.name}</Typography>
      </div>
      <div className='footer_right'>
        <Typography className='footer_copyright'>
          Designed and Developed by <a href='/' target='_blank'>Soumik Dhar</a>
          <br />
          Clone idea from <a href='https://www.themeforest.net/user/travonline' rel="noopener noreferrer" target='_blank'>
            Travonline
          </a>
        </Typography>
      </div>
    </div>
  )
}

export default Footer