
import react from "react"
import styled from "@emotion/styled"
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material"

export const CalendarRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
})

export const CalendarBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '10px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
})