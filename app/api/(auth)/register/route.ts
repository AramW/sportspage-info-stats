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

  // 1. check if the string is empty
  if (!result.data.username || !result.data.password) {
    return NextResponse.json(
      {
        error: [{ message: 'username or password is empty' }],
      },
      { status: 400 },
    );
  }

  // 2. check if the user already exists
  // 2.a compare the username with the database

  // 3. hash the password
  // 4. create a user
  // 5. return the new username
};
