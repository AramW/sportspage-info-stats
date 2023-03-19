import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getPlayers } from '../../database/players';
import { getValidSessionByToken } from '../../database/sessions';

export default async function PlayersPage() {
  // check if i have a valid session
  const sessionTokenCookie = cookies().get('sessionToken');
  console.log(sessionTokenCookie);

  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // if yes redirect to home

  // for example you may also check if session user is an admin role

  if (!session) {
    redirect('/login?returnTo=/players');
  }

  const players = await getPlayers();

  // const singlePlayer = await getPlayer(params.playerName);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <button
          style={{
            background: 'white',
            fontSize: '20px',
            padding: '5px 30px',
            color: 'black',
            borderRadius: '15px',
          }}
        >
          Click me
        </button>
        <h3 style={{ marginTop: '10px' }}>Players</h3>
      </div>
    </div>
  );
}

// this

// <main> {players.map((player) => (
//          <div key={player.id}>
//            <Link href={`/players/${player.id}`}>
//              <h2>{player.firstName}</h2>
//            </Link>
//            <Link href={`/players/${player.id}`}></Link>
//          </div>
//        ))}
//      </main>
//    </div>
//  );
// }
