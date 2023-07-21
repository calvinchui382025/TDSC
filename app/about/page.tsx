"use client"

import { useState, useEffect } from "react";
import Separator from "app/Components/SeparatorBar/separator";
import { AboutImage, AboutRoot, BiosCard, BiosGrid, WhatWeDoTextContainer, WhoWeAreContainer, WhoWeAreTextContainer } from "./AboutStyles";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Footer } from "app/Components/footer/footer";
import { ContactSeparatorData, greyColorCustomLight, mainGradient } from "app/utils";

const LeftShootingPic = "https://coyotecreekoutdoors.com/wp-content/uploads/2023/01/Indoor-gun-range.jpg"
const BannerRange = 'https://www.frcbr.com/sites/default/files/styles/slider-homepage/public/slides/homepage-slider/ss-the-line-c.jpg?itok=CwXfRslZ'
const RightShootingPic = 'https://www.alphakoncepts.com/wp-content/uploads/2023/04/AlphaConcepts-Shotgun-2023-04-15-93-scaled.jpg'
const RangePicture = 'https://flintriverindoorshootingrange.com/wp-content/uploads/2021/05/three-1-a.jpg'

const peopleList = [
  {
    name: 'Greg Baker',
    title: 'G2G',
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
]

const pageSeparatorData = {
  title: 'Bios',
  // content: 'Meet our ',
  image: BannerRange,
  separatorheight: '25vh',
}

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
      <WhoWeAreContainer>
        <AboutImage src={LeftShootingPic} />
        <WhoWeAreTextContainer>
          <h1 style={{color: 'white', fontFamily: 'sans-serif'}}>Who we are</h1>
          <h3 style={{color: 'white', fontFamily: 'sans-serif', display: 'inline-block'}}>
            We are Texas Defensive Shooting Club (TDSC)- Our mission is to lead shooters to become well
            acquainted with their weapon systems, advance speed and accuracy proficiency and promote
            gun safety in order to increase the chance of survival in a deadly threat encounter.
          </h3>
          <Button
          style={{
            color: 'gainsboro',
            fontWeight: 'bold',
            backgroundColor: 'grey',
            border: '2px solid',
            backgroundImage: mainGradient,
          }}
          >
            Join now! <KeyboardArrowRightIcon />
          </Button>
        </WhoWeAreTextContainer>
      </WhoWeAreContainer>
      <WhoWeAreContainer>
        {isMobile && <AboutImage src={RightShootingPic} />}
        <WhatWeDoTextContainer>
          <h1 style={{color: 'white', fontFamily: 'sans-serif'}}>What we do</h1>
          <h3 style={{color: 'white', fontFamily: 'sans-serif', textAlign: 'right'}}>
            TDSC trains/leads defensive and tactical drills combined with practical scenarios running pistols
            and carbines using various targets and props.
          </h3>
          <Button
          style={{
            color: 'gainsboro',
            fontWeight: 'bold',
            backgroundColor: 'grey',
            border: '2px solid',
            backgroundImage: mainGradient
          }}
          >
            Join now! <KeyboardArrowRightIcon />
          </Button>
        </WhatWeDoTextContainer>
        {!isMobile && <AboutImage src={RightShootingPic} />}
      </WhoWeAreContainer>
      <Separator data={pageSeparatorData}/>
      <BiosGrid>
        {peopleList.map((person) => (
          <BiosCard key={person.name}>
            <img src={person.picture}style={{height: '20vh', borderRadius: '10px'}}/>
            <h2 style={{fontFamily: 'sans-serif', margin: 5, color: 'gainsboro'}}>{person.name}</h2>
            <h3 style={{fontFamily: 'sans-serif', margin: 5, color: 'gainsboro'}}>{person.title}</h3>
            <p style={{fontFamily: 'sans-serif', margin: 5, color: 'gainsboro'}}>{person.description}</p>
            <p style={{fontFamily: 'sans-serif', margin: 5, color: 'gainsboro'}}>{person.descriptiontwo}</p>
            <p style={{fontFamily: 'sans-serif', margin: 5, color: 'gainsboro'}}>{person.descriptionthree}</p>
            <p style={{fontFamily: 'sans-serif', margin: 5, color: 'gainsboro'}}>{person.descriptionfour}</p>
            <Button
              style={{
                color: 'rgb(102, 164, 255)',
                fontWeight: 'bold',
              }}
            >
              Contact <KeyboardArrowRightIcon style={{backgroundImage: 'linear-gradient(to right, rgb(37, 83, 185), rgb(102, 164, 255)', borderRadius: '50%', color: greyColorCustomLight, marginLeft: 7}}/>
            </Button>
          </BiosCard>
        ))}
      </BiosGrid>
      <Separator data={ContactSeparatorData}/>
      <Footer />
    </AboutRoot>
  )
}
