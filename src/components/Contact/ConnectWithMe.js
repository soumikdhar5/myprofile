import React, { useState } from 'react';
import { Grid, TextField, CircularProgress } from '@mui/material';
import CustomButton from '../../components/Button/CustomButton';
import SuccessTick from '../Messagestatus/SuccessTick';
import '../../App.css'

export const ConnectWithMe = () => {
  const [uname, setuname] = useState('');
  const [uemail, setuemail] = useState('');
  const [umessage, setumessage] = useState('');
  const [success, setsuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setsuccess(false);

    try {
      console.log('starting to send');
      const response = await fetch('http://localhost:3001/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uname, uemail, umessage }),
      });

      const result = await response.json();
      console.log('getting response', response.status);

      if (response.status === 200 && result.message === 'Email sent successfully') {
        console.log('Email sent successfully');
        setsuccess(true);
        setuname('');
        setuemail('');
        setumessage('');
      } else {
        console.error('Failed to send email', result);
      }
    } catch (error) {
      console.error('Error sending email', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = () => {
    setsuccess(false);
  };

  return (
    <div>
      <Grid container>
        <form onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name='name'
                  value={uname}
                  onChange={(e) => setuname(e.target.value)}
                  onFocus={handleFocus}
                  label='Name'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name='email'
                  value={uemail}
                  onChange={(e) => setuemail(e.target.value)}
                  onFocus={handleFocus}
                  label='E-mail'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name='message'
                  value={umessage}
                  onChange={(e) => setumessage(e.target.value)}
                  label='Message'
                  multiline
                  onFocus={handleFocus}
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomButton
                  type='submit'
                  text={success ? 'Sent' : 'Send'}
                  icon={loading ? <CircularProgress size={24} /> : (success ? <SuccessTick /> : null)}
                />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};
