import styled from '@emotion/styled';
import { Card, Typography } from '@mui/material';
// import { greyColorCustomDark } from 'app/utils';
//======================================================
export const LocationRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: '5rem',
  color: 'white',
  backgroundColor: 'rgb(34,38,41)',
});

export const WholeCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  alignItems: 'center',
  // width: 'clamp(250px, 80%, 1600px)',
  width: '100%',
  // borderRadius: '5px',
  border: '1px solid rgb(52,124,245)',
  backgroundColor: 'rgb(27,31,34)',
  color: 'white',
  padding: '24px',
  margin: '24px',
  // display: 'flex',
  // boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
  '@media (max-width: 1268px)': {
    minHeight: 'auto',
    height: 'auto',
  },
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    // height: '100%',
  },

})

export const CardDataContainer = styled('div')({
  width: '40%',
  backdropFilter: 'blur(60px)',
  // height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '12px',
  '@media (max-width: 600px)': {
    width: '100%',

  },
});
export const RangeNameText = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: 'white',
  marginBottom: '10px',
  '@media (max-width: 600px)': {
    fontSize: '1.5rem',
  },
});
export const RegularText = styled(Typography)({
  fontSize: '1rem',
  // textShadow: '1px 1px 1px black',
  color: 'gainsboro',
  '@media (max-width: 600px)': {
    fontSize: '0.8rem',
  },
})
export const CardMapContainer = styled('div')({
  width: '80%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    width: '100%',
  },
  // borderRadius: '24px',
})
export const PriceText = styled(Typography)({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: 'white',
  marginBottom: '10px',
  '@media (max-width: 600px)': {
    fontSize: '1rem',
  },
});
export const InfoContainer = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  alignItems: 'center',
});

export const RangeCardImage = styled('img')({
  width: '80%',
  '@media (max-width: 600px)': {
    width: '100%',
  },
})

export const AddressLink = styled('a')({
  textDecoration: 'none',
})

export const StyledRegularText = styled(RegularText)({
  color: 'rgb(52,124,245)',
  fontWeight: 'bold'
})