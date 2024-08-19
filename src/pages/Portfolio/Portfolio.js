import React, { useState } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@mui/material'
import './Portfolio.css'
import resumeData from '../../utils/resumeData'

function Portfolio() {


  const [tabValue, settabValue] = useState('All')
  const [projectDialog, setprojectDialog] = useState(false)

  //   const ProjectDialog =()=>(
  // )

  return (
    <Grid container spacing={1} className='section pb_45 pt_55' >
      {/* Title */}
      <Grid item className='section_title mb_20'>
        <span></span>
        <h6 className='section_title_text'>Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs value={tabValue}
          indicatorColor='white'
          className='customTabs'
          onChange={(event, newValue) => settabValue(newValue)}>
          <Tab 
            label='All' 
            value='All' 
            className={tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'}>

            </Tab>
          {[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
            <Tab 
              label={tag} 
              value={tag} 
              className={tabValue === tag  ? 'customTabs_item active' : 'customTabs_item'} />
          ))}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === 'All' ? (
                <Grid item xs={12} sm={6} md={4} >
                  <Grow in timeout={1000}>
                    <Card className='customCard' onClick={() => setprojectDialog(project)}>
                      <CardActionArea>
                        <CardMedia className='customCard_image' image={project.image} title={project.title} />
                        <CardContent>
                          <Typography variant={'body2'} className='customCard_title'>{project.title}</Typography>
                          <Typography variant='caption' className='customCard_caption'>{project.caption}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>) : null}
            </>

          ))}
        </Grid>
      </Grid>


      <Dialog  
        open={projectDialog} 
        onClose={() => setprojectDialog(false)} 
        maxWidth={'lg'}
        className='projectDialog' >

        <DialogTitle onClose={() => setprojectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src={projectDialog.image} alt='' className='projectDialog_image'></img>
        <DialogContent>
          <Typography className='projectDialog_description'>{projectDialog.description}</Typography>
          
        </DialogContent>
        <DialogActions className='projectDialog_actions'>
          {projectDialog?.links?.map(link => (
            <a href={link.link} target='_blank' rel="noopener noreferrer" className='projectDialog_icon'>{link.icon}</a>
          ))}
        </DialogActions>
      </Dialog>

    </Grid>
  )
}

export default Portfolio