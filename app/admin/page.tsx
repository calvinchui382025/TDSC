"use client"

import react, { useState } from "react"
import { AdminContent, AdminRoot, AdminNavBar, AdminLoginWrapper, LoginTitle, CustomTextField } from "./AdminStyles"
import { Button, Divider} from "@mui/material";
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

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

import EmailBlastModal from './email/EmailBlastModal'
import ListBlastModal from "./list/ListBlastModal";

export default function AdminPage() {
  const outerTheme = useTheme();
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminUserName, setAdminUserName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const handleCloseEmail = () => setIsEmailOpen(false);
  const handleOpenEmail = () => setIsEmailOpen(true);

  const [userData, setUserData] = useState([]);
  const [isUserListOpen, setIsUserListOpen] = useState(false);

  const handleCloseUserList = () => setIsUserListOpen(false);

  const handleOpenUserList = () => {
    const url = process.env.NEXT_PUBLIC_USER_LIST_URL;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const usersData = data.data;
        setUserData(usersData);
        setIsUserListOpen(true);
      })
      .catch((error) => {
      });
  };

  const handleAdminLogin = async (event) => {
    event.preventDefault();
    const loginURL = process.env.NEXT_PUBLIC_LOGIN_URL;
    
    try {
      const response = await axios.post(loginURL, {
        username: adminUserName,
        password: adminPassword,
      });
      if(response.status === 200){
        toast.success('Successfully logged in!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        setAdminLoggedIn(true);
      } else if(response.status === 401) {
        toast.warn('Invalid username or password', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
      } else {
        toast.warn('There was an error in logging in!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
      }
    } catch (error) {
      console.error('An error has occured: ', error);
    }
  }
  
  return (
    <AdminRoot>
      <ToastContainer />
      { adminLoggedIn ?
      <>
        <AdminNavBar>
          <Button variant='contained' onClick={handleOpenEmail}>
            Email Blast
          </Button>
          <Button variant='contained' onClick={handleOpenUserList}>
            Email List
          </Button>
        </AdminNavBar>
        <Divider />
        <AdminContent />
        <EmailBlastModal isOpen={isEmailOpen} closeFunc={handleCloseEmail} />
        <ListBlastModal isOpen={isUserListOpen} closeFunc={handleCloseUserList} userData={userData}/>
      </> : 
      <AdminLoginWrapper elevation={5}>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <LoginTitle>Admin Login</LoginTitle>
          <CustomTextField
            margin="dense"
            label='Username'
            variant='filled'
            value={adminUserName}
            onChange={(e) => setAdminUserName(e.target.value)}
          />
          <CustomTextField
            margin="dense"
            label='Password'
            type='password'
            variant='filled'
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
          <Button variant='contained' onClick={handleAdminLogin}>
            Login
          </Button>
        </ThemeProvider>
      </AdminLoginWrapper>
      }
    </AdminRoot>
  )
}