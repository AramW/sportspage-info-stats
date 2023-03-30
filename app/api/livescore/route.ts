import { NextResponse } from 'next/server';

export async function GET(req: any) {
  const type = req.nextUrl.searchParams.get('sportsType');
  try {
    const request = await fetch(
      `${process.env.BASE_URL}/api/v2/json/${
        process.env.API_KEY
      }/livescore.php?s=${type}&${new Date().getTime()}`,

      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    );

    const res = await request.json();

    return NextResponse.json({ ...res });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
