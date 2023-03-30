import { config } from 'dotenv-safe';
import postgres from 'postgres';

// config();

// export const sql = postgres({
//  transform: {
//    ...postgres.camel,
//    undefined: null,
// },
// });

declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

// Victor Video Database 2/2 58~
function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }
  return globalThis.postgresSqlClient;
}

// Connect to PostgresSQL
export const sql = connectOneTimeToDatabase();
