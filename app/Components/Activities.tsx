import React from "react";
import styled from "@emotion/styled";
import { Button, keyframes } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { mainColor, greyColorCustom, greyColorCustomDark, greyColorCustomLight } from "../utils";
import { Reveal } from "./Reveal";
import Separator from "./Separator";

export const randomIntGenerator = () => {
  return Math.floor(Math.random() * 1000000000)
}

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

const ActivityContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '70%',
  '@media (max-width: 1268px)': {
    width: '100%',
  },
})

const ActivityGrid = styled('div')({
  width: '80%',
  position: 'relative',
  top: -100,
  justifyItems: 'center',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  display: 'grid',
  flexWrap: 'wrap', 
  gridTemplateColumns: 'repeat(3, 1fr)',
  '@media (max-width: 1268px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
    top: 0,
  },
})

const ActivityCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: greyColorCustomLight,
  padding: '1rem',
  width: '15vw',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '12px',
  border: '1px solid',
  borderColor: 'grey',
  height: '33vh',
  marginBottom: '10px',
  '&:hover': {
    border: '1px solid rgb(37, 83, 185)',
    transition: 'all 0.2s ease-in-out',
  },
  '@media (max-width: 1268px)': {
    width: '30vw',
    height: 'auto',
    // padding: 0,
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
      <ActivityContainer>
        <ActivityGrid>
          {ActivitiesInfo.map((activity) => {
            return (
              <Reveal
                key={randomIntGenerator()}
              >
                <ActivityCard key={activity.title}>
                  {activity.icon}
                  <ActivityTitle>{activity.title}</ActivityTitle>
                  <ActivityDesc>{activity.description}</ActivityDesc>
                  <Button
                    style={{
                      color: 'rgb(102, 164, 255)',
                      fontWeight: 'bold',
                    }}
                  href="/join"
                  >
                    Join now! <KeyboardArrowRightIcon style={{backgroundImage: 'linear-gradient(to right, rgb(37, 83, 185), rgb(102, 164, 255)', borderRadius: '50%', color: greyColorCustomLight, marginLeft: 7}}/>
                  </Button>
                </ActivityCard>
              </Reveal>
            );
          })}
        </ActivityGrid>
      </ActivityContainer>
    </>
  )
}