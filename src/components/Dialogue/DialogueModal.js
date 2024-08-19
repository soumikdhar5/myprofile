import React from 'react'
import './Dialogue.css'
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { ConnectWithMe } from '../Contact/ConnectWithMe'



export const DialogueModal = ({dialogueDataTitle = '',dialgueLinks, openMod, onClose}) => {
    return (
        <>
            <Dialog
                open={openMod}
                onClose={onClose}
                maxWidth={'lg'}
                className='Dialogue' > 
                {/* 'projectDialog' */}
                <DialogTitle onClose={onClose}>
                    {dialogueDataTitle}
                </DialogTitle>
                <DialogContent>
                    <ConnectWithMe />
                </DialogContent>
                <DialogActions className='Dialogue_actions'>
                {/* projectDialog?.links */}
                    {dialgueLinks?.map((link, index) => (
                        <a href={link.link} key={index} target="_blank" rel="noopener noreferrer"  className='Dialogue_icon'>{link.icon}</a>
                    ))}
                </DialogActions>
            </Dialog>
        </>
    )
}
