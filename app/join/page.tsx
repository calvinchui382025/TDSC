"use client"

// import react, { useEffect } from "react"
// import styled from "@emotion/styled"
import Separator from "app/Components/SeparatorBar/separator";
import { JoinHeader, JoinHeaderContent, JoinPrimaryTypography, JoinRoot, JoinSecondaryTypography, JoinStyledButton, Learnmorecontainer, RangeCard, RangeCardSubText } from "./JoinStyles";
// import { Footer } from "app/Components/footer/footer";
// import { ContactComponent } from "app/Components/contactcomponent";
import { PaypalDonateComponent } from "app/Components/paypalcomponents";
import { ContactSeparatorData, randomIntGenerator, 
  // greyColorCustomLight, mainGradient 
} from "app/utils";
// import { Button } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Reveal } from "app/Components/Reveal";
// import { SlideReveal } from "app/Components/SlideReveal";
import JoinPaypalSep from "app/Components/JoinPaypalSep";

// const gearRequirements = [
//   'Reliable semi-auto pistols (revolvers) and carbines (AR) including pistol caliber carbines',
//   'G2G- 100-120 rounds pistol ammo per shoot FULL METAL JACKET ONLY!!!',
//   'WOGR- 50-60 rounds each pistol &amp; carbine per shoot',
//   'Rigid belt',
//   'Safe holster designed for specific pistol used (shoulder holsters not permitted)',
//   'Mag pouch to accommodate 3 magazines (3 pistol; 2 carbine mag pouches at WOGR)',
//   'Carbine sling that can cinch close to body',
//   'Safety shooting glasses',
//   'Hearing protection',
// ]

// const caliberRequirements = [
//   'G2G- Pistol minimum/ 380 and up; revolver calibers- 22 rimfire NOT recommended',
//   'WOGR- Carbines- 5.56; 300 BO; most calibers suitable w/ AR-15 platform and under 2,800 fps; most all pistol caliber carbines; Pistol minimum/ 380 and up; 22 rimfire NOT recommended',
//   'NOTE!!!- 308 and larger calibers on AR-10 platforms NOT PERMITTED; NO GREEN TIP ORSTEEL CORE AMMO PERMITTED as they divot our steel.',
// ]

const twoRanges = [
  {
    title: 'G2G',
    description: 'shoot for members and non-members',
    price: '$25',
    proficiency: 'Beginner/ Intermediate/ Advanced Shooters.',
  },
  {
    title: 'WOGR',
    description: 'shoot for members',
    price: '$23',
    secondaryDescription: 'shoot for non-members',
    secondaryPrice: '$30',
    proficiency: 'Intermediate/ Advanced Shooters (Not recommended for beginning shooters).',
  },
]

export default function JoinPage() {
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
        {twoRanges.map((range) => {
          return (
            // <SlideReveal>
              <RangeCard
                key={randomIntGenerator()}
              >
                <h1>{range.title}</h1>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <RangeCardSubText style={{color: 'rgb(52,124,245)'}}>{range.price}</RangeCardSubText>
                  <RangeCardSubText>{range.description}</RangeCardSubText>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <RangeCardSubText style={{color: 'rgb(52,124,245)'}}>{range.secondaryPrice}</RangeCardSubText>
                  <RangeCardSubText>{range.secondaryDescription}</RangeCardSubText>
                </div>
                <JoinStyledButton href="/locations">
                  Learn more about {range.title}! <KeyboardArrowRightIcon style={{fontSize: '2rem'}}/>
                </JoinStyledButton>
                {/* <button>
                  Learn more about {range.title}!
                </button> */}
              </RangeCard>
            // </SlideReveal>
          )
        })}
        <JoinStyledButton href="/locations">
          Learn more about our club requirements <KeyboardArrowRightIcon style={{fontSize: '2rem'}}/>
        </JoinStyledButton>
      </Learnmorecontainer>
      {/* <div>
        <h1>Gear and caliber requirements</h1>
        {gearRequirements.map((item) => {
          return (
            <p>{item}</p>
          )
        })}
      </div> */}
      <JoinHeader>
        <Reveal>
          <JoinHeaderContent>
            <JoinPrimaryTypography>Help Our Cause</JoinPrimaryTypography>
            <JoinSecondaryTypography>Your support and contributions will enable us to meet our goals and improve conditions. Your generous donation will fund our mission.</JoinSecondaryTypography>
            <PaypalDonateComponent />
          </JoinHeaderContent>
        </Reveal>
      </JoinHeader>
      <Separator data={ContactSeparatorData}/>
      {/* <Footer /> */}
    </JoinRoot>
  )
}