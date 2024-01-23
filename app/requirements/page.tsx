"use client"

import { GearRequirementContainer, GearRequirementContent, NoteContainer, PlaceContainer, ProficiencyTitle, ReqContainer, RequirementH1, RequirementP } from "./requirementstyles";
import { mainColor, randomIntGenerator } from "app/utils";
import { Contact } from "app/Components/Contact";
import { Reveal } from "app/Components/Reveal";

const GearRequirements = [
  'Reliable semi-auto pistols (revolvers) and carbines (AR) including pistol caliber carbines',
  'G2G- 100-120 rounds pistol ammo per shoot FULL METAL JACKET ONLY!!!',
  'WOGR- 50-60 rounds each pistol &amp; carbine per shoot',
  'Safe holster designed for specific pistol used (shoulder holsters not permitted)',
  'Mag pouch to accommodate 3 magazines (3 pistol; 2 carbine mag pouches at WOGR)',
  'Carbine sling that can cinch close to body',
  'Safety shooting glasses',
  'Hearing protection',
  'Rigid belt',
]

export default function GearPage() {
  return (
    <ReqContainer>
      <ProficiencyTitle>
        <h1>PROFICIENCY REQUIREMENTS</h1>
      </ProficiencyTitle>
      <ProficiencyTitle>
        <PlaceContainer
        style={{
          backgroundImage: `url(https://github.com/snyperifle/TDSC/blob/luke/public/Images/wogrrequirements.jpg?raw=true)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          <h1>WOGR</h1>
          <h2>Intermediate/ Advanced Shooters (Not recommended for beginning shooters)</h2>
          <h2>Carbines- 5.56; 300 BO; most calibers suitable w/ AR-15 platform and under 2,800 fps; most all pistol caliber carbines; Pistol minimum/ 380 and up; 22 rimfire NOT recommended</h2>
        </PlaceContainer>
        <PlaceContainer
        style={{
          backgroundImage: `url(https://github.com/snyperifle/TDSC/blob/luke/public/Images/g2grequirements.jpg?raw=true)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          <h1>G2G</h1>
          <h2>Beginner/ Intermediate/ Advanced Shooters</h2>
          <h2>Pistol minimum/ 380 and up; revolver calibers- 22 rimfire NOT recommended</h2>
        </PlaceContainer>
      </ProficiencyTitle>
      <NoteContainer>
      NOTE!!!- 308 and larger calibers on AR-10 platforms NOT PERMITTED; NO GREEN TIP OR STEEL CORE AMMO PERMITTED as they divot our steel.
      </NoteContainer>
      <GearRequirementContainer>
        <GearRequirementContent>
          <RequirementH1>GEAR REQUIREMENTS</RequirementH1>
            {GearRequirements.map(item => {
              return (
                <Reveal
                key={randomIntGenerator()}
                >
                  <RequirementP>
                    {item}
                  </RequirementP>
                </Reveal>
              )
            })}
        </GearRequirementContent>
      </GearRequirementContainer>
      <div style={{width: '100%', height: '10vh', backgroundColor: mainColor}} />
      <Contact />
    </ReqContainer>
  )
}