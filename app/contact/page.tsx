"use client"

import styled from "@emotion/styled"
import { useState } from "react"
import { Box, Typography, TextField, Button, Card, FormGroup, FormControlLabel, Checkbox, FormLabel, IconButton, Link } from "@mui/material"
import { PrimaryCard, ContactFormCard, CustomTextField, CustomTypography, DecorationCard, AlignedBox, MessageTextField, StyledCheckboxGroup, MediaAlignedDiv, StyledFormGroup, ContactRoot, ContactPrimaryTypography, ContactSecondaryTypography } from "./ContactPageStyles"
import { mainColor } from "app/utils";
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Separator from "app/Components/SeparatorBar/separator"
import { ContactSeparatorData } from "app/join/page"
import { Footer } from "app/Components/footer/footer"

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
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'black',
        width: '70%',
        height: '15vh',
      }}
      >
        <ContactPrimaryTypography
        style={{
          width: '60%',
        }}
        >
          Have any questions?
        </ContactPrimaryTypography>
        <ContactSecondaryTypography>
          Reach out to use and we will get back to you as soon as we can!
        </ContactSecondaryTypography>
      </div>
      <Separator data={ContactSeparatorData}/>
      <Footer />
      {/* <PrimaryCard>
        <DecorationCard>
          <Typography sx={{color: 'gainsboro', fontWeight: '700'}} variant="h4">Contact Information</Typography>
          <Typography sx={{color: 'gainsboro', fontWeight: '600'}} variant="body1">Fill up the form and we will get back to you as soon as we can!</Typography>
          <MediaAlignedDiv>
            <IconButton color="primary" aria-label="call" component="label">
            <input hidden type="tel" />
              <LocalPhoneIcon style={{marginRight: 8, fontSize: 40}} />
            </IconButton>
            <Typography variant="h6" sx={{fontWeight: '700', paddingTop: 1.5}}>Phone: 123-456-7890</Typography>
          </MediaAlignedDiv>
          <MediaAlignedDiv>
            <IconButton color="primary" aria-label="call" component="label" onClick={() => window.open('mailto:rdpistolclub@gmail.com')}>
              <EmailIcon style={{marginRight: 8, fontSize: 40}} />
            </IconButton>
            <Typography variant="h6" sx={{fontWeight: '700', paddingTop: 1.5}}>Email: </Typography>
          </MediaAlignedDiv>
          <MediaAlignedDiv>
            <IconButton color="primary" aria-label="call" component="label">
              <Link href="https://www.facebook.com/TDSClub.org/" target="_blank" >
                <FacebookIcon style={{marginRight: 8, fontSize: 40}} />
              </Link>
            </IconButton>
            <Typography variant="h6" sx={{fontWeight: '700', paddingTop: 1.5}}>Like us on Facebook!</Typography>
          </MediaAlignedDiv>
        </DecorationCard>
        <ContactFormCard>
          <StyledFormGroup>
            <AlignedBox>
              <CustomTextField variant="standard" label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></CustomTextField>
              <CustomTextField variant="standard" label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}></CustomTextField>
            </AlignedBox>
            <AlignedBox>
              <CustomTextField variant="standard" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}></CustomTextField>
              <CustomTextField variant="standard" label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}></CustomTextField>
            </AlignedBox>
            <Typography variant="h6" sx={{fontWeight: '700', paddingTop: 1.5, paddingBottom: 2}}>What would you like to know about?</Typography>
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
            </StyledCheckboxGroup>
            <MessageTextField multiline rows={7} variant="outlined" label="Message" value={message} onChange={(e) => setMessage(e.target.value)}></MessageTextField>
            {
              submitted ? <Typography variant="h6" sx={{color: 'green'}}>Your message has been sent, we will get back to you as soon as we can!</Typography> : <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            }
          </StyledFormGroup>
        </ContactFormCard>
      </PrimaryCard> */}
    </ContactRoot>
  )
}