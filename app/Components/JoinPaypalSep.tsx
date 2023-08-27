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

  // const getBearerToken = async () => {
  //   const clientId = 'AcKPjLnrK2JAm-TRMLWFtKPelOiKM1eMBrO1DrtYJXxjlH27MP3w5WAWWftvlctu3l3n1s4OnZ1Uurvk';
  //   const clientSecret = 'EDoj-48PevJ8SOg0EftNgMnMEvt45RR-9dkG3HX-SO82zC2uswhMximin2wsXSHnwUpwTkKfdqxrBUw3';
  
  //   const authString = `${clientId}:${clientSecret}`;
  //   const base64Auth = btoa(authString); // Encode the auth string in base64
  
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Basic ${base64Auth}`,
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: 'grant_type=client_credentials',
  //   };
  
  //   try {
  //     const response = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token', requestOptions);
  //     const data = await response.json();
  //     const accessToken = data.access_token;
  
  //     // Now you have the access token, you can use it for further requests
  //     console.log('Access Token:', accessToken);
  //     setBearToken(accessToken);
  //     return accessToken;
  //   } catch (error) {
  //     console.error('Error fetching access token:', error);
  //     throw error;
  //   }
  // };

  const handleApprove = (data, actions) => {
    const order = data.orderID;
    console.log("Order information:", data);
    console.log("Payer information:", order);
    //take the order id and pass it into paypal id and gather json response
    const endpointURL = `https://api-m.sandbox.paypal.com/v2/checkout/orders/${order}`

    // getBearerToken()

    fetch(endpointURL, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer A21AAKckvGosXlIqDzUvMgw8S2TKn2Jy8BBMF9WnGyyLF67Lrn7kH8fCs-1goNVhCyikPw720IXm1CQs55RRjJk9rr0NS-EYw',
        'Content-Type': 'application/json',
      }
    }).then(response => {
      setUserData(response)
      console.log(response)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    return actions.order.capture();
  };

  const [payerEmail, setPayerEmail] = useState("");

  const paypalOptions = {
    "client-id": "AcKPjLnrK2JAm-TRMLWFtKPelOiKM1eMBrO1DrtYJXxjlH27MP3w5WAWWftvlctu3l3n1s4OnZ1Uurvk",
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
        {/* <button onClick={getBearerToken}>test</button> */}
        <ParallaxContent>$75</ParallaxContent>
        <PaypalContainer>
        {/* @ts-ignore */}
        <PayPalScriptProvider options={paypalOptions}>
          <PayPalButtons
            style={{ layout: "vertical", label: "subscribe", color: "gold", shape: "rect", tagline: false,}}
            createOrder={(data, actions) => {
              // console.log(data)
              // Set up the order details
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
{/* <PaypalContainer
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
</PaypalContainer> */}
  // const SubscribeButtonWrapper = ({ type }) => {
  //   const [{ options }, dispatch] = usePayPalScriptReducer();
  
  //   useEffect(() => {
  //         dispatch({
  //             type: "resetOptions",
  //             value: {
  //                 ...options,
  //                 intent: "subscription",
  //             },
  //         });
  //     }, [type]);
  
  //   return (<PayPalButtons
  //     createSubscription={(data, actions) => {
  //       return actions.subscription
  //         .create({
  //           plan_id: "P-3RX065706M3469222L5IFM4I",
  //         })
  //         .then((orderId) => {
  //           // Your code here after create the order
  //           return orderId;
  //         });
  //     }}
  //     style={{
  //       label: "subscribe",
  //     }}
  //   />);
  // }