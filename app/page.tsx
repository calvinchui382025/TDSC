'use client'

import { ActivitiesComponent } from './Components/Activities';
import { styled, Typography } from '@mui/material';
import { fadeIn, mainColor } from './utils';
// import { Footer } from './Components/footer/footer';
import Separator from './Components/Separator';
// import { BiosCard, BiosGrid } from './about/AboutStyles';
import { JoinHeader, JoinPrimaryTypography, JoinSecondaryTypography } from './join/JoinStyles';
import JoinPaypalSep from './Components/JoinPaypalSep';
import { Reveal } from './Components/Reveal';
import { PaypalDonateComponent } from './Components/PaypalDonateComponent';
import { ContactComponent } from './Components/ContactComponent';
//======================================================
// const backgroundVideoWidth = 2312
//======================================================

// const TransparentImage = 'https://cdn11.bigcommerce.com/s-9de6f3ck5f/images/stencil/original/image-manager/gun-wall-builder-homepage-banner-edited-1-3-.png?t=1671692930'

const HomeRoot = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // marginTop: '10vh',
  // overflowX: 'hidden',
})
const HeroVideoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  height: '100vh',
  width: 'calc(100vw - 17px)',
  '@media (max-width: 600px)': {
    width: '100vw',
  },
})
const HeroVideo = styled('video')({
  transform: 'scale(2)',
  objectFit: 'cover',
})
const HomeText = styled(Typography)({
  color: '#e7e7e7',

})
const TitleText = styled(HomeText)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  opacity: 0.9,
  fontSize: '10vw',
  fontWeight: 600,
  animation: `${fadeIn} 3s`,
  zIndex: 5,
  fontFamily: 'Barlow Condensed, sans-serif', 
  
  '@media (max-width: 600px)': {
    fontSize: '2rem',
  },

  '@media (min-width: 1920px)': {
    fontSize: '7vw',
  },

})
const Gradient = styled('div')({
  position: 'absolute',
  top: '52%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  // background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)',
  backgroundImage: `linear-gradient(180deg, rgba(37, 27, 74, 0) 42%, ${mainColor} 93%)`,
  zIndex: 2,
})
const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})
const FlippedRow = styled(Row)({
  flexDirection: 'row-reverse',
})
const GradientDivider = styled('div')({
  width: '80%',
  height: '1px',
  background: 'linear-gradient(90deg, rgb(37, 83, 185), rgb(102, 164, 255))',
  zIndex: 5
})
const PrepareTextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  // width: '100%',
  padding: '36px',

})
const PrepareText = styled(HomeText)({
  fontWeight: 600,
  fontFamily: 'Barlow Condensed, sans-serif',
  animation: `${fadeIn} 3s`,
  '@media (max-width: 600px)': {
    fontSize: '1rem',
  },
})
const PrepareVideoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '50vw',
  height: '50vh',
  margin: '24px 0px',
  '@media (max-width: 600px)': {
    width: 'auto',
  },
})
const PrepareVideo = styled('video')({
  objectFit: 'cover',
  padding: '1px',
  background: 'linear-gradient(to right, rgb(37, 83, 185), rgb(102, 164, 255))',
  borderRadius: '12px',
})
const PrepareSubTextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '50vh',
  maxWidth: '50vw',
  '@media (max-width: 600px)': {
    width: 'auto',
  },
})
const PrepareSubTextTitle = styled(HomeText)({
  fontSize: '3vw',
  fontWeight: 500,
  textAlign: 'center',
  '@media (max-width: 600px)': {
    fontSize: '0.9rem',
  },
})
const PrepareSubText = styled(HomeText)({
  fontSize: '1.5vw',
  fontWeight: 400,
  textAlign: 'center',
  '@media (max-width: 600px)': {
    fontSize: '0.8rem',
  },
  margin: '24px',
})
//======================================================
export default function HomePage() {
  return (
    <HomeRoot>
      <HeroVideoContainer>
        <HeroVideo 
          autoPlay
          muted
          loop 
          playsInline
        >
          <source 
            src='/Videos/pexels-range.mp4' 
            type='video/mp4'
          />
        </HeroVideo>
      </HeroVideoContainer>
      <TitleText 
        variant='h1'
        >
          TEXAS DEFENSIVE SHOOTING CLUB
      </TitleText>
      <GradientDivider />
      <Row>
        <PrepareTextContainer>
          <Gradient />
          <PrepareText variant='h2'>PREPARE TO PROTECT</PrepareText>
        </PrepareTextContainer>
      </Row>
      <ActivitiesComponent />
      {/* <BasicTimeline /> */}
      <JoinPaypalSep />
      <Reveal>
        <JoinHeader 
          style={{
            // width: '100vw', marginBottom: '2.5rem'
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <JoinPrimaryTypography>Help Our Cause</JoinPrimaryTypography>
          <JoinSecondaryTypography>Your support and contributions will enable us to meet our goals and improve conditions. Your generous donation will fund our mission.</JoinSecondaryTypography>
          <PaypalDonateComponent />
        </JoinHeader>
      </Reveal>
      {/* <img src={TransparentImage} alt='test' height='600' width='600' /> */}
      <Row>
        <PrepareVideoContainer>
          <PrepareVideo
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src='/Videos/pexels-walking-in-woods.mp4'
              type='video/mp4'
            />
          </PrepareVideo>
        </PrepareVideoContainer>
        <Reveal>
          <PrepareSubTextContainer>
            <PrepareSubTextTitle>Every Day Carry Shoots</PrepareSubTextTitle>
            <PrepareSubText>
              TDSC provides one-on-one and group instruction on drills and skills, 
              using real life scenarios to become proficient with the firearm you 
              carry every day and the way you carry it
            </PrepareSubText>
          </PrepareSubTextContainer>
        </Reveal>
      </Row>

      <FlippedRow>
        <PrepareVideoContainer>
          <PrepareVideo
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src='/Videos/pexels-man-holding-gun.mp4'
              type='video/mp4'
            />
          </PrepareVideo>
        </PrepareVideoContainer>
        <Reveal>
          <PrepareSubTextContainer>
            <PrepareSubTextTitle>2 Gun Shoots</PrepareSubTextTitle>
            <PrepareSubText>
              TDSC offers  handgun and rifle (carbine) shoots involving cardboard and steel targets, props, walls, clays, and a duelling tree. See our calendar for shoot schedule and locations.
            </PrepareSubText>
          </PrepareSubTextContainer>
        </Reveal>
      </FlippedRow>
      <ContactComponent />
    </HomeRoot>
  )
}