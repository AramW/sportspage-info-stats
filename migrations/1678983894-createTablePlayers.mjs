export async function up(sql) {
  await sql`
   CREATE TABLE players (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name varchar(80) NOT NULL UNIQUE,
  last_name varchar(80) NOT NULL UNIQUE,
  type varchar(70) NOT NULL
  )
    `;
}

export async function down(sql) {
  await sql`
  DROP TABLE players
  `;
}
