"use client"

import { ContactRoot, ContactPrimaryTypography, ContactSecondaryTypography, ContactHeader } from "./ContactPageStyles"
import { Contact } from "app/Components/Contact"

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
      <Contact />
    </ContactRoot>
  )
}
