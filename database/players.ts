import { cache } from 'react';
import { sql } from './connect';

// export const players1 = [
//  { id: 1, firstName: 'Kuba', type: 'Human', lastName: 'Chicken' },
//  { id: 2, firstName: 'Matthias', type: 'Human', lastName: 'Fis' },
//  { id: 3, firstName: 'Awina', type: 'Human', lastName: 'We' },
//  { id: 4, firstName: 'Theo', type: 'Human', lastName: 'Berserk' },
//  { id: 5, firstName: 'Klay', type: 'Human', lastName: 'Thompson' },
// ];

export type Player = {
  id: number;
  firstName: string;
  type: string;
  lastName: string | null;
};

// SELECT * FROM players;

// console.log(
//  sql`
//  SELECT * FROM players
//  `.then((data) => console.log(data)),
// );

// get all players
export const getPlayers = cache(async () => {
  const players = await sql<Player[]>`
SELECT
*
FROM
  players
`;

  return players;
});

// get a single player

export const getPlayer = cache(async (id: number) => {
  const [player] = await sql<Player[]>`
  SELECT
    *
  FROM
    player
    WHERE id = ${id}
  `;
  return player;
});
