// src/app/api/servicecard/[name]/route.js
import { servicecard } from "../route";

export async function GET(req, { params }) {
  const { name } = params;

  console.log("Requested name:", name); // Log the requested name

  // Find the service with the matching name
  const service = servicecard.find((item) => item.name === name);

  console.log("Found Service:", service); // Log the found service

  if (service) {
    return new Response(JSON.stringify(service), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new Response(JSON.stringify({ message: "Service not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
