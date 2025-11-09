import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Sync queue placeholder', status: 'ok' });
}
