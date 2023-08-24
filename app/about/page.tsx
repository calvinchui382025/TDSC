"use client"

import { useState, useEffect } from "react";
import styled from "@emotion/styled"
import Separator, { CustomParallax, ParallaxContainer, ParallaxContent, ParallaxTitle } from "app/Components/Separator";
import { AboutButton, AboutImage, AboutRoot, BiosCard, BiosGrid, StyledDescription, StyledName, StyledTitle, WhatWeDoTextContainer, WhoWeAreContainer, WhoWeAreTextContainer } from "./AboutStyles";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { greyColorCustomLight, mainColor, mainGradient } from "app/utils";
import { Reveal } from "app/Components/Reveal";
import { Contact } from "app/Components/Contact";

const whoWeAreImage = 'https://github.com/snyperifle/TDSC/blob/lukebranch/app/Components/assets/A7R05825.jpg?raw=true'
const whatWeDoImage = 'https://github.com/snyperifle/TDSC/blob/lukebranch/app/Components/assets/A7R05695.jpg?raw=true'
const separateBanner = 'https://github.com/snyperifle/TDSC/blob/lukebranch/app/Components/assets/biosedit.jpg?raw=true'

const BiosParallaxContainer = styled(ParallaxContainer)({
  height: '85vh',
  '@media (max-width: 668px)': {
    height: '120vh',
  },
})

const BiosCustomParallax = styled(CustomParallax)({
  height: '85vh',
  '@media (max-width: 668px)': {
    height: '120vh',
  },
})

const LeaderBiosComponent = () => {
  return (
    <BiosCustomParallax
    bgImage={separateBanner}
    strength={950}
    >
      <BiosParallaxContainer>
        <ParallaxTitle>Club leader bios</ParallaxTitle>
        <BiosGrid>
          {peopleList.map((person) => (
            <BiosCard key={person.name}>
              <StyledName>{person.name}</StyledName>
              <StyledTitle>{person.title}</StyledTitle>
              <StyledDescription>{person.subtitle}</StyledDescription>
              <StyledDescription>{person.description}</StyledDescription>
              <StyledDescription>{person.descriptiontwo}</StyledDescription>
              <StyledDescription>{person.descriptionthree}</StyledDescription>
              <StyledDescription>{person.descriptionfour}</StyledDescription>
            </BiosCard>
          ))}
        </BiosGrid>
      </BiosParallaxContainer>
    </BiosCustomParallax>
  )
}

const peopleList = [
  {
    name: 'Greg Baker',
    title: 'G2G',
    subtitle: 'Founder',
    description: 'Certified NRA Instructor Rifle/ Pistol/ Shotgun/ Range Safety Officer',
    descriptiontwo: 'Advanced Glock Armorer',
    descriptionthree: 'State of Texas License to Carry Instructor',
    descriptionfour: 'Advanced training- Green Ops including red dot training',
    picture: 'https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc=',
  },
  {
    name: 'Mark Kimpler',
    title: 'WOGR',
    description: 'Certified NRA Range Safety Officer',
    descriptiontwo: 'Advanced training- Green Ops including red dot training',
    descriptionthree: 'TDSC Leader/ Instructor',
    picture: 'https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc=',
  },
  {
    name: 'Gregg Wingert',
    title: 'WOGR',
    description: 'Certified NRA Instructor- Rifle/ Pistol/ Personal Home Defense/ Range Safety Officer',
    descriptiontwo: 'State of Texas License to Carry Instructor',
    descriptionthree: 'Advanced training from various instructors including Clint Smith, Bill Blowers, Tim Oxley; Green Ops including red dot training',
    picture: 'https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc=',
  },
  {
    name: 'Brian Rigsby',
    title: 'WOGR',
    description: 'NRA Range Safety Officer',
    descriptiontwo: 'SASS Range Officer Level 1 and Level 2',
    descriptionthree: 'Texas 4-H Certified Shooting Sports Coach',
    descriptionfour: '20+ years competitive shooting experience, Single Action Shooting Society (SASS), USPSA and 3-Gun',
    picture: 'https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc=',
  },
]

export const TempContainer = styled('div')({
  position: 'relative',
  height: '100vh',
  backgroundImage: `url(${whoWeAreImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  marginBottom: '10px',
})

export const TempContainerTwo = styled('div')({
  position: 'relative',
  height: '100vh',
  backgroundImage: `url(${whatWeDoImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  marginBottom: '10px',
});

export const TempContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backgroundImage: `linear-gradient(180deg, rgba(37, 27, 74, 0) 42%, ${mainColor} 93%)`,
  padding: 20,
  boxSizing: 'border-box',
  color: 'white',
})

export const TempContentTwo = styled('div')({
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

export const TempH1 = styled('h1')({
  fontSize: 'clamp(2rem, 2.5vw, 5rem)',
  marginBottom: 10,
  fontFamily: 'sans-serif',
  fontStyle: 'italic',
  textTransform: 'uppercase',
  borderRadius: '12px',
  padding: '10px',
  backdropFilter: 'blur(6px) saturate(150%)',
})

export const TempP = styled('p')({
  fontSize: 'clamp(1.5rem, 1.5vw, 3.5rem)',
  fontFamily: 'sans-serif',
  width: '60%',
  textAlign: 'center',
  borderRadius: '12px',
  padding: '10px',
  backdropFilter: 'blur(6px) saturate(150%)',
})


export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <AboutRoot>
      <TempContainer>
        <TempContent>
          <TempH1>Who we are</TempH1>
          <TempP>
            We are Texas Defensive Shooting Club (TDSC)- Our mission is to lead shooters to become well
            acquainted with their weapon systems, advance speed and accuracy proficiency and promote
            gun safety in order to increase the chance of survival in a deadly threat encounter.
          </TempP>
        </TempContent>
      </TempContainer>
      <TempContainerTwo>
        <TempContentTwo>
          <TempH1>What we do</TempH1>
          <TempP>
            TDSC trains/leads defensive and tactical drills combined with practical scenarios running pistols
            and carbines using various targets and props.
          </TempP>
        </TempContentTwo>
      </TempContainerTwo>
      <div style={{width: '100%', height: '10vh', backgroundColor: mainColor}} />
      <LeaderBiosComponent />
      <div style={{width: '100%', height: '10vh', backgroundColor: mainColor}} />
      <Contact />
    </AboutRoot>
  )
}
