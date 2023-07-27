"use client"

import React from "react";
import styled from "@emotion/styled";
import { useEffect } from "react";
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

const JoinBanner = 'https://preview.free3d.com/img/2019/07/2400324917364000180/l7bb2nw3.jpg'

const PaypalContainer = styled('div')({
  width: "450px",
  height: "55px",
  '@media (max-width: 600px)': {
    width: "250px",
    height: "35px",
  },
})

const JoinPaypalSep = () => {
  
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