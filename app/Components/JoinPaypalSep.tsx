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
} from "@paypal/react-paypal-js";
import { CustomParallax, ParallaxContainer, ParallaxContent, ParallaxTitle } from "./Separator";
import axios from "axios";
const JoinBanner = 'https://github.com/snyperifle/TDSC/blob/luke/public/Images/croppedjoin.jpg?raw=true'

const clientID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
const clientSecret = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET
const paypalToken = process.env.NEXT_PUBLIC_PAYPAL_TOKEN

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
  const [userData, setUserData] = useState({});
  const [bearToken, setBearToken] = useState('');

  const isFormValid = email;
  const paypalURL = process.env.NEXT_PUBLIC_PAYPAL_URL
  
  const handleNewPaypalMember = async (shapedUserData) => {
    try {
      const response = await axios.post(paypalURL, shapedUserData);

      if (response.data.message === 'User inserted successfully' || response.data.message === 'User updated successfully') {
        toast.success('You have successfully subscribed to our membership program!');
      } else {
        toast.error('Failed to sign up for membership program.');
      }
      } catch (error) {
        toast.error('An error occurred while signing up.');
      }
    }

  const handleApprove = (data, actions) => {
    const order = data.orderID;
    const endpointURL = `https://api-m.sandbox.paypal.com/v2/checkout/orders/${order}`


    fetch(endpointURL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${paypalToken}`,
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      const shapedUserData = {
        email: data.payer.email_address,
        first_name: data.payer.name.given_name,
        last_name: data.payer.name.surname,
        isEmailSubscribed: 1
      }
      handleNewPaypalMember(shapedUserData)
      setUserData(shapedUserData);
      // console.log(data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    return actions.order.capture();
  };


  const paypalOptions = {
    "client-id": clientID,
  };
  
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
        <PaypalContainer>
        {/* @ts-ignore */}
        <PayPalScriptProvider options={paypalOptions}>
          <PayPalButtons
            style={{ layout: "vertical", label: "subscribe", color: "gold", shape: "rect", tagline: false,}}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "1.00",
                    },
                    description: "Membership Fee",
                  },
                ],
              });
            }}
            onApprove={handleApprove}
          />
        </PayPalScriptProvider>
        </PaypalContainer>
        </ParallaxContainer>
      </CustomParallax>
)};

export default JoinPaypalSep;