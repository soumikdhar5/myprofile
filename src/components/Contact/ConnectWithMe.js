import React, { useReducer } from 'react';
import { Grid, TextField, CircularProgress } from '@mui/material';
import CustomButton from '../../components/Button/CustomButton';
import SuccessTick from '../Messagestatus/SuccessTick';
import '../../App.css';
import CrossFail from '../Messagestatus/CrossFail';
import { validateForm } from './formValidation';
import { connectService } from '../../services/apiservice';

// Define the initial state and reducer function
const initialState = {
  uname: '',
  uemail: '',
  umessage: '',
  errors: {
    uname: '',
    uemail: '',
    umessage: ''
  },
  success: false,
  loading: false,
  initializer: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    case 'SET_STATUS':
      return { ...state, ...action.status };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

export const ConnectWithMe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  const handleFocus = () => {
    dispatch({ type: 'SET_STATUS', status: { success: false, initializer: false } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = validateForm(state);
    if (!isValid) {
      dispatch({ type: 'SET_ERRORS', errors });
      return;
    }

    dispatch({ type: 'SET_STATUS', status: { loading: true, success: false } });

    try {
      const queryParams = new URLSearchParams({
        uname: state.uname,
        uemail: state.uemail,
        umessage: state.umessage
      }).toString();

      const response = await connectService(queryParams)
      const result = await response.json();

      if (response.ok && result.message === 'Email sent successfully') {
        dispatch({ type: 'RESET_FORM' });
        dispatch({ type: 'SET_STATUS', status: { success: true, loading: false } });
      } else {
        dispatch({
          type: 'SET_ERRORS',
          errors: { umessage: result.message || response.status }
        });
        dispatch({ type: 'SET_STATUS', status: { success: false, initializer: true, loading: false } });
      }
    } catch (error) {
      dispatch({
        type: 'SET_ERRORS',
        errors: { umessage: 'Error fetching data' }
      });
      dispatch({ type: 'SET_STATUS', status: { success: false, initializer: true, loading: false } });
    }
  };

  return (
    <div>
      <Grid container>
        <form name='submit_form' onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name='uname'
                  label='Name'
                  value={state.uname}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  error={Boolean(state.errors.uname)}
                  helperText={state.errors.uname}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <span></span>
                <TextField
                  fullWidth
                  name='uemail'
                  label='Email'
                  value={state.uemail}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  error={Boolean(state.errors.uemail)}
                  helperText={state.errors.uemail}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name='umessage'
                  value={state.umessage}
                  onChange={handleInputChange}
                  label='Message'
                  multiline
                  onFocus={handleFocus}
                  rows={4}
                  error={Boolean(state.errors.umessage)}
                  helperText={state.errors.umessage}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <CustomButton
                  type='submit'
                  text={state.success ? 'Sent' : state.initializer ? 'Error' : state.loading ? 'sending..' : 'Send'}
                  icon={state.loading ? <CircularProgress size={24} /> : (state.success ? <SuccessTick /> : state.initializer ? <CrossFail /> : '')}
                />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};
