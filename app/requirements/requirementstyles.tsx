"use client"

import React from "react";
import styled from "@emotion/styled"
import { mainColor } from "app/utils";


const GearImage = 'https://github.com/snyperifle/TDSC/blob/main/public/Images/A7R05673.jpg?raw=true'


export const ReqContainer = styled('div')({
  marginTop: '7vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ProficiencyTitle = styled('div')({
  width: '100%',
  display: 'inherit',
  flexDirection: 'row',
  justifyContent: 'inherit',
  alignItems: 'inherit',
  '& > h1': {
    fontFamily: 'sans-serif',
    backdropFilter: 'blur(6px) saturate(150%)',
    color: 'white',
    fontSize: '3rem',
    fontStyle: 'italic',
    margin: 10,
    '@media (max-width: 1100px)': {
      fontSize: '1.75rem',
      margin: 8,
    },
    '@media (max-width: 600px)': {
      fontSize: '1.25rem',
      margin: 5,
    },
  },
  '@media (max-width: 886px)': {
    flexDirection: 'column',
  },
})

export const PlaceContainer = styled('div')({
  position: 'relative',
  width: '50%',
  display: 'inherit',
  flexDirection: 'column',
  justifyContent: 'inherit',
  alignItems: 'inherit',
  height: '45vh',
  '& > h1': {
    fontFamily: 'sans-serif',
    backdropFilter: 'blur(6px) saturate(150%)',
    color: 'white',
    fontSize: '3rem',
    fontStyle: 'italic',
    margin: 10,
    '@media (max-width: 1100px)': {
      fontSize: '1.75rem',
      margin: 8,
    },
    '@media (max-width: 600px)': {
      fontSize: '1.25rem',
      margin: 5,
    },
  },
  '& > h2': {
    fontFamily: 'sans-serif',
    textShadow: '2px 2px 2px black',
    color: 'white',
    fontSize: '1.5rem',
    width: '60%',
    textAlign: 'center',
    margin: 10,
    '@media (max-width: 1100px)': {
      fontSize: '1.25rem',
      margin: 8,
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
      margin: 5,
    },
  },
  '@media (max-width: 886px)': {
    width: '100%',
  },
})

export const GearRequirementContainer = styled('div')({
  position: 'relative',
  height: '100vh',
  backgroundImage: `url(${GearImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  marginBottom: '10px',
});

export const GearRequirementContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backgroundImage: `linear-gradient(0deg, rgba(37, 27, 74, 0) 42%, ${mainColor} 93%)`,
  padding: 20,
  boxSizing: 'border-box',
  color: 'white',
});

export const RequirementH1 = styled('h1')({
  fontSize: 'clamp(2rem, 2.5vw, 5rem)',
  marginBottom: 10,
  fontFamily: 'sans-serif',
  fontStyle: 'italic',
  textTransform: 'uppercase',
  borderRadius: '12px',
  padding: '10px',
})

export const RequirementP = styled('li')({
  fontSize: 'clamp(1rem, 1.5vw, 3.5rem)',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  borderRadius: '12px',
  textShadow: '2px 2px 2px black',
  margin: 5,
  padding: 5,
})

export const NoteContainer = styled('div')({
  width: '100%',
  height: '8vh',
  backgroundColor: mainColor,
  color: 'white',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  fontFamily: 'sans-serif',
  margin: 15,
  fontWeight: 'bold',
  fontStyle: 'italic',
})