import { Typography } from '@mui/material'
import React from 'react'
import './Profile.css'
import CustomTimeLine, { CustomTimelineSeparator } from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import CustomButton from '../Button/CustomButton';
import GetAppIcon from '@mui/icons-material/GetApp';



const CustomTimeLineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className='Timeline_content'>
      {link ?
        (<Typography className='timelineItem_text'><span>{title}:</span>{" "}<a href={link} target='_blank'>{text}</a></Typography>)
        : (<Typography className='timelineItem_text'><span>{title}:</span><span>{text}</span></Typography>)}
    </TimelineContent>
  </TimelineItem>
)


function Profile() {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={require('../../assets/images/pics0um1k_dhar005.png')} alt='' />
      </figure>
      <div className='profile_information'>
        <CustomTimeLine icon={<PersonOutlineIcon />} >
          <CustomTimeLineItem title='Name' text={resumeData.name} />
          <CustomTimeLineItem title='Title' text={resumeData.title} />
          <CustomTimeLineItem title='Email' text={resumeData.email} />

          {Object.keys(resumeData.social).map((key, index) => <CustomTimeLineItem title={key} text={resumeData.social[key].text} link={resumeData.social[key].link} />)}

        </CustomTimeLine>
        <br />
        <div className='btn_container'>
          <CustomButton 
            text={'Download Cv'} 
            icon={<GetAppIcon />}
            downloadfilelink={resumeData.resumelink}
            fileName={resumeData.resumefile}
            >
              
            </CustomButton>
        </div>

      </div>
    </div>
  )
}

export default Profile