import React from "react";
import styled from "@emotion/styled";
import { keyframes } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { locations } from "./locations/data";
import { CardMapContainer } from "./locations/locationStyles";
import GoogleMapReact from "google-map-react";
import { mapStyles } from "./locations/mapStyles";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Reveal } from "./Components/Reveal";

//======================================================
export const randomIntGenerator = () => {
  return Math.floor(Math.random() * 1000000000)
}
//======================================================
export const mainColor = 'rgb(36,40,43)'
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
          <Reveal
            key={randomIntGenerator()}
          >
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
          </Reveal>
        )})}
      </Timeline>
    </TimelineContainer>
  );
}

