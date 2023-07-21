'use client'

import { styled, Typography } from '@mui/material';
import { ActivitiesComponent, BasicTimeline, fadeIn, JoinSeparatorData, mainColor } from './utils';
import { Footer } from './Components/footer/footer';
import Separator from './Components/SeparatorBar/separator';
import { ContactSeparatorData } from './utils';
import { BiosCard, BiosGrid } from './about/AboutStyles';
import { JoinHeader, JoinPrimaryTypography, JoinSecondaryTypography } from './join/JoinStyles';
import { PaypalDonateComponent } from './Components/paypalcomponents';
//======================================================
// const backgroundVideoWidth = 2312
//======================================================

const TransparentImage = 'https://cdn11.bigcommerce.com/s-9de6f3ck5f/images/stencil/original/image-manager/gun-wall-builder-homepage-banner-edited-1-3-.png?t=1671692930'

const HomeRoot = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
    fontSize: '8vw',
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
  // padding: '24px 0px',

  '@media (max-width: 600px)': {
    flexDirection: 'column',
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
  maxWidth: '100%',
  height: '50vh',
  padding: '24px',
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
  padding: '24px',
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
      <BasicTimeline />
      <Separator data={JoinSeparatorData}/>
      <JoinHeader style={{width: '100vw', marginBottom: '2.5rem',}}>
        <JoinPrimaryTypography>Help Our Cause</JoinPrimaryTypography>
        <JoinSecondaryTypography>Your support and contributions will enable us to meet our goals and improve conditions. Your generous donation will fund our mission.</JoinSecondaryTypography>
        <PaypalDonateComponent />
      </JoinHeader>
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
        <PrepareSubTextContainer>
          <PrepareSubTextTitle>Every Day Carry Shoots</PrepareSubTextTitle>
          <PrepareSubText>
            TDSC provides one-on-one and group instruction on drills and skills, 
            using real life scenarios to become proficient with the firearm you 
            carry every day and the way you carry it
          </PrepareSubText>
        </PrepareSubTextContainer>
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
        <PrepareSubTextContainer>
          <PrepareSubTextTitle>2 Gun Shoots</PrepareSubTextTitle>
          <PrepareSubText>
            TDSC offers  handgun and rifle (carbine) shoots involving cardboard and steel targets, props, walls, clays, and a duelling tree. See our calendar for shoot schedule and locations.
          </PrepareSubText>
        </PrepareSubTextContainer>
      </FlippedRow>

      <Row>
        <PrepareVideoContainer>
          <PrepareVideo
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src='/Videos/pexels-loading-mag.mp4'
              type='video/mp4'
            />
          </PrepareVideo>
        </PrepareVideoContainer>
        <PrepareSubTextContainer>
          <PrepareSubTextTitle>3 Gun Shoots</PrepareSubTextTitle>
          <PrepareSubText>
            Join TDSC for an exciting and unforgettable 3 Gun Shoot where you experience shooting a handgun, rifle, and shotgun while moving from one stage to another, engaging targets with each firearm. See our calendar for shoot schedule and locations.
          </PrepareSubText>
        </PrepareSubTextContainer>
      </Row>
      <Separator data={ContactSeparatorData}/>
      <Footer />
    </HomeRoot>
  )
}