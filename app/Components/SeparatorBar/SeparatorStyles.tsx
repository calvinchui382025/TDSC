"use client"

import styled from "@emotion/styled"
import { Parallax } from 'react-parallax';

export const CustomParallax = styled(Parallax)({
  position: 'relative',
  width: '100%',
})

export const ParallaxContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
})