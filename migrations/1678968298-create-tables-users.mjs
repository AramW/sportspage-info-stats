export async function up(sql) {
  await sql`
CREATE TABLE players (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username varchar(80) NOT NULL UNIQUE,
  password_hash varchar(70) NOT NULL UNIQUE
  )
  `;
}

export async function down(sql) {
  await sql`
  DROP TABLE players
  `;
}
