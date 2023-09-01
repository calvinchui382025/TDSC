"use client"

import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import qs from "qs";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import {
    PayPalScriptProvider,
    PayPalButtons,
} from "@paypal/react-paypal-js";
import { CustomParallax, ParallaxContainer, ParallaxContent, ParallaxTitle } from "./Separator";
import axios from "axios";
import { render } from "@react-email/render";
import { EmailTemplate } from "app/admin/email/EmailTemplate";
import { MemberTemplate } from "app/admin/MemberTemplate/MemberTemplate";
const JoinBanner = 'https://github.com/snyperifle/TDSC/blob/luke/public/Images/croppedjoin.jpg?raw=true'

const clientID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
const clientSecret = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET
const sendAdminAlertURL = process.env.NEXT_PUBLIC_SEND_ADMIN_ALERT_URL
const sendUserAlertURL = process.env.NEXT_PUBLIC_SEND_USER_ALERT_URL

const PaypalContainer = styled('div')({
  width: "450px",
  height: "55px",
  '@media (max-width: 600px)': {
    width: "250px",
    height: "35px",
  },
  zIndex: 90,
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

  const getBearerToken = async () => {

    const authString = `${clientID}:${clientSecret}`;
    const authBase64 = Buffer.from(authString).toString('base64');

    const headers = {
      'Authorization': `Basic ${authBase64}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const data = qs.stringify({
      'grant_type': 'client_credentials',
    });

    try {
      const response = await axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', data, {
        headers: headers
      });
      if(response.status === 200) {
        const tempTokenVar = response.data.access_token;
        setBearToken(tempTokenVar)
      } else if (response.status === 500) {
        // console.log("Internal server error:", response.status)
      }
    } catch (error) {
      // console.error('An error has occured: ', error);
    }
  }

  useEffect(() => {
    getBearerToken()
  }, []);

  useEffect(() => {
    // console.log(`new bear token: ${bearToken}`)
  }, [bearToken]);

  const handleNewPaypalMember = async (shapedUserData) => {
    const currentWorkflowEmail = shapedUserData.email
    // variables for sending alert to new user---------------
    const emailBody = "Thank you for becoming a member of TDSC! We will send you an email when we have a new shoot scheduled!"
    const emailSubject = "Texas Defensive Shooting Club. Thank you for becoming a member!"
    const selectedRange = "Thank you for becoming a member!";
    const emailSignOff = "TDSC";
    const emailDestination = currentWorkflowEmail;
    const newAlert = render(EmailTemplate(selectedRange, emailBody, emailSignOff))
    //-------------------------------------------------------
    //variables for sending alert to admins-----------------
    const adminEmailBody = `${currentWorkflowEmail} has enrolled to become a member. You should receive their payment on paypal soon.`
    const adminEmailSubject = "New club member!"
    const adminSelectedRange = " "
    const adminEmailSignOff = "TDSC";
    const adminNewAlert = render(MemberTemplate(adminSelectedRange, adminEmailBody, adminEmailSignOff))
    //-------------------------------------------------------

    try {
      const response = await axios.post(paypalURL, shapedUserData);

      if (response.data.message === 'User inserted successfully' || response.data.message === 'User updated successfully') {
        toast.success('You have successfully subscribed to our membership program!');
        axios.post(sendAdminAlertURL, {
            adminNewAlert,
            adminEmailSubject
          },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
          ).then((res) => {
            console.log(res)
          }).catch((err) => {
            console.log(err);
          });
          //---------------------------------------------------
          //--------logic to send email alert to admins--------
          axios.post(sendUserAlertURL, {
            emailDestination,
            newAlert,
            emailSubject
          },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
          ).then((res) => {
            // console.log(res)
          }).catch((err) => {
            // console.log(err);
          });
      } else {
        toast.error('Failed to sign up for membership program.');
      }
      } catch (error) {
        toast.error('An error occurred while signing up.');
      }
    }
  
    const handleApprove = async (data, actions) => {
    const order = data.orderID;
    // console.log("bear token --->", bearToken)
    const endpointURL = `https://api-m.sandbox.paypal.com/v2/checkout/orders/${order}`

    // console.log(endpointURL)

    try {
      const response = await fetch(endpointURL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearToken}`,
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();

      const shapedUserData = {
        email: data.payer.email_address,
        first_name: data.payer.name.given_name,
        last_name: data.payer.name.surname,
        isEmailSubscribed: 1
      }

      // console.log("data:", shapedUserData);
      handleNewPaypalMember(shapedUserData);
      setUserData(shapedUserData);
    } catch (error) {
      // console.log('Error fetching data:', error);
    }
    return actions.order.capture();
  };

  const paypalOptions = {
    "clientId": clientID,
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
        <PayPalScriptProvider options={paypalOptions}>
          <PayPalButtons
            forceReRender={[bearToken]}
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