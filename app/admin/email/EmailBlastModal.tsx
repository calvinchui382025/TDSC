import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import styled from '@emotion/styled';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { randomIntGenerator } from 'app/utils';
// import nodemailer from 'nodemailer';
import "setimmediate"
import axios from 'axios';

// @ts-ignore
// import { Html } from '@react-email/html';
//======================================================
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContentWrapper = styled('div') ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'center',
  // width: '100%',
  height: '100%',
  margin: '0.5rem',
})

const CustomTextField = styled(TextField) ({
  width: '80%',
  margin: '0.5rem',
})
//======================================================
const rangeOptions = [
  'Wallis-Orchard Gun Range',
  'G2G Gun Range',
]

export default function FullScreenDialog( props: any ) {
  const { isOpen, closeFunc } = props;
  const [ selectedRange, setSelectedRange ] = React.useState(rangeOptions[0]);
  const [ emailBody, setEmailBody ] = React.useState('');

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRange(event.target.value);
  };

  const handleEmailBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailBody(event.target.value);
  };

  const handleClose = () => {
    closeFunc(false);
  };

  function handleSend() {
    axios.post('/api/sendEmail', {
        selectedRange,
        emailBody,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      
      
      ).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });

    setEmailBody('');
    closeFunc(false);
  }

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Send Email Blast
          </Typography>
          <Button 
            color="warning" 
            variant="contained"
            onClick={handleSend}
            disabled={emailBody.length === 0}
          >
            SEND!
          </Button>
        </Toolbar>
      </AppBar>

    <ContentWrapper>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          value={selectedRange}
          label="Location"
          onChange={handleRangeChange}
        >
          {
            rangeOptions.map((option) => {
              return (
                <MenuItem key={randomIntGenerator()} value={option}>{option}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
      <CustomTextField
        id="outlined-multiline-static"
        label="Email Body"
        multiline
        rows={20}
        value={emailBody}
        onChange={handleEmailBodyChange}
      />
    </ContentWrapper>
    </Dialog>
  );
}