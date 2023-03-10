import postgres from 'postgres';

const sql = postgres(
  'postgres://sportspage_info_stats:sportspage_info_stats_stats@localhost:5432/sportspage_info_stats',
);

console.log(
  await sql`
   SELECT * FROM users
  `,
);
