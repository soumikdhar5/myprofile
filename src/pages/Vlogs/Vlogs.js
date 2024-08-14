import React, { useState } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@mui/material'
import './Vlogs.css'
import resumeData from '../../utils/resumeData'

function Vlogs() {


  const [tabValue, settabValue] = useState('All')
  const [vlogDialog, setvlogDialog] = useState(false)

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
          {[...new Set(resumeData.vlogs.map(item => item.tag))].map(tag => (
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
          {resumeData.vlogs.map((vlog) => (
            <>
              {tabValue === vlog.tag || tabValue === 'All' ? (
                <Grid item xs={12} sm={6} md={4} >
                  <Grow in timeout={1000}>
                    <Card className='customCard' onClick={() => setvlogDialog(vlog)}>
                      <CardActionArea>
                        <CardMedia className='customCard_image' component = {vlog.component} src={vlog.src} height={vlog.height} frameBorder='0' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={vlog.title} />
                        <CardContent>
                          <Typography variant={'body2'} className='customCard_title'>{vlog.title}</Typography>
                          <Typography variant='caption' className='customCard_caption'>{vlog.caption}</Typography>
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
        open={vlogDialog} 
        onClose={() => setvlogDialog(false)} 
        // maxWidth={'lg'}
        PaperProps={{
            style: {
              height: '600px',  // Set your desired height here
              maxHeight: '100vh',  // Optional: Set a max-height if needed
              width:'800px'
            },}}
        >

        <DialogTitle onClose={() => setvlogDialog(false)}>
          {vlogDialog.title}
        </DialogTitle>
        <CardMedia 
            className='customCard_image' 
            component = {vlogDialog.component} 
            src={vlogDialog.src} 
            height={vlogDialog.height} 
            width={vlogDialog.width} 
            frameBorder='0' 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            title={vlogDialog.tag} />

        <DialogContent 
        className='DialogContentclass' 
        >
          <Typography className='projectDialog_description'>{vlogDialog.description}</Typography>
          
        </DialogContent>
        <DialogActions className='projectDialog_actions'>
          {vlogDialog?.links?.map(link => (
            <a href={link.link} target='_blank' className='projectDialog_icon'>{link.icon}</a>
          ))}
        </DialogActions>
      </Dialog>

    </Grid>
  )
}

export default Vlogs