"use client"

import Separator from "app/Components/Separator";
import { JoinHeader, JoinHeaderContent, JoinPrimaryTypography, JoinRoot, JoinSecondaryTypography, JoinStyledButton, Learnmorecontainer, RangeCard, RangeCardSubText, RangeCardTextContainer } from "./JoinStyles";
import { ContactSeparatorData, randomIntGenerator } from "app/utils";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Reveal } from "app/Components/Reveal";
import JoinPaypalSep from "app/Components/JoinPaypalSep";
import { CardMapContainer } from "app/locations/locationStyles";
import GoogleMapReact from "google-map-react";
import { mapStyles } from "app/locations/mapStyles";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import useEffect from "react";
import { locations } from "app/locations/data";
import { PaypalDonateComponent } from "app/Components/PaypalComponents";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const MyMarker = ({ text }: any) => (
  <LocationOnIcon fontSize='large' style={{color:'red'}}/>
)

export default function JoinPage() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <JoinRoot>
      <JoinPaypalSep />
      <JoinHeader>
        <Reveal>
          <JoinHeaderContent>
            <JoinPrimaryTypography>
              Your Annual Membership fee helps TDSC supply targets, steel props, stands and other necessary equipment needed for safe and fun shooting.
            </JoinPrimaryTypography>
            <JoinSecondaryTypography>
            An Annual Membership is not required to attend TDSC Shoots.
            </JoinSecondaryTypography>
          </JoinHeaderContent>
        </Reveal>
      </JoinHeader>
      <Learnmorecontainer>
        {locations.map((range) => {
          const handleMarkerClick = (location) => {
            console.log('clicked')
          }
          const { lat, lng } = range;
          return (
              <RangeCard
                key={randomIntGenerator()}
              >
                <RangeCardTextContainer>
                  <h1>{range.title}</h1>
                  <div style={{display: 'flex', flexDirection: 'row'}}>
                    <RangeCardSubText style={{color: 'rgb(52,124,245)'}}>{range.price}</RangeCardSubText>
                    <RangeCardSubText>{range.pricedescription}</RangeCardSubText>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row'}}>
                    <RangeCardSubText style={{color: 'rgb(52,124,245)'}}>{range.secondaryPrice}</RangeCardSubText>
                    <RangeCardSubText>{range.secondaryDescription}</RangeCardSubText>
                  </div>
                </RangeCardTextContainer>
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
              </RangeCard>
          )
        })}
      </Learnmorecontainer>
      <JoinHeader>
        {/* <Reveal> */}
          <JoinHeaderContent>
            <JoinPrimaryTypography>Help Our Cause</JoinPrimaryTypography>
            <JoinSecondaryTypography>Your support and contributions will enable us to meet our goals and improve conditions. Your generous donation will fund our mission.</JoinSecondaryTypography>
            <PaypalDonateComponent />
          </JoinHeaderContent>
        {/* </Reveal> */}
      </JoinHeader>
      <Separator data={ContactSeparatorData}/>
    </JoinRoot>
  )
}