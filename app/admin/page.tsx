"use client"

// import react, { useState } from "react"
// import { AdminContent, AdminRoot, AdminNavBar } from "./AdminStyles"
// import TableRowsIcon from '@mui/icons-material/TableRows';
// import EmailIcon from '@mui/icons-material/Email';
// import { Button, Checkbox } from "@mui/material";
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

// function createData(
//   email: string,
//   firstName: string,
//   lastName: string,
//   membershipDate: string,
//   isEmailSubscribed: boolean,
// ) {
//   return { email, firstName, lastName, membershipDate, isEmailSubscribed };
// }

// const rows = [
//   createData('email@email.com', 'Frozen', 'yoghurt', '6.0', true),
//   createData('email@email.com', 'Icecream', 'sandwich', '9.0', false),
//   createData('email@email.com', 'Eclair', 'Eclair', '16.0', false),
//   createData('email@email.com', 'Cupcake', 'Eclair', '3.7', true),
//   createData('email@email.com', 'Gingerbread', 'Eclair', '16.0', true),
//   createData('email@email.com', 'Frozen', 'yoghurt', '6.0', true),
//   createData('email@email.com', 'Icecream', 'sandwich', '9.0', false),
//   createData('email@email.com', 'Eclair', 'Eclair', '16.0', false),
//   createData('email@email.com', 'Cupcake', 'Eclair', '3.7', true),
//   createData('email@email.com', 'Gingerbread', 'Eclair', '16.0', true),
//   createData('email@email.com', 'Frozen', 'yoghurt', '6.0', true),
//   createData('email@email.com', 'Icecream', 'sandwich', '9.0', false),
//   createData('email@email.com', 'Eclair', 'Eclair', '16.0', false),
//   createData('email@email.com', 'Cupcake', 'Eclair', '3.7', true),
//   createData('email@email.com', 'Gingerbread', 'Eclair', '16.0', true),
//   createData('email@email.com', 'Frozen', 'yoghurt', '6.0', true),
//   createData('email@email.com', 'Icecream', 'sandwich', '9.0', false),
//   createData('email@email.com', 'Eclair', 'Eclair', '16.0', false),
//   createData('email@email.com', 'Cupcake', 'Eclair', '3.7', true),
//   createData('email@email.com', 'Gingerbread', 'Eclair', '16.0', true),
// ];

// export default function JoinPage() {
//   const [selected, setSelected] = useState([])



//   return (
//     <AdminRoot>
//       <AdminNavBar>
//         <Checkbox label="" />
//       </AdminNavBar>
//       <Table sx={{ width: '70vw'}} aria-label="simple table">
//         <TableHead style={{backgroundColor: greyColorCustom}}>
//           <TableRow style={{}}>
//             <TableCell style={{color: 'gainsboro', fontWeight: 'bold', fontSize: '18px'}}>Email</TableCell>
//             <TableCell style={{color: 'gainsboro', fontWeight: 'bold', fontSize: '18px'}} align="center">First Name</TableCell>
//             <TableCell style={{color: 'gainsboro', fontWeight: 'bold', fontSize: '18px'}} align="center">Last Name</TableCell>
//             <TableCell style={{color: 'gainsboro', fontWeight: 'bold', fontSize: '18px'}} align="center">Membership Date</TableCell>
//             <TableCell style={{color: 'gainsboro', fontWeight: 'bold', fontSize: '18px'}} align="center">Subscribed?</TableCell>
//             <TableCell style={{color: 'gainsboro', fontWeight: 'bold', fontSize: '18px'}} align="center">Action?</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, index) => (
//             <TableRow
//               key={row.email}
//               sx={{
//                 '&:last-child td, &:last-child th': { border: 0 },
//                 // backgroundColor: index % 2 === 0 ? greyColorCustomLight : greyColorCustom,
//                 backgroundColor: greyColorCustomLight,
//               }}
//             >
//               <TableCell style={{color: 'gainsboro'}} component="th" scope="row">
//                 {row.email}
//               </TableCell>
//               <TableCell style={{color: 'gainsboro'}} align="center">{row.firstName}</TableCell>
//               <TableCell style={{color: 'gainsboro'}} align="center">{row.lastName}</TableCell>
//               <TableCell style={{color: 'gainsboro'}} align="center">{row.membershipDate}</TableCell>
//               <TableCell style={{color: 'gainsboro'}} align="center">{row.isEmailSubscribed}</TableCell>
//               <TableCell style={{color: 'gainsboro'}} align="center"><Checkbox label="Check" /></TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </AdminRoot>
//   )
// }