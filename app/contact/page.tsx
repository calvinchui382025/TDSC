"use client"

import styled from "@emotion/styled"
import { useState } from "react"
import { ContactRoot, ContactPrimaryTypography, ContactSecondaryTypography, ContactHeader } from "./ContactPageStyles"

import Separator from "app/Components/SeparatorBar/separator"
import { ContactSeparatorData } from "app/utils"
import { Footer } from "app/Components/footer/footer"

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
      <Footer />
    </ContactRoot>
  )
}
