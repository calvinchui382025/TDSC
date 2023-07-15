"use client"

import styled from "@emotion/styled"
import { Card, Typography, Button, TextField, FormGroup } from '@mui/material';
import { mainColor } from "app/utils";

export const ContactRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: '5rem',
  color: 'white',
  backgroundColor: 'black',
})


export const ContactPrimaryTypography = styled('h1')({
  fontFamily: 'sans-serif',
  color: 'white',
  fontSize: '2rem',
  margin: 5,
  padding: 0,
  '@media (max-width: 1100px)': {
    fontSize: '1.5rem',
  },
  '@media (max-width: 600px)': {
    fontSize: '1.2rem',
  },
})

export const ContactSecondaryTypography = styled('h1')({
  fontFamily: 'sans-serif',
  color: 'white',
  fontSize: '1.5rem',
  width: '60%',
  margin: 20,
  padding: 0,
  '@media (max-width: 1100px)': {
    width: '80%',
    fontSize: '1rem',
  },
  '@media (max-width: 600px)': {
    width: '95%',
    fontSize: '0.9rem',
  },
})

export const PrimaryCard = styled(Card)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'top',
  alignItems: 'center',
  width: '70%',
  height: '70%',
  margin: 'auto',
  marginTop: 100,
  padding: 10,
  borderRadius: 10,
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    height: '100%',
  },
})

export const ContactFormCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  alignItems: 'center',
  paddingTop: 25,
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  width: '68%',
  height: '100%',
  // backgroundColor: 'grey',
  '@media (max-width: 900px)': {
    width: '100%',
    paddingTop: 0,
  },
})

export const DecorationCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  alignItems: 'left',
  padding: 35,
  width: '33%',
  height: '90%',
  backgroundColor: mainColor,
  borderRadius: 10,
  '@media (max-width: 1000px)': {
    width: '80%',
    height: '45%',
    marginBottom: 5,
  },
})

export const CustomTextField = styled(TextField)({
  width: 300,
  marginBottom: 20,
  margin: 20,
  '@media (max-width: 900px)': {
    margin: 5,
  },
})

export const MessageTextField = styled(TextField)({
  width: '72%',
  marginBottom: 20,
  margin: 20,
  height: 200,
})

export const CustomTypography = styled(Typography)({
  display: 'flex',
})

export const AlignedBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
  },
})

export const StyledFormGroup = styled(FormGroup)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const MediaAlignedDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'left',
  justifyContent: 'left',
  paddingTop: 50,
  color: 'gainsboro',
  '@media (max-width: 900px)': {
    paddingTop: 15,
  },
})

export const StyledCheckboxGroup = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3,210px)',
  gridTemplateRows: 'repeat(2,40px)',
  gridGap: '0px 0px',
  '@media (max-width: 900px)': {
    gridTemplateColumns: 'repeat(2,150px)',
    gridTemplateRows: 'repeat(3,40px)',
  },
})
