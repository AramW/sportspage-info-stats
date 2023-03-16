const players = [
  { id: 1, first_name: 'Kuba', type: 'Human', last_name: 'Chicken' },
  { id: 2, first_name: 'Matthias', type: 'Human', last_name: 'Fis' },
  { id: 3, first_name: 'Awina', type: 'Human', last_name: 'We' },
  { id: 4, first_name: 'Theo', type: 'Human', last_name: 'Berserk' },
  { id: 5, first_name: 'Klay', type: 'Human', last_name: 'Thompson' },
];

export async function up(sql) {
  await sql`
    INSERT INTO players ${sql(players, 'first_name', 'type', 'last_name')}
    `;
}

export async function down(sql) {
  await sql`
    DELETE FROM
      players
     WHERE
     id = 1
  `;
}
