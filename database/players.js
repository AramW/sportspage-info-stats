import { sql } from './connect';

export const players = [
  { id: 1, firstName: 'Kuba', type: 'Human', lastName: 'Chicken' },
  { id: 2, firstName: 'Matthias', type: 'Human', lastName: 'Fis' },
  { id: 3, firstName: 'Awina', type: 'Human', lastName: 'We' },
  { id: 4, firstName: 'Theo', type: 'Human', lastName: 'Berserk' },
  { id: 5, firstName: 'Klay', type: 'Human', lastName: 'Thompson' },
];

// SELECT * FROM players;

// console.log(
//  sql`
//  SELECT * FROM players
//  `.then((data) => console.log(data)),
// );

export async function getPlayers() {
  const players = await sql`
  SELECT * FROM players
  `;

  return players;
}
