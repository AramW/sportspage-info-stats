import { NextResponse } from 'next/server';

export async function GET(req: any) {
  const serchQuery = req.nextUrl.searchParams.get('search');
  try {
    const request = await fetch(
      `${process.env.BASE_URL}/api/v1/json/3/search_all_teams.php?l=${serchQuery}`,
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
