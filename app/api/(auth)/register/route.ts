import { NextRequest } from 'next/server';
import { z } from 'zod';

const userSchema = z.object({
  userName: z.string(),
  password: z.string(),
});

export type RegisterResponseBody =
  | { errors: { message: string }[] }
  | { user: { username: string } };

export const POST = async (request: NextRequest) => {
  // 1. validate the data
  const body = await request.json();

  const result = userSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        error: result.error.issues,
      },
      { status: 400 },
    );
  }
  // check if the string is empty

  // 2. check if the user already exists
};
