import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getUserByUsernameWithPasswordHash } from '../../../../database/users';

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
        errors: result.error.issues,
      },
      { status: 400 },
    );
  }

  // 1. check if the string is empty
  if (!result.data.username || !result.data.password) {
    return NextResponse.json(
      {
        errors: [{ message: 'username or password is empty' }],
      },
      { status: 400 },
    );
  }

  // 2. check if the user exists
  const userWithPasswordHash = await getUserByUsernameWithPasswordHash(
    result.data.username,
  );

  if (!userWithPasswordHash) {
    return NextResponse.json(
      { error: [{ message: 'user not found' }] },
      { status: 401 },
    );
  }

  // 3. validate the password
  const isPasswordValid = await bcrypt.compare(
    result.data.password,
    userWithPasswordHash.passwordHash,
  ); // Boolean

  if (!isPasswordValid) {
    return NextResponse.json(
      { error: [{ message: 'password is not valid' }] },
      { status: 401 },
    );
  }

  // 4. create a session (in the next chapter)

  return NextResponse.json({
    user: { username: userWithPasswordHash.username },
  });
};
