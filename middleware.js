import { NextResponse } from 'next/server';

export const config = {
  matcher: '/logout',
};
// in middleware request headers are read only
export function middleware(request) {
  // creating a new headers object
  const requestHeaders = new Headers(request.headers);

  const sessionToken = request.cookies.get('sessionToken')?.value;

  if (sessionToken) {
    // this is important because i am going to catch this header in the Server Component
    requestHeaders.set('x-sessionToken-to-delete', sessionToken);
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.cookies.set({
    name: 'sessionToken',
    maxAge: -1,
  });

  return response;
}
