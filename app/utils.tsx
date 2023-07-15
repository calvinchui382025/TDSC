import React from "react";
import styled from "@emotion/styled";
import { Button, FormControl, TextField, keyframes } from '@mui/material';
import { useEffect } from "react";
import Separator from "./Components/SeparatorBar/separator";
import { pageSeparatorData } from "./about/page";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

//======================================================
// export const mainColor = '#050030' // midnight blue
export const mainColor = 'rgb(36,40,43)' // midnight blue
export const greyColorCustom = 'rgb(36,40,43)'
export const greyColorCustomDark = 'rgb(27,31,34)'
export const greyColorCustomLight = 'rgb(45,49,52)'
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
//     reusable components
//======================================================

//======================================================

const ActivityImage = 'https://www.clackamas.us/sites/default/files/2019-06/gun-range.jpg'
const CaliberImage = 'https://media.istockphoto.com/id/1413053043/photo/two-9mm-pistols-hold-slides-on-a-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=W_NbM0AV6Io5VXLM7aqNnaD8-XHoPVGNjWP-XzBjpBQ='
const TransparentImage = 'https://cdn11.bigcommerce.com/s-9de6f3ck5f/images/stencil/original/image-manager/gun-wall-builder-homepage-banner-edited-1-3-.png?t=1671692930'


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
    title: '3 Gun Shoots',
    description: 'Join TDSC for an exciting and unforgettable 3 Gun Shoot where you experience shooting a handgun, rifle, and shotgun while moving from one stage to another, engaging targets with each firearm. See our calendar for shoot schedule and locations.',
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
  gap: '1.25rem',
  gridTemplateColumns: 'repeat(4, 1fr)',
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
  height: '25vh',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '12px',
  border: '1px solid',
  borderColor: 'grey',
  //hover
  '&:hover': {
    border: '1px solid rgb(37, 83, 185)',
    transition: 'all 0.2s ease-in-out',
  },
  '@media (max-width: 1268px)': {
    width: '30vw',
    height: '25vh',
  },
  '@media (max-width: 480px)': {
    width: '65vw',
    height: '25vh',
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
        {ActivitiesInfo.map((activity) => (
          <ActivityCard key={activity.title}>
            {activity.icon}
            {/* <img src={activity.picture}style={{height: '250px', borderRadius: '10px'}}/> */}
            <ActivityTitle>{activity.title}</ActivityTitle>
            <ActivityDesc>{activity.description}</ActivityDesc>
          </ActivityCard>
        ))}
      </ActivityGrid>
    </>
  )
}

//======================================================