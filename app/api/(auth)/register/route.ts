import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getUserByUsername } from '../../../../database/users';

const userSchema = z.object({
  username: z.string(),
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

  const user = await getUserByUsername(result.data.username);

  if (user) {
    return NextResponse.json(
      { error: [{ message: 'username is already taken' }] },
      { status: 400 },
    );
  }

  // 3. hash the password
  const passwordHash = await bcrypt.hash(result.data.password, 12);

  console.log(passwordHash);
  // 4. create a user
  const newUser = await createUser(result.data.username, passwordHash);

  if (!newUser) {
    return NextResponse.json(
      { error: [{ message: 'user creation failed' }] },
      { status: 500 },
    );
  }

  // 5. return the new username
  return NextResponse.json({ user: { username: newUser.username } });
};
