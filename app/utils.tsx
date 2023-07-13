import React from "react";
import styled from "@emotion/styled";
import { Button, FormControl, TextField, keyframes } from '@mui/material';
import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
    PayPalMarks,
} from "@paypal/react-paypal-js";
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';

//======================================================
export const mainColor = '#050030' // midnight blue
// export const mainColor = '#F5F5F5' // midnight blue
//======================================================
export const fadeIn = keyframes`
0%    {
  opacity: 0; 
}
60%   {
  opacity: 0;
}
100%  {
  opacity: 1; 
}
`;


//======================================================
//     reusable components
//======================================================

const PaypalContainer = styled('div')({
  width: "450px",
  height: "55px",
  '@media (max-width: 600px)': {
    width: "250px",
    height: "35px",
  },
})

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

export const PaypalSubscribeComponent = () => (
  <PaypalContainer>
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
);

//======================================================


const DonateButtonWrapper = ({ currency }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency]);


  return (<PayPalButtons
      fundingSource="paypal"
      style={{"layout":"vertical","label":"donate"}}
      disabled={false}
      createOrder={(data, actions) => {
          return actions.order
              .create({
                  purchase_units: [
                      {
                          amount: {
                              value: "2",
                              breakdown: {
                                  item_total: {
                                      currency_code: "USD",
                                      value: "2",
                                  },
                              },
                          },
                          items: [
                              {
                                  name: "donation-example",
                                  quantity: "1",
                                  unit_amount: {
                                      currency_code: "USD",
                                      value: "2",
                                  },
                                  category: "DONATION",
                              },
                          ],
                      },
                  ],
              })
              .then((orderId) => {
                  // Your code here after create the donation
                  return orderId;
              });
      }}
  />
  );
}

export const PaypalDonateComponent = () => (
  <PaypalContainer>
      <PayPalScriptProvider
        options={{
            "clientId": "test",
            components: "buttons",
            currency: "USD"
        }}
      >
        <DonateButtonWrapper
          currency={"USD"}
        />
      </PayPalScriptProvider>
  </PaypalContainer>
);

//======================================================

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': 'rgba(51, 51, 51, 0.85)',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&:before, &:after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

const ContactRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 30,
  backgroundColor: 'transparent',
  width: 'clamp(30%, 70%, 900px)',
  borderRadius: '10px',
  gap: '5px',
})

const Namefield = styled(TextField)({
  width: '90%',
  backgroundColor: 'gainsboro',
  opacity: '0.8',
})

const Emailfield = styled(TextField)({
  width: '90%',
  backgroundColor: 'gainsboro',
  opacity: '0.8',
})

const Contactbutton = styled('button')({
  width: '90%',
  height: '3rem',
  opacity: '0.8',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  border: '1px solid darkgrey',
  boxShadow: 'none',
  backgroundColor: 'gainsboro',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontColor: 'rgb(117,117,117)',
  fontFamily: 'sans-serif',
  ':hover': {
    border: '1px solid black',
    backgroundColor: 'rgba(51, 51, 51, 0.85)',
    color: 'rgb(140,152,163)',
  },
  ':active': {
    backgroundColor: 'rgba(51, 51, 51, 0.85)',
    color: 'rgb(140,152,163)',
  },
})

export const ContactComponent = () => {
  const outerTheme = useTheme();
  const [numRows, setNumRows] = React.useState(7); // Initial number of rows

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newNumRows = screenWidth < 600 ? 4 : 7;
      setNumRows(newNumRows);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial number of rows based on screen width

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <ContactRoot>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <Namefield variant="filled" id="mui-theme-provider-filled-input" label="Name" style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
        <Emailfield variant="filled" id="mui-theme-provider-filled-input" label="Email"/>
        <TextField
          variant="filled"
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={numRows}
          style={{width: '90%', backgroundColor: 'gainsboro', opacity: '0.8',}}
        />
        <Contactbutton>Send</Contactbutton>
      </ThemeProvider>
      {/* <FormControl
      style={{
        gap: '1rem',
        width: '100%',
      }}
      >
        <TextField
          required
          id="outlined-required"
          label="Name"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Message"
          variant="outlined"
          multiline={true}
          rows={6}
        />
        <Button
        variant="contained"
        >
          Send
        </Button>
      </FormControl> */}
    </ContactRoot>
  )
};

//======================================================