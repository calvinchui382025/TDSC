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
import { FormControl, InputLabel, Select, MenuItem, TextField, Table, TableHead, TableRow, TableBody, TableCell, Checkbox, Switch } from '@mui/material';
import { greyColorCustomLight, randomIntGenerator } from 'app/utils';
import "setimmediate"
import axios from 'axios';
import { toast } from 'react-toastify';
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
  // borderBottom: '1px solid gainsboro',
  fontWeight: '300',
  letterSpacing: '0.5px',
})

const ContentWrapper = styled('div') ({
  display: 'flex',
  height: '100%',
  width: '100%',
  backgroundColor: greyColorCustomLight,
  overflow: 'scroll',
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

const UpdateTextField = styled(TextField)({
  color: 'gainsboro',
  outline: '2px solid gainsboro',
  borderRadius: '6px',
  '& input': {
    color: 'gainsboro',
  },
  //active

})
//======================================================
const rangeOptions = [
  'Wallis-Orchard Gun Range',
  'G2G Gun Range',
]

const updateURL = process?.env?.NEXT_PUBLIC_TABLEUPDATE_URL

export default function FullScreenDialog( props: any ) {
  const { isOpen, closeFunc } = props;
  const [ selectedRange, setSelectedRange ] = React.useState(rangeOptions[0]);
  const [ subjectLine, setSubjectLine ] = React.useState('');
  const [ emailBody, setEmailBody ] = React.useState('');
  const [ emailSignOff, setEmailSignOff ] = React.useState('');
  const [ filter, setFilter ] = React.useState('');
  const [ stagedRow, setStagedRow ] = React.useState('')

  const [ updatedEmail, setUpdatedEmail ] = React.useState('');
  const [ updatedFirstName, setUpdatedFirstName ] = React.useState('');
  const [ updatedLastName, setUpdatedLastName ] = React.useState('');

  // const [ newData, setNewData ] = React.useState({})
  const [updatedData, setUpdatedData] = React.useState({});

  const { userData } = props;

  const handleSaveClick = (item) => {
    const newData = {
      id: item.id || '',
      email: item.email || '',
      first_name: updatedFirstName || null,
      last_name: updatedLastName || null,
      isEmailSubscribed: item.isEmailSubscribed,
      membershipDate: item.membershipDate,
    };
    const confirmation = window.confirm('Are you sure you want to save the changes?');
  
    if (confirmation) {
      setUpdatedData(newData);
      console.log("Updated Data:", newData);
      //send newData to the endpoint to update the data
      axios.post(updateURL, newData)
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });

      setStagedRow('');
      window.alert('Changes were saved successfully!');
    } else {
    }
  };

  const handleDeleteRow =  async ({itemObjectForDeletion}) => {
    console.log("disabled for further development")
    // const item = itemObjectForDeletion
    // const identifier = itemObjectForDeletion.email
    // const deleteURL = process.env.NEXT_PUBLIC_DELETE_URL;

    // const confirmation = window.confirm(`Are you sure you want to delete ${item.email}? from the database`);

    // if (confirmation) {
    //   //logic for endpoint
    //   try {
    //     const response = await axios.delete(deleteURL, {
    //       data: { identifier },
    //     });
    //     if(response.status === 200) {
    //       toast.success(`Successfully removed ${item.email}? from the database`, {
    //         position: "top-right",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //         });
    //     } else if (response.status === 500) {
    //       console.log("Internal server error:", response.status)
    //     }
    //   } catch (error) {
    //     console.error('An error has occured: ', error);
    //   }
    //   // console.log(`Successfully removed ${item.email}? from the database`)
    // } else {
    //   console.log(`There was an error removing ${item.email}? from the database`)
    // }
  }

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

  // function handleSend() {
  //   axios.post('/api/sendEmail', {
  //       selectedRange,
  //       subjectLine,
  //       emailBody,
  //       emailSignOff,
  //     },
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }
  //     }
  //     ).then((res) => {
  //       console.log(res);
  //     }).catch((err) => {
  //       console.log(err);
  //     });

  //   // setEmailBody('');
  //   closeFunc(false);
  // }

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
              style={{ color: 'gainsboro'}}
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
      <Table size='small' >
        <TableHead sx={{ backgroundColor: 'rgb(32, 36, 43)' }}>
          <TableRow>
            <StyledTableCell >Select</StyledTableCell>
            <StyledTableCell >ID</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >First Name</StyledTableCell>
            <StyledTableCell >Last Name</StyledTableCell>
            <StyledTableCell >Email Subscribed</StyledTableCell>
            <StyledTableCell >Membership Date</StyledTableCell>
            <StyledTableCell >Save</StyledTableCell>
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
              {
                item.id === stagedRow ? (
                  <>
                    <StyledTableCell>
                      <Checkbox
                        style={{color: 'gainsboro'}}
                        onChange={() => {
                          //clear staged data
                          setUpdatedEmail('')
                          setUpdatedFirstName('')
                          setUpdatedLastName('')
                          setUpdatedData({})
                          setStagedRow(prevRow => (prevRow === item.id ? '' : item.id))
                        }}
                        checked={stagedRow === item.id}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{item.id}</StyledTableCell>
                    <StyledTableCell><UpdateTextField inputProps={{ style: { color: 'gainsboro' } }} variant="outlined" value={updatedEmail || item.email} onChange={(e) => setUpdatedEmail(e.target.value)}/></StyledTableCell>
                    <StyledTableCell><UpdateTextField inputProps={{ style: { color: 'gainsboro' } }} variant="outlined" value={updatedFirstName || item.first_name} onChange={(e) => setUpdatedFirstName(e.target.value)} /></StyledTableCell>
                    <StyledTableCell><UpdateTextField inputProps={{ style: { color: 'gainsboro' } }} variant="outlined" value={updatedLastName || item.last_name} onChange={(e) => setUpdatedLastName(e.target.value)} /></StyledTableCell>
                    <StyledTableCell>{item.isEmailSubscribed ? 'Yes' : 'No'}</StyledTableCell>
                    <StyledTableCell>{item.membershipDate ? moment(item.membershipDate).format("MM/DD/YYYY") : ""}</StyledTableCell>
                    <StyledTableCell>
                      <Button variant="contained" onClick={() => {
                        // const itemObjectForUpdate = item.id
                        handleSaveClick(item)
                      }}>Save</Button>
                    </StyledTableCell>
                  </>
                )
                :
                (
                  <>
                    <StyledTableCell>
                      <Checkbox
                        style={{color: 'gainsboro'}}
                        onChange={() => setStagedRow(item.id)}
                        checked={stagedRow === item.id}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{item.id}</StyledTableCell>
                    <StyledTableCell>{item.email}</StyledTableCell>
                    <StyledTableCell>{item.first_name ? item.first_name : 'N/A'}</StyledTableCell>
                    <StyledTableCell>{item.last_name ? item.last_name : 'N/A'}</StyledTableCell>
                    <StyledTableCell>{item.isEmailSubscribed ? 'Yes' : 'No'}</StyledTableCell>
                    <StyledTableCell>{item.membershipDate ? moment(item.membershipDate).format("MM/DD/YYYY") : ""}</StyledTableCell>
                    <StyledTableCell>
                      <Button variant="contained" color="error" onClick={() => {
                        const itemObjectForDeletion = item
                        handleDeleteRow({itemObjectForDeletion})
                      }}
                      >
                      Delete
                      </Button>
                    </StyledTableCell>
                  </>
                )
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ContentWrapper>
    </Dialog>
  );
}