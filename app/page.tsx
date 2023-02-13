'use client'

import { styled, Typography } from '@mui/material';
import { fadeIn, mainColor } from './utils';

//======================================================
// array of years since 1900
const years = Array.from(new Array(121), (val, index) => index + 1900);
// const backgroundVideoWidth = 2312
//======================================================
const HomeRoot = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: mainColor
})
const VideoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  height: '100vh',
  width: 'calc(100vw - 17px)',
  '@media (max-width: 600px)': {
    width: '100vw',
  },
})
const Video = styled('video')({
  transform: 'scale(2)',
  objectFit: 'cover',
})
const TitleText = styled(Typography)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: '#e7e7e7',
  opacity: 0.9,
  fontSize: '10vw',
  fontWeight: 600,
  animation: `${fadeIn} 3s`,
  zIndex: 2,
  fontFamily: 'Barlow Condensed, sans-serif', 
  
  '@media (max-width: 600px)': {
    fontSize: '2rem',
  },

})
const Gradient = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  // background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)',
  backgroundImage: `linear-gradient(180deg, rgba(37, 27, 74, 0) 42%, ${mainColor} 93%)`,
  zIndex: 1,
})
const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
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
      <Gradient />
      { 
        years.map((year) => {
          // eslint-disable-next-line react/jsx-key
          return <div key={year}>{year}</div>
        })
      }
    </HomeRoot>
  )
}