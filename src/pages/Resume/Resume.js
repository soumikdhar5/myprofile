import React from 'react'
import './Resume.css'
import { Grid, Icon, Paper, Typography } from '@mui/material'
import resumeData from '../../utils/resumeData'
import CustomTimeLine, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import WorkIcon from '@mui/icons-material/Work';
import { TimelineContent, TimelineDot, TimelineItem } from '@mui/lab'
import SchoolIcon from '@mui/icons-material/School';
import { ConnectWithMe } from '../../components/Contact/ConnectWithMe'


function Resume() {


  return (
    <>
      {/* About Me */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <span></span>
          <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
        </Grid>
      </Grid>
      {/* Education Experiances */}
      <Grid container className='section'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* Experiances */}
            <Grid item sm={12} md={6} >
              <CustomTimeLine title='Work Experiance' icon={<WorkIcon />}>
                {resumeData.experiances.map((experiance, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeparator />
                    <TimelineContent  className='timeline_content'>
                      <Typography className='timeline_title'>{experiance.title}</Typography>
                      <Typography variant='caption' className='timeline_date'>{experiance.date}</Typography>
                      <Typography variant='body2' className='timeline_description'>{experiance.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>

            {/* Education */}
            <Grid item sm={12} md={6} >
              <CustomTimeLine title='Education' icon={<SchoolIcon />}>
                {resumeData.education.map((education,index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{education.title}</Typography>
                      <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                      <Typography variant='body2' className='timeline_description'>{education.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Proficiencies</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <div className='service'>
                  <Icon className='service_icon' style={{overflow:'visible'}}>{service.icon}</Icon>
                  <Typography className='service_title' variant='h6'>{service.title}</Typography>
                  <Typography className='service_description' variant='body2'>{service.description}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid container className='section greybg pb_45 p_50'>
        <Grid item xs={12}>
          <Grid container justify='space-around' spacing={3}>
            {resumeData.skill.map((skill,index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={0} className='skill'>
                  <Typography variant='h6' className='skills_title'>
                    {skill.title}
                  </Typography>
                  {skill.description.map((element,index) => (
                    <Typography variant='body2' key={index} className='skill_description'>
                      <TimelineDot variant={'outlined'} className='timeline_dot' />{element}
                    </Typography>))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Contacts */}
      <Grid container spacing={6} className='section pt_45 pb_45'>

        {/* Contact form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
          <Grid item className='section_title mb_30'>
          <span></span>
            <h6 className='section_title_text'>Contact Form</h6>
          </Grid>

            <ConnectWithMe />
          </Grid>
        </Grid>
        {/* Contact Information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span></span>
              <h6 className='section_title_text'>Contact Information</h6>
            </Grid>
            <Grid item xs={12} >
              <Grid container >
                {/* <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Address: </span> {resumeData.address}
                  </Typography>
                </Grid> */}
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Phone: </span> {resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>E-mail: </span> {resumeData.email}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Grid container className='contactInfo_socialsContainer'>
                    {Object.keys(resumeData.social).map((key,index) => (
                      <Grid item className='contactInfo_social' key={index}>
                        <a href={resumeData.social[key].link} target="_blank" rel="noopener noreferrer">{resumeData.social[key].icon}</a>
                      </Grid>))}
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </>
  )
}

export default Resume