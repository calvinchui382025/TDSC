"use client"

import Separator from "app/Components/SeparatorBar/separator";
import { JoinPrimaryTypography, JoinRoot, JoinSecondaryTypography } from "./JoinStyles";
import { LeftShootingPic } from "app/about/page";
import { ContactComponent, PaypalDonateComponent, PaypalSubscribeComponent } from "app/utils";
import { Footer } from "app/Components/footer/footer";
export const ContactBannerJoin = 'https://flintriverindoorshootingrange.com/wp-content/uploads/2021/05/three-1-a.jpg'
export const JoinBanner = 'https://preview.free3d.com/img/2019/07/2400324917364000180/l7bb2nw3.jpg'

export const ContactSeparatorData = {
  // title: 'Want to find out more?',
  // content: 'Reach out to us and well be happy to answer any questions you have have!',
  content: 'Contact us!',
  image: ContactBannerJoin,
  separatorheight: '75vh',
  dom: <ContactComponent/>,
}

export const JoinSeparatorData = {
  title: 'Annual membership fee',
  content: '$75',
  image: JoinBanner,
  separatorheight: '55vh',
  dom: <PaypalSubscribeComponent/>,
}

export default function JoinPage() {
  return (
    <JoinRoot>
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'black',
        width: '70%',
        height: '35vh',
      }}
      >
        <JoinPrimaryTypography
        style={{
          width: '60%',
        }}
        >
          Your Annual Membership fee helps TDSC supply targets, steel props, stands and other necessary equipment needed for safe and fun shooting.
        </JoinPrimaryTypography>
        <JoinSecondaryTypography>
        An Annual Membership is not required to attend TDSC Shoots.
        </JoinSecondaryTypography>
      </div>
      <Separator data={JoinSeparatorData}/>
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'black',
        width: '70%',
        height: '35vh',
      }}
      >
        <JoinPrimaryTypography>Help Our Cause</JoinPrimaryTypography>
        <JoinSecondaryTypography>Your support and contributions will enable us to meet our goals and improve conditions. Your generous donation will fund our mission.</JoinSecondaryTypography>
        <PaypalDonateComponent />
      </div>
      <Separator data={ContactSeparatorData}/>
      <Footer />
    </JoinRoot>
  )
}