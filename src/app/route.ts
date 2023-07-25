export async function GET(request: Request) {
  console.log({request});
  
  return {
    body: 'GET!',
  };
}