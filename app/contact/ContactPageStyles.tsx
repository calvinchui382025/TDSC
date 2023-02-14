"use client"

import styled from "@emotion/styled"
import { Card, Typography, Button, TextField, FormGroup } from '@mui/material';
import { mainColor } from "app/utils";

export const ContactRoot = styled('div')({
  backgroundColor: 'gainsboro',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const PrimaryCard = styled(Card)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'top',
  alignItems: 'center',
  width: '70%',
  height: '70%',
  // margin: 'auto',
  // marginTop: 100,
  padding: 10,
  borderRadius: 10,
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    height: '100%',
    width: '90%',
    marginTop: 80
  },
})

export const ContactFormCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  alignItems: 'center',
  // padding: 24,
  margin: 24,
  // backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  width: '67%',
  height: '100%',
  // backgroundColor: 'grey',
  '@media (max-width: 900px)': {
    width: '100%',
    paddingTop: 0,
    height: 'auto',
  },
})

export const ContactContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  // alignItems: 'center',
  '@media (max-width: 900px)': {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 0,
    justifyContent: 'center',
  },
})

export const ContactText = styled(Typography)({
  '@media (max-width: 900px)': {
    display: 'none',
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
    marginBottom: 5,
    height: 'auto',
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
  // width: '72%',
  // marginBottom: 20,
  // margin: 20,
  // height: 200,
  margin: '20px 0px',
})

export const CustomTypography = styled(Typography)({
  display: 'flex',
})

export const AlignedBox = styled('div')({
  // display: 'flex',
  // flexDirection: 'row',
  width: '100%',
  // justifyContent: 'space-between',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
  },
})

export const StyledFormGroup = styled('div')({
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
  // alignItems: 'center',
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
