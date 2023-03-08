import { sql } from './connect';

type User = {
  id: number;
  username: string;
  password_hash: string;
};

export function getUserByUsername(username: string) {
  const [user] = await sql<User[]>`
  SELECT
     *
  FROM
     users
  WHERE
    id = ${id}
`;
  return users;
}
