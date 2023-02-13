'use client'

import { styled, Typography } from '@mui/material';

// array of years since 1900
const years = Array.from(new Array(121), (val, index) => index + 1900);
//======================================================
const HomeRoot = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
})
const VideoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  height: '100vh',
})
const Video = styled('video')({
  transform: 'scale(2)',
  // '@media (min-width: 1920px)': {
  //   transform: 'scale(2)',
  // }, 
  '@media (max-width: 600px)': {
    transform: 'scale(1)',
  }
})
const TitleText = styled(Typography)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
  fontSize: '5rem',
  '@media (max-width: 600px)': {
    fontSize: '2rem',
  }
})
//======================================================
export default function HomePage() {
  return (
    <HomeRoot>
      <VideoContainer>
        <Video 
          autoPlay
          muted
          loop  
        >
          <source 
            src='/Videos/pexels-range.mp4' 
            type='video/mp4'
          />
        </Video>
      </VideoContainer>
      <TitleText 
        variant='h1'
        >
          TEXAS DEFENSIVE SHOOTING CLUB
      </TitleText>
      { 
        years.map((year) => {
          // eslint-disable-next-line react/jsx-key
          return <div>{year}</div>
        })
      }
    </HomeRoot>
  )
}