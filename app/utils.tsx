import React from "react";
import styled from "@emotion/styled";
import { Button, FormControl, TextField, keyframes } from '@mui/material';
import { useEffect } from "react";
import Separator from "./Components/SeparatorBar/separator";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { ContactComponent } from "./Components/contactcomponent";
import { PaypalSubscribeComponent } from "./Components/paypalcomponents";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { locations } from "./locations/data";
import { CardMapContainer } from "./locations/locationStyles";
import GoogleMapReact from "google-map-react";
import { mapStyles } from "./locations/mapStyles";
import LocationOnIcon from '@mui/icons-material/LocationOn';

//======================================================
// export const mainColor = '#050030' // midnight blue
export const mainColor = 'rgb(36,40,43)' // midnight blue
export const greyColorCustom = 'rgb(36,40,43)'
export const greyColorCustomDark = 'rgb(27,31,34)'
export const greyColorCustomLight = 'rgb(45,49,52)'

export const mainGradient = 'linear-gradient(to right, rgb(37, 83, 185), rgb(102, 164, 255))'
//======================================================
export const fadeIn = keyframes`
0%    {
  opacity: 0; 
}
60%   {
  opacity: 0;
}
100%  {
  opacity: 1; 
}
`;


//======================================================

const ContactBannerJoin = 'https://flintriverindoorshootingrange.com/wp-content/uploads/2021/05/three-1-a.jpg'
const JoinBanner = 'https://preview.free3d.com/img/2019/07/2400324917364000180/l7bb2nw3.jpg'

//======================================================

export const ContactSeparatorData = {
  content: 'Contact us!',
  image: ContactBannerJoin,
  separatorheight: '75vh',
  dom: <ContactComponent />,
}

export const JoinSeparatorData = {
  title: 'Annual membership fee',
  content: '$75',
  image: JoinBanner,
  separatorheight: '55vh',
  dom: <PaypalSubscribeComponent/>,
}

//======================================================

//======================================================

const ActivityImage = 'https://www.clackamas.us/sites/default/files/2019-06/gun-range.jpg'
const CaliberImage = 'https://media.istockphoto.com/id/1413053043/photo/two-9mm-pistols-hold-slides-on-a-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=W_NbM0AV6Io5VXLM7aqNnaD8-XHoPVGNjWP-XzBjpBQ='

export const activitySeparatorData = {
  title: 'What we do',
  // content: 'Meet our ',
  image: ActivityImage,
  separatorheight: '35vh',
}

const ActivitiesInfo = [
  {
    title: 'Every Day Carry Shoots',
    description: 'TDSC provides one-on-one and group instruction on drills and skills, using real life scenarios to become proficient with the firearm you carry every day and the way you carry it',
    icon: <SupervisorAccountIcon style={{fontSize: 70, color: 'rgb(37, 83, 185)'}}/>
  },
  {
    title: '2 Gun Shoots',
    description: 'TDSC offers  handgun and rifle (carbine) shoots involving cardboard and steel targets, props, walls, clays, and a duelling tree. See our calendar for shoot schedule and locations.',
    icon: <SupervisorAccountIcon style={{fontSize: 70, color: 'rgb(37, 83, 185)'}}/>
  },
  {
    title: 'Private Instruction',
    description: 'TDSC offers private instruction for individuals and groups.  Contact us for more information.',
    icon: <SupervisorAccountIcon style={{fontSize: 70, color: 'rgb(37, 83, 185)'}}/>
  }
]

const ActivityGrid = styled('div')({
  width: '80%',
  position: 'relative',
  top: -100,
  justifyItems: 'center',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  '@media (max-width: 1268px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (max-width: 480px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
})

const ActivityCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: greyColorCustomLight,
  padding: '1.5rem',
  width: '15vw',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '12px',
  border: '1px solid',
  borderColor: 'grey',
  '&:hover': {
    border: '1px solid rgb(37, 83, 185)',
    transition: 'all 0.2s ease-in-out',
  },
  '@media (max-width: 1268px)': {
    width: '30vw',
  },
  '@media (max-width: 480px)': {
    width: '65vw',
  },
})

export const ActivityTitle = styled('h1')({
  fontFamily: 'sans-serif',
  margin: 5,
  color: 'gainsboro',
  textTransform: 'uppercase',
  fontSize: '1.25rem',
})

export const ActivityDesc = styled('p')({
  fontFamily: 'sans-serif',
  margin: 5,
  color: 'gainsboro',
})

export const ActivitiesComponent = () => {
  return (
    <>
      <Separator data={activitySeparatorData}/>
      <ActivityGrid>
        {ActivitiesInfo.map((activity) => {
          return (
            <ActivityCard key={activity.title}>
              {activity.icon}
              <ActivityTitle>{activity.title}</ActivityTitle>
              <ActivityDesc>{activity.description}</ActivityDesc>
              <Button
                style={{
                  color: 'rgb(102, 164, 255)',
                  fontWeight: 'bold',
                }}
              >
                Join now! <KeyboardArrowRightIcon style={{backgroundImage: 'linear-gradient(to right, rgb(37, 83, 185), rgb(102, 164, 255)', borderRadius: '50%', color: greyColorCustomLight, marginLeft: 7}}/>
              </Button>
            </ActivityCard>
          );
        })}
      </ActivityGrid>
    </>
  )
}

//======================================================

const TimelineContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '2.5rem',
})

const TimelineTitle = styled('h1')({
  fontFamily: 'sans-serif',
  margin: 5,
  color: 'gainsboro',
  textTransform: 'uppercase',
  fontSize: 'xx-large',
})

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const MyMarker = ({ text }: any) => (
  <LocationOnIcon fontSize='large' style={{color:'red'}}/>
)

export const BasicTimeline = () => {
  const handleMarkerClick = (location) => {
    console.log('clicked')
  }
  return (
    <TimelineContainer>
      <TimelineTitle>Locations</TimelineTitle>
      <Timeline>
        {locations.map((location, index) => {
          const { range, cost, street, city, state, zip, phone, description, lat, lng } = location
          return (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              color="white"
              style={{
                border: '2px solid rgb(102, 164, 255)',
                width: '500px',
                height: '300px',
                margin: '15px',
                borderRadius: '12px',
                backgroundColor: greyColorCustomLight,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h3 style={{margin: 0}}>{location.range}</h3>
              <p>{location.description}</p>
              <p>{location.cost}</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {index < locations.length - 1 && <TimelineConnector />} {/* Render the connector for all items except the last one */}
            </TimelineSeparator>
            <TimelineContent
              color="white"
              style={{
                border: '2px solid rgb(102, 164, 255)',
                width: '500px',
                height: '300px',
                margin: '15px',
                borderRadius: '12px',
                backgroundColor: greyColorCustomLight,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardMapContainer>
                <GoogleMapReact
                  bootstrapURLKeys={{ 
                    key: String(apiKey) 
                  }}
                  defaultCenter={{lat, lng}}
                  defaultZoom={15}
                  options={{
                    disableDefaultUI: true,
                    keyboardShortcuts: false,
                    styles: mapStyles,
                  }}
                  onClick={() => handleMarkerClick(location)}
                >
                  <MyMarker
                    lat={lat}
                    lng={lng}
                    text={range}
                  />
                </GoogleMapReact>
              </CardMapContainer>
            </TimelineContent>
          </TimelineItem>
        )})}
      </Timeline>
    </TimelineContainer>
  );
}



      {/* <TimelineItem>
        <TimelineOppositeContent
        color="white"
        style={{
          border: '2px solid rgb(102, 164, 255)',
          width: '500px',
          height: '200px',
          margin: '15px',
          borderRadius: '12px',
          backgroundColor: greyColorCustomLight,
        }}>
          test
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
        color="white"
        style={{
          border: '2px solid red',
          width: '500px',
          height: '200px',
          margin: '15px'
        }}>
          Eat
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
        color="white"
        style={{
          border: '2px solid rgb(102, 164, 255)',
          width: '500px',
          height: '200px',
          margin: '15px',
          borderRadius: '12px',
          backgroundColor: greyColorCustomLight,
        }}>
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
        color="white"
        style={{
          border: '2px solid red',
          width: '500px',
          height: '200px',
          margin: '15px'
        }}>
          Eat
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
        color="white"
        style={{
          border: '2px solid rgb(102, 164, 255)',
          width: '500px',
          height: '200px',
          margin: '15px',
          borderRadius: '12px',
          backgroundColor: greyColorCustomLight,
        }}>
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
        color="white"
        style={{
          border: '2px solid red',
          width: '500px',
          height: '200px',
          margin: '15px'
        }}>
          Eat
        </TimelineContent>
      </TimelineItem> */}