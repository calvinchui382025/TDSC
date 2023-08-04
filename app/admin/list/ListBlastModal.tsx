import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import styled from '@emotion/styled';
import { FormControl, InputLabel, Select, MenuItem, TextField, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';
import { greyColorCustomLight, randomIntGenerator } from 'app/utils';
import "setimmediate"
import axios from 'axios';
//======================================================
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledTableCell = styled(TableCell)({
  color: 'white',
  borderBottom: "none",
  fontSize: '1.2rem',
  fontWeight: '300',
})

const ContentWrapper = styled('div') ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  margin: '0.5rem',
  backgroundColor: greyColorCustomLight,
})

const CustomTextField = styled(TextField) ({
  width: '80%',
  margin: '0.5rem',
})
//======================================================
const rangeOptions = [
  'Wallis-Orchard Gun Range',
  'G2G Gun Range',
]

export default function FullScreenDialog( props: any ) {
  const { isOpen, closeFunc } = props;
  const [ selectedRange, setSelectedRange ] = React.useState(rangeOptions[0]);
  const [ subjectLine, setSubjectLine ] = React.useState('');
  const [ emailBody, setEmailBody ] = React.useState('');
  const [ emailSignOff, setEmailSignOff ] = React.useState('');

  const { userData } = props;

  // if (!userData || !userData.users) {
  //   return null; // Return null or a loading indicator here if data is still being fetched or if there's an error
  // }

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRange(event.target.value);
  };

  const handleEmailBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailBody(event.target.value);
  };

  const handleSubjectLineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectLine(event.target.value);
  };

  const handleEmailSignOffChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailSignOff(event.target.value);
  };

  const handleClose = () => {
    closeFunc(false);
  };

  function handleSend() {
    axios.post('/api/sendEmail', {
        selectedRange,
        subjectLine,
        emailBody,
        emailSignOff,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      ).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });

    // setEmailBody('');
    closeFunc(false);
  }

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Send Email Blast
          </Typography>
        </Toolbar>
      </AppBar>
    <ContentWrapper>
      <Table sx={{ borderRadius: '10px 0 0 10px' }}>
        <TableHead sx={{ backgroundColor: 'rgb(32, 36, 43)' }}>
          <TableRow>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Email Subscribed</StyledTableCell>
            <StyledTableCell>Membership Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((item: any, index: number) => (
            <TableRow
              style={{
                backgroundColor: index % 2 === 0 ? 'rgb(51, 56, 66)' : 'rgb(32, 36, 43)',
              }}
              key={index}
            >
              <StyledTableCell>{item.email}</StyledTableCell>
              <StyledTableCell>{item.firstName}</StyledTableCell>
              <StyledTableCell>{item.lastName}</StyledTableCell>
              <StyledTableCell>{item.isEmailSubscribed ? 'Yes' : 'No'}</StyledTableCell>
              <StyledTableCell>{item.membershipDate}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ContentWrapper>
    </Dialog>
  );
}