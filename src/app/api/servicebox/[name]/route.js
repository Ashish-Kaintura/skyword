// import { servicebox } from '../route';

// export async function GET(req, { params }) {
//   const { id } = params;
  
//   // Convert id to number as the servicebox id is a number
//   const serviceId = parseInt(id, 10);
  
//   // Find the service with the matching id
//   const service = servicebox.find(item => item.id === serviceId);
  
//   if (service) {
//     return new Response(JSON.stringify(service), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } else {
//     return new Response(JSON.stringify({ message: 'Service not found' }), {
//       status: 404,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// }

// src/app/api/servicebox/[name]/route.js

// by name

import { servicebox } from '../route';

export async function GET(req, { params }) {
  const { name } = params;
  
  // Find the service with the matching name
  const service = servicebox.find(item => item.name === name);
  
  if (service) {
    return new Response(JSON.stringify(service), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new Response(JSON.stringify({ message: 'Service not found' }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
