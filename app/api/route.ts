export async function GET(req, res) {
  console.log({req});
  
  return {
    body: 'GET!',
  };
}

export async function POST(req, res) {

  console.log({req});
  
  return {
    body: 'POST!',
  };
}