"use client"

import styled from "@emotion/styled"
import { useState } from "react"
import { Box } from "@mui/system"
import { Typography, TextField, Button, Card } from "@mui/material"
import { ContactFormCard, CustomTextField, CustomTypography } from "./ContactPageStyles"

export default function ContactPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <div style={{backgroundColor: 'gainsboro', height: '100vh'}}>
      <ContactFormCard>
        <Typography sx={{display: 'flex', alignText: 'top'}} variant="h4">Contact Us</Typography>
        <CustomTextField variant="standard" label="First Name"></CustomTextField>
        <CustomTextField variant="standard" label="Last Name"></CustomTextField>
        <CustomTextField variant="standard" label="Email"></CustomTextField>
        <CustomTextField variant="standard" label="Message"></CustomTextField>
        <Button variant="contained">Submit</Button>
      </ContactFormCard>
    </div>
  )
}