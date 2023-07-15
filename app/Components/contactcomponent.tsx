"use client"

import React from "react";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { Button, FormControl, TextField, keyframes } from '@mui/material';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

const customTheme = (outerTheme: Theme) =>
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

const ContactRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 30,
  backgroundColor: 'transparent',
  width: 'clamp(30%, 70%, 900px)',
  borderRadius: '10px',
  gap: '5px',
})

const Namefield = styled(TextField)({
  width: '90%',
  backgroundColor: 'gainsboro',
  opacity: '0.8',
})

const Emailfield = styled(TextField)({
  width: '90%',
  backgroundColor: 'gainsboro',
  opacity: '0.8',
})

const Contactbutton = styled('button')({
  width: '90%',
  height: '3rem',
  opacity: '0.8',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  border: '1px solid darkgrey',
  boxShadow: 'none',
  backgroundColor: 'gainsboro',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontColor: 'rgb(117,117,117)',
  fontFamily: 'sans-serif',
  ':hover': {
    border: '1px solid black',
    backgroundColor: 'rgba(51, 51, 51, 0.85)',
    color: 'rgb(140,152,163)',
  },
  ':active': {
    backgroundColor: 'rgba(51, 51, 51, 0.85)',
    color: 'rgb(140,152,163)',
  },
})

export const ContactComponent = () => {
  const outerTheme = useTheme();
  const [numRows, setNumRows] = React.useState(7); // Initial number of rows

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newNumRows = screenWidth < 600 ? 4 : 7;
      setNumRows(newNumRows);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial number of rows based on screen width

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <ContactRoot>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <Namefield variant="filled" id="mui-theme-provider-filled-input" label="Name" style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
        <Emailfield variant="filled" id="mui-theme-provider-filled-input" label="Email"/>
        <TextField
          variant="filled"
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={numRows}
          style={{width: '90%', backgroundColor: 'gainsboro', opacity: '0.8',}}
        />
        <Button
          style={{
            width: '90%',
            color: 'gainsboro',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            backgroundColor: 'grey',
            border: '2px solid',
            backgroundImage: 'linear-gradient(to right, rgb(37, 83, 185), rgb(52, 124, 245))'
          }}
          >
            Send <SendIcon style={{marginLeft: 5, fontSize: 20}}/>
          </Button>
      </ThemeProvider>
    </ContactRoot>
  )
};