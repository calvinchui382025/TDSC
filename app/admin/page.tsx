"use client"

import react, { useState } from "react"
import { AdminContent, AdminRoot, AdminNavBar } from "./AdminStyles"
import TableRowsIcon from '@mui/icons-material/TableRows';
import EmailIcon from '@mui/icons-material/Email';
import { Button, Checkbox } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { greyColorCustom, greyColorCustomDark, greyColorCustomLight } from "app/utils";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import EmailBlastModal from './email/EmailBlastModal'

function createData(
  email: string,
  firstName: string,
  lastName: string,
  membershipDate: string,
  isEmailSubscribed: boolean,
) {
  return { email, firstName, lastName, membershipDate, isEmailSubscribed };
}

export default function JoinPage() {
  const [selected, setSelected] = useState('')

  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const handleCloseEmail = () => setIsEmailOpen(false);
  const handleOpenEmail = () => setIsEmailOpen(true);

  const [selectedFunctionality, setSelectedFunctionality] = useState('');



  return (
    <AdminRoot>
      <AdminNavBar>
        <Button variant='contained' onClick={handleOpenEmail}>
          Email Blast
        </Button>
      </AdminNavBar>

      <EmailBlastModal isOpen={isEmailOpen} closeFunc={handleCloseEmail} />
    </AdminRoot>
  )
}