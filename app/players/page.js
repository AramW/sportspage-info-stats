import Link from 'next/link';
import { getPlayers, players } from '../../database/players';

export default async function PlayersPage() {
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
        <h3 style={{ marginTop: '10px' }}>play</h3>
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
