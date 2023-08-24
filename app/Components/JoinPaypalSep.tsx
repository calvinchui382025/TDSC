"use client"

import React from "react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
    PayPalMarks,
} from "@paypal/react-paypal-js";
import { CustomParallax, ParallaxContainer, ParallaxContent, ParallaxTitle } from "./Separator";
// import { Parallax } from 'react-parallax';
// import main from './banner2.jpg';
// import secondary from './banner3.jpg';
// import { CustomParallax, ParallaxContainer, ParallaxContent, ParallaxTitle } from './SeparatorBar/SeparatorStyles';

// const JoinBanner = 'https://preview.free3d.com/img/2019/07/2400324917364000180/l7bb2nw3.jpg'
const JoinBanner = 'https://github.com/snyperifle/TDSC/blob/luke/public/Images/croppedjoin.jpg?raw=true'

const PaypalContainer = styled('div')({
  width: "450px",
  height: "55px",
  '@media (max-width: 600px)': {
    width: "250px",
    height: "35px",
  },
})

const emailBody = "Thank you for signing up for email alerts! We will send you an email when we have a new shoot scheduled. Please consider joining the club to help support our efforts!"
const emailSubject = "Texas Defensive Shooting Club. Thank you for signing up for email alerts!"

const JoinPaypalSep = () => {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const isFormValid = email;
  const paypalURL = process.env.NEXT_PUBLIC_PAYPAL_URL
  
  const handleNewPaypalMember = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      if (firstname === "") {
        setFirstname(null);
      }
      if (lastname === "") {
        setLastname(null);
      }
      const newUser = {
        email: email,
        first_name: firstname,
        last_name: lastname,
        isEmailSubscribed: 1
      };
      //logic for endpoint
      try {
        const response = await fetch(paypalURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });

        const data = await response.json();
        
        if (data.success) {
          toast.success('You have successfully subscribed to our membership program!');
        } else {
          if (data.error && data.error === 'Email already exists in the database') {
            toast.error('That emailed is already signed up for a membership!');
            console.log(data.error)
          } else {
            toast.error('Failed to sign up for membership program.');
          }
        }
      } catch (error) {
        toast.error('An error occurred while signing up.');
      }
    };
  };
  
  const SubscribeButtonWrapper = ({ type }) => {
    const [{ options }, dispatch] = usePayPalScriptReducer();
  
    useEffect(() => {
          dispatch({
              type: "resetOptions",
              value: {
                  ...options,
                  intent: "subscription",
              },
          });
      }, [type]);
  
    return (<PayPalButtons
      createSubscription={(data, actions) => {
        return actions.subscription
          .create({
            plan_id: "P-3RX065706M3469222L5IFM4I",
          })
          .then((orderId) => {
            // Your code here after create the order
            return orderId;
          });
      }}
      style={{
        label: "subscribe",
      }}
    />);
  }

  return (
    <CustomParallax
    style={{
      height: '55vh',
    }}
    bgImage={JoinBanner}
    strength={950}
    >
      <ParallaxContainer
      style={{
        height: '55vh',
      }}
      >
        <ParallaxTitle>Annual membership fee</ParallaxTitle>
        <ParallaxContent>$75</ParallaxContent>
        <PaypalContainer
        style={{
          zIndex: 99,
        }}
        >
          <PayPalScriptProvider
            options={{
              clientId: "test",
              components: "buttons",
              intent: "subscription",
              vault: true,
            }}
          >
            <SubscribeButtonWrapper type="subscription" />
          </PayPalScriptProvider>
        </PaypalContainer>
      </ParallaxContainer>
    </CustomParallax>
)};

export default JoinPaypalSep;