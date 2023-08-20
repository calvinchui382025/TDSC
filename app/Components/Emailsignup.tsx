"use client"

import styled from "@emotion/styled";
import React from 'react'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import emailjs from "@emailjs/browser";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useRef } from "react";
import { useState } from 'react';
import { Button, TextField } from "@mui/material";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': 'rgba(51, 51, 51, 0.85)',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&:before, &:after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

const EmailSignupContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // border: '2px solid red',
  width: 'clamp(200px, 100%, 700px)',
  paddingBottom: '4em',
})

const StyledFormControl = styled('form')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1em',
})

const Customtextfield = styled(TextField)({
  width: '90%',
  backgroundColor: 'gainsboro',
})

const StyledButton = styled(Button)({
  width: '90%',
  height: '3.5em',
  borderBottom: '2px solid rgba(51, 51, 51, 0.85)',
  borderRadius: 0,
  backgroundColor: 'gainsboro',
  color: 'rgba(51, 51, 51, 0.85)',
  '&:hover': {
    borderBottom: '2px solid #B2BAC2',
  },
  '&:active': {
    borderBottom: '2px solid rgba(51, 51, 51, 0.85)',
  }
})

const Contacttitle = styled('h1')({
  fontSize: '3em',
  margin: 0,
  color: 'gainsboro',
  fontFamily: 'sans-serif',
  '@media (max-width: 600px)': {
    fontSize: '2em',
  },
  '@media (max-width: 300px)': {
    fontSize: '1.5em',
  },
  textAlign: 'center',
  fontWeight: 700,
  marginBottom: '1em',
})

export const Emailsignup = () => {
  const outerTheme = useTheme();
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const isFormValid = email;

  const handleFirstNameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      if (firstname === "") {
        setFirstname(null);
      }
      if (lastname === "") {
        setLastname(null);
      }
      const newUser = {
        email: email,
        first_name: firstname,
        last_name: lastname,
        isEmailSubscribed: 1
      };
      //logic for endpoint
      try {
        const response = await fetch('https://ec2-3-17-167-220.us-east-2.compute.amazonaws.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });
  
        const data = await response.json();
        
        if (data.success) {
          toast.success('You have successfully signed up for email alerts!');
          console.log(newUser);
          //ADD LOGIC TO SEND EMAIL TO NEWLY CREATED USER


        } else {
          toast.error('Failed to sign up for email alerts.');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred while signing up.');
      }




      toast.success('You have successfully signed up for email alerts!');
      console.log(newUser);
    } else {
      toast.error('Please enter a valid email address.');
    }
    console.log('email sign up');
  };
  

  return (
    <EmailSignupContainer>
      {/* <StyledFormControl ref={form}> */}
      <Contacttitle>Sign up for our email alerts!</Contacttitle>
      <StyledFormControl>
        <ThemeProvider theme={customTheme(outerTheme)}>
            <Customtextfield
            variant="filled"
            id="mui-theme-provider-filled-input"
            label="Email (required)"
            value={email}
            onChange={handleEmailChange}
            />
            <Customtextfield
            variant="filled"
            id="mui-theme-provider-filled-input"
            label="First Name (optional)"
            value={firstname}
            onChange={handleFirstNameChange}
            />
            <Customtextfield
            variant="filled"
            id="mui-theme-provider-filled-input"
            label="Last Name (optional)"
            value={lastname}
            onChange={handleLastNameChange}
            />
            <StyledButton onClick={handleEmailSignUp} disabled={!isFormValid}>Send</StyledButton>
        </ThemeProvider>
      </StyledFormControl>
    </EmailSignupContainer>
  )
}