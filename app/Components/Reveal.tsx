"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

const { div: MotionDiv } = motion;
export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }); // once: true means animation only happens once

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      //fire the animation
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <MotionDiv
        variants={{
          hidden: { opacity: 0, y: 75},
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </MotionDiv>
    </div>
  )
}
