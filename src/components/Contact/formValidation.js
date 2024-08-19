// src/utils/formValidation.js
export const validateForm = ({ uname, uemail, umessage }) => {
    let isValid = true;
    let errors = {
      uname: '',
      uemail: '',
      umessage: ''
    };
  
    if (!uname) {
      errors.uname = 'Name is required';
      isValid = false;
    }
  
    if (!uemail) {
      errors.uemail = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(uemail)) {
      errors.uemail = 'Email is invalid';
      isValid = false;
    }
  
    if (!umessage) {
      errors.umessage = 'Message is required';
      isValid = false;
    }
  
    return { isValid, errors };
  };
  