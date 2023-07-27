"use client"

import { ContactRoot, ContactPrimaryTypography, ContactSecondaryTypography, ContactHeader } from "./ContactPageStyles"

import Separator from "app/Components/Separator"
import { ContactSeparatorData } from "app/utils"

export default function ContactPage() {
  return (
    <ContactRoot>
      <ContactHeader>
        <ContactPrimaryTypography >
          Have any questions?
        </ContactPrimaryTypography>
        <ContactSecondaryTypography>
          Reach out to use and we will get back to you as soon as we can!
        </ContactSecondaryTypography>
      </ContactHeader>
      <Separator data={ContactSeparatorData}/>
    </ContactRoot>
  )
}
