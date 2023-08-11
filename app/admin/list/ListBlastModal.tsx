import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import moment from 'moment';
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
  color: 'gainsboro',
  borderBottom: '1px solid gainsboro',
  fontWeight: '300',
  letterSpacing: '0.5px',
})

const ContentWrapper = styled('div') ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  padding: '1rem',
  backgroundColor: greyColorCustomLight,
})

const CustomTextField = styled(TextField) ({
  width: '80%',
  margin: '0.5rem',
})

const StyledFormControl = styled(FormControl)({
  width: '10%',
  '@media (max-width: 600px)': {
    width: '40%',
  }
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
  const [ filter, setFilter ] = React.useState('');

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

  const handleMemberFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredUserData = userData.filter((item) => {
    if (filter === 'all') {
      return true; // Show all
    } else if (filter === 'members') {
      return item.membershipDate !== null; // Show members based on membership date condition
    } else if (filter === 'subscribers') {
      return item.isEmailSubscribed === 1; // Show subscribers based on email subscription status
    }
    return true; // Default case
  });

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
      <AppBar sx={{ position: 'relative', paddingTop: '0.35rem', paddingBottom: '0.35rem' }}>
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
            Email Member and Subscriber list
          </Typography>
          <StyledFormControl>
            <InputLabel style={{color: 'gainsboro'}} id="demo-simple-select-label">Filter</InputLabel>
            <Select
              style={{ color: 'gainsboro', border: '1px solid gainsboro' }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Filter"
              onChange={handleMemberFilter}
            >
              <MenuItem value="all">Show all</MenuItem>
              <MenuItem value="members">Show members</MenuItem>
              <MenuItem value="subscribers">Show subscribers</MenuItem>
            </Select>
          </StyledFormControl>
        </Toolbar>
      </AppBar>
    <ContentWrapper>
      <Table sx={{ borderRadius: '10px 0 0 10px' }}>
        <TableHead sx={{ backgroundColor: 'rgb(32, 36, 43)' }}>
          <TableRow>
            <StyledTableCell style={{fontSize: '1.25rem', color: 'white'}}>ID</StyledTableCell>
            <StyledTableCell style={{fontSize: '1.25rem', color: 'white'}}>Email</StyledTableCell>
            <StyledTableCell style={{fontSize: '1.25rem', color: 'white'}}>First Name</StyledTableCell>
            <StyledTableCell style={{fontSize: '1.25rem', color: 'white'}}>Last Name</StyledTableCell>
            <StyledTableCell style={{fontSize: '1.25rem', color: 'white'}}>Email Subscribed</StyledTableCell>
            <StyledTableCell style={{fontSize: '1.25rem', color: 'white'}}>Membership Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUserData.map((item: any, index: number) => (
            <TableRow
              style={{
                backgroundColor: index % 2 === 0 ? 'rgb(51, 56, 66)' : 'rgb(32, 36, 43)',
              }}
              key={index}
            >
              <StyledTableCell>{item.id}</StyledTableCell>
              <StyledTableCell>{item.email}</StyledTableCell>
              <StyledTableCell>{item.first_name ? item.first_name : "N/A"}</StyledTableCell>
              <StyledTableCell>{item.last_name ? item.last_name : "N/A"}</StyledTableCell>
              <StyledTableCell>{item.isEmailSubscribed ? 'Yes' : 'No'}</StyledTableCell>
              <StyledTableCell>{item.membershipDate ? moment(item.membershipDate).format("MMMM Do YYYY") : "MM-DD-YYYY"}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ContentWrapper>
    </Dialog>
  );
}