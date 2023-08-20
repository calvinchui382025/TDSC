"use client"

import React, { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button, 
  // FormControl, 
  TextField, 
  // keyframes 
} from '@mui/material';
// import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";
import { CustomParallax, ParallaxContainer, ParallaxTitle } from "./Separator";
// const ContactBannerJoin = 'https://flintriverindoorshootingrange.com/wp-content/uploads/2021/05/three-1-a.jpg'
// const ContactBannerJoin = 'https://github.com/snyperifle/TDSC/blob/luke/public/Images/croppedcontact.jpg?raw=true'
const ContactBannerJoin = 'https://github.com/snyperifle/TDSC/blob/luke/public/Images/croppedteaching.jpg?raw=true'

//======================================================

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
  width: 'clamp(200px, 100%, 700px)',
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

const Contactbutton = styled(Button)({
  width: '90%',
  height: '3.5em',
  borderBottom: '2px solid rgba(51, 51, 51, 0.85)',
  borderRadius: 0,
  filter: 'opacity(75%)',
  backgroundColor: 'gainsboro',
  color: 'rgba(51, 51, 51, 0.85)',
  '&:hover': {
    borderBottom: '2px solid #B2BAC2',
    filter: 'opacity(65%)',
    backgroundColor: 'gainsboro',
  },
  '&:active': {
    borderBottom: '2px solid rgba(51, 51, 51, 0.85)',
  }
})

export const Contact = () => {
  const outerTheme = useTheme();
  // const service = process.env.REACT_APP_SERVICE_ID;
  const service = 'service_5mukv29'
  // const template = process.env.REACT_APP_TEMPLATE_ID;
  const template = 'template_mw4n6lp'
  // const user = process.env.REACT_APP_USER_ID;
  const user = '9MiD9Ax_KWYMrjDtH'
  const form = useRef();
  let lastExecutionTime = 0;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
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

  const isFormValid = name && email && message;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const currentTime = Date.now();
    const timeElapsed = currentTime - lastExecutionTime;
    if (timeElapsed < 30000) {
      const remainingTime = Math.ceil((30000 - timeElapsed) / 1000);
      toast.error(`Please wait ${remainingTime} seconds before sending another email.`, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(service || "", template || "", form.current, user)
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            toast.success("Message Sent Successfully!", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          },
          (error) => {
            console.log(error.text);
            toast.error("Error!", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        );
      lastExecutionTime = currentTime;
      } else {
        console.log("Form is not defined");
        toast.error("Error!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };

  return (
    <CustomParallax
    style={{
      height: '85vh',
    }}
    bgImage={ContactBannerJoin}
    strength={950}
    >
      <ParallaxContainer
      style={{
        height: '85vh',
      }}
      >
        <ParallaxTitle>Contact us!</ParallaxTitle>
        {/*  */}
        <ContactRoot ref={form}>
          <ThemeProvider theme={customTheme(outerTheme)}>
            <Namefield
              variant="filled"
              id="mui-theme-provider-filled-input"
              label="Name"
              value={name}
              onChange={handleNameChange}
            />
            <Emailfield
              variant="filled"
              id="mui-theme-provider-filled-input"
              label="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              variant="filled"
              id="filled-multiline-static"
              label="Message"
              multiline
              rows={numRows}
              value={message}
              onChange={handleMessageChange}
              style={{width: '90%', backgroundColor: 'gainsboro', opacity: '0.8',}}
            />
            <Contactbutton
            onClick={sendEmail}
            disabled={!isFormValid}
            >
              Send <SendIcon style={{marginLeft: 5, fontSize: 20}}/>
            </Contactbutton>
          </ThemeProvider>
        </ContactRoot>
        {/*  */}
      </ParallaxContainer>
    </CustomParallax>
  )
};