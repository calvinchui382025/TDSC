"use client"

import react, { useState } from "react"
import { AdminContent, AdminRoot, AdminNavBar, AdminLoginWrapper, LoginTitle, CustomTextField } from "./AdminStyles"
// import TableRowsIcon from '@mui/icons-material/TableRows';
// import EmailIcon from '@mui/icons-material/Email';
import { Button, 
  // Checkbox, 
  Divider, 
  // TextField 
} from "@mui/material";
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { greyColorCustom, greyColorCustomDark, greyColorCustomLight } from "app/utils";
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
import { ToastContainer, toast } from 'react-toastify';
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

export default function AdminPage() {
  const outerTheme = useTheme();
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminUserName, setAdminUserName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const handleCloseEmail = () => setIsEmailOpen(false);
  const handleOpenEmail = () => setIsEmailOpen(true);

  const handleAdminLogin = () => {
    console.log('env', process.env)
    console.log('username', process?.env?.NEXT_PUBLIC_ADMIN_USERNAME );
    console.log('password', process?.env?.NEXT_PUBLIC_ADMIN_PASSWORD );
    
    if (
        adminUserName === process?.env?.NEXT_PUBLIC_ADMIN_USERNAME 
        && adminPassword === process?.env?.NEXT_PUBLIC_ADMIN_PASSWORD
      ) {
      setAdminLoggedIn(true);
    }
    else {
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
        </AdminNavBar>
        <Divider />
        <AdminContent />
        <EmailBlastModal isOpen={isEmailOpen} closeFunc={handleCloseEmail} />
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