import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getPlayers } from '../../database/players';
import { getValidSessionByToken } from '../../database/sessions';
import SearchPlayers from './searchPlayers';

export default async function PlayersPage() {
  // check if i have a valid session
  const sessionTokenCookie = cookies().get('sessionToken');
  // console.log(sessionTokenCookie);

  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // if yes redirect to home

  // for example you may also check if session user is an admin role

  // if (!session) {
  //   redirect('/login?returnTo=/players');
  // }

  // const players = await getPlayers();

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
        <p
          style={{
            textAlign: 'center',
            marginBottom: '20px',
            maxWidth: '1200px',
            lineHeight: '1.5',
          }}
        >
          Discover comprehensive information on your favorite sports players
          with our search feature. Simply type in the player's name and click
          the button to retrieve their stats, career history, and more. Start
          your search now to uncover the stories and statistics behind your
          favorite athletes!
        </p>
        <SearchPlayers />
      </div>
    </div>
  );
}
