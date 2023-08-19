export {};

// import { NextResponse } from 'next/server';
// import axios from 'axios';
// import fs from 'fs';
// import path from 'path';
// import https from 'https';

// const certPath = path.join(__dirname, './app/api/certificate.crt');

// const cert = fs.readFileSync(certPath, 'utf8')

// export async function GET(req, res) {
//   try {
//     const backendUrl = 'https://ec2-3-17-167-220.us-east-2.compute.amazonaws.com/users';
//     console.log("HIT SERVER")
//     console.log(cert)
//     // Using Axios to make an HTTP GET request to the backend
//     const response = await axios.get(backendUrl, {
//       httpsAgent: new https.Agent({
//         ca: cert,
//       })
//     });
//     const data = response.data;

//     return NextResponse.json(data, { status: 200 }); // Send JSON response to frontend
//   } catch (error) {
//     console.error('Error fetching data:', error);

//     return NextResponse.json({ error: 'An error occurred while fetching data' }, { status: 500 });
//   }
// }


// import axios from 'axios';

// export default async (req, res) => {
//   try {
//     const backendUrl = 'https://ec2-3-17-167-220.us-east-2.compute.amazonaws.com/users';

//     // Using Axios to make an HTTP GET request to the backend
//     const response = await axios.get(backendUrl);

//     const data = response.data;

//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'An error occurred while fetching data' });
//   }
// };