// src/app/api/servicebox/[name]/route.js
import { NextResponse } from 'next/server';
import { services } from '../route'; // Adjust import path as needed

export async function GET(request, { params }) {
  const { name } = params;
  const service = services.find(s => s.name === name);

  if (!service) {
    return NextResponse.json({ error: 'Service not found' }, { status: 404 });
  }

  return NextResponse.json(service);
}
