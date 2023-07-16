"use client"

import react, { useEffect } from "react"
import styled from "@emotion/styled"
import Separator from "app/Components/SeparatorBar/separator";
import { JoinHeader, JoinPrimaryTypography, JoinRoot, JoinSecondaryTypography } from "./JoinStyles";
import { Footer } from "app/Components/footer/footer";
import { ContactComponent } from "app/Components/contactcomponent";
import { PaypalDonateComponent, PaypalSubscribeComponent } from "app/Components/paypalcomponents";
import { ContactSeparatorData, JoinSeparatorData } from "app/utils";

export default function JoinPage() {
  return (
    <JoinRoot>
      <JoinHeader>
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
      </JoinHeader>
      <Separator data={JoinSeparatorData}/>
      <JoinHeader>
        <JoinPrimaryTypography>Help Our Cause</JoinPrimaryTypography>
        <JoinSecondaryTypography>Your support and contributions will enable us to meet our goals and improve conditions. Your generous donation will fund our mission.</JoinSecondaryTypography>
        <PaypalDonateComponent />
      </JoinHeader>
      <Separator data={ContactSeparatorData}/>
      <Footer />
    </JoinRoot>
  )
}
