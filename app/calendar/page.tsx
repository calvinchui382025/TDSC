"use client"

import React from "react";
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarBox, CalendarRoot } from "./CalendarStyles";

export default function CalendarPage() {

  return (
    <CalendarRoot>
      <div>
        <h1 style={{color: 'white'}}>Calendar</h1>
      </div>
      <CalendarBox>
        <iframe src="https://calendar.google.com/calendar/embed?src=rdpistolclub%40gmail.com&ctz=America%2FChicago" style={{border: 0}} width="800" height="600" scrolling="no"></iframe>
      </CalendarBox>
    </CalendarRoot>
  )
}