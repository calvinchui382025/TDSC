"use client"

import styled from "@emotion/styled"
import { Card, Typography, Button, TextField } from '@mui/material';

export const ContactFormCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  alignItems: 'center',
  width: '70%',
  height: '70%',
  marginTop: 100,
  marginLeft: 220,
  padding: 20,
  borderRadius: 8,
})

export const CustomTextField = styled(TextField)({
  width: '25%',
  marginBottom: 20,
})

export const CustomTypography = styled(Typography)({
  display: 'flex',
})

export const DecorationCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  alignItems: 'center',
})