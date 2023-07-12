import Separator from "app/Components/SeparatorBar/separator";
import { AboutRoot, BiosCard, BiosGrid, WhoWeAreContainer } from "./AboutStyles";

export const LeftShootingPic = "https://coyotecreekoutdoors.com/wp-content/uploads/2023/01/Indoor-gun-range.jpg"
export const BannerRange = 'https://www.frcbr.com/sites/default/files/styles/slider-homepage/public/slides/homepage-slider/ss-the-line-c.jpg?itok=CwXfRslZ'
export const RightShootingPic = 'https://www.alphakoncepts.com/wp-content/uploads/2023/04/AlphaConcepts-Shotgun-2023-04-15-93-scaled.jpg'

export const peopleList = [
  {
    name: 'Greg Baker',
    title: 'G2G',
    description: 'NA',
    picture: 'https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc=',
  },
  {
    name: 'Mark Kimpler',
    title: 'WOGR',
    description: 'Certified NRA Range Safety Officer',
    picture: 'https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc=',
  },
  {
    name: 'Gregg Wingert',
    title: 'WOGR',
    description: 'Certified NRA Instructor',
    picture: 'https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc=',
  },
]

export const pageSeparatorData = {
  title: 'Bios',
  content: 'this is a test',
  image: BannerRange,
  separatorheight: '25vh',
}

export default function AboutPage() {
  return (
    <AboutRoot>
      <WhoWeAreContainer>
        <img src={LeftShootingPic} style={{height: '80%', borderRadius: '10px'}}/>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '80%', width: '30%'}}>
          <h1 style={{color: 'white'}}>Who we are</h1>
          <h3 style={{color: 'white'}}>
            We are Texas Defensive Shooting Club (TDSC)- Our mission is to lead shooters to become well
            acquainted with their weapon systems, advance speed and accuracy proficiency and promote
            gun safety in order to increase the chance of survival in a deadly threat encounter.
          </h3>
          <button>Join now!</button>
        </div>
      </WhoWeAreContainer>
      <WhoWeAreContainer>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', height: '80%', width: '30%'}}>
          <h1 style={{color: 'white'}}>What we do</h1>
          <h3 style={{color: 'white', textAlign: 'right'}}>
            TDSC trains/leads defensive and tactical drills combined with practical scenarios running pistols
            and carbines using various targets and props.
          </h3>
          <button>Join now!</button>
        </div>
        <img src={RightShootingPic} style={{height: '80%', borderRadius: '10px'}}/>
      </WhoWeAreContainer>
      <Separator data={pageSeparatorData}/>
      <BiosGrid>
        {peopleList.map((person) => (
          <BiosCard key={person.name}>
            <img src={person.picture} style={{height: '250px', borderRadius: '10px'}}/>
            <h2>{person.name}</h2>
            <h3>{person.title}</h3>
            <p>{person.description}</p>
          </BiosCard>
        ))}
      </BiosGrid>
    </AboutRoot>
  )
}