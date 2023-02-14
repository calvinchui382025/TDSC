"use client"

import styled from "@emotion/styled"
import { useState } from "react"
import { Box, Typography, TextField, Button, Card, FormGroup, FormControlLabel, Checkbox, FormLabel, IconButton, Link } from "@mui/material"
import { PrimaryCard, ContactFormCard, CustomTextField, CustomTypography, DecorationCard, AlignedBox, MessageTextField, StyledCheckboxGroup, MediaAlignedDiv, StyledFormGroup, ContactRoot, ContactContainer, ContactText } from "./ContactPageStyles"
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function ContactPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [checked, setChecked] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  }


  const formData = {
    "First Name": firstName,
    "Last Name": lastName,
    "Email": email,
    "Phone": phone,
    "Message": message,
    "Contact reason": checked,
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <ContactRoot>
      <PrimaryCard>

        <DecorationCard>
          <Typography sx={{color: 'gainsboro'}} variant="h4">Contact Information</Typography>
          <Typography sx={{color: 'gainsboro'}} variant="body1">Fill up the form and we will get back to you as soon as we can!</Typography>
          <ContactContainer>
            <MediaAlignedDiv>
              <IconButton color="primary" aria-label="call" component="label">
              <input hidden type="tel" />
                <LocalPhoneIcon style={{marginRight: 8}} />
              </IconButton>
              <ContactText variant="h6">Phone: 123-456-7890</ContactText>
            </MediaAlignedDiv>
            <MediaAlignedDiv>
              <IconButton color="primary" aria-label="call" component="label" onClick={() => window.open('mailto:rdpistolclub@gmail.com')}>
                <EmailIcon style={{marginRight: 8}} />
              </IconButton>
              <ContactText variant="h6">Email: </ContactText>
            </MediaAlignedDiv>
            <MediaAlignedDiv>
              <IconButton color="primary" aria-label="call" component="label">
                <Link href="https://www.facebook.com/TDSClub.org/" target="_blank" >
                  <FacebookIcon style={{marginRight: 8}} />
                </Link>
              </IconButton>
              <ContactText variant="h6">Like us on Facebook!</ContactText>
            </MediaAlignedDiv>
          </ContactContainer>
        </DecorationCard>

        <ContactFormCard>
          <StyledFormGroup>
            <CustomTextField size={'small'} fullWidth variant="standard" label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></CustomTextField>
            <CustomTextField size={'small'} fullWidth variant="standard" label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}></CustomTextField>
            <CustomTextField size={'small'} fullWidth variant="standard" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}></CustomTextField>
            <CustomTextField size={'small'} fullWidth variant="standard" label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}></CustomTextField>
            <MessageTextField fullWidth multiline rows={3} variant="outlined" label="Message" value={message} onChange={(e) => setMessage(e.target.value)}></MessageTextField>
            {
              submitted ? <Typography variant="h6" sx={{color: 'green'}}>Your message has been sent, we will get back to you as soon as we can!</Typography> : <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            }
          </StyledFormGroup>
        </ContactFormCard>

      </PrimaryCard>
    </ContactRoot>
  )
}

 {/* <Typography variant="h6">What would you like to know about?</Typography>
            <StyledCheckboxGroup>
              <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked === "EDC Shoots"}
                      onChange={handleCheckedChange}
                      value="EDC Shoots"
                    />
                  }
                  label="EDC Shoots"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked === "2 Gun Shoots"}
                      onChange={handleCheckedChange}
                      value="2 Gun Shoots"
                    />
                  }
                  label="2 Gun Shoots"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked === "3 Gun Shoots"}
                      onChange={handleCheckedChange}
                      value="3 Gun Shoots"
                    />
                  }
                  label="3 Gun Shoots"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked === "Events"}
                      onChange={handleCheckedChange}
                      value="Events"
                    />
                  }
                  label="Events"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked === "Payment"}
                      onChange={handleCheckedChange}
                      value="Payment"
                    />
                  }
                  label="Payment"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked === "Club info"}
                      onChange={handleCheckedChange}
                      value="Club info"
                    />
                  }
                  label="Club info"
                />
            </StyledCheckboxGroup> */}