import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getValidSessionByToken } from '../../database/sessions';

export default async function teamrosterTage() {
  // check if i have a valid session
  const sessionTokenCookie = cookies().get('sessionToken');
  console.log(sessionTokenCookie);

  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // if yes redirect to home
  if (!session) {
    redirect('/login?returnTo=/teamroster');
  }

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
          Find detailed information on sports teams with our search feature.
          Enter the team name to access their roster, statistics, and more.
          Begin your search to explore the data behind your favorite teams.
        </p>
        <input
          type=""
          placeholder="Search for a team roster"
          style={{ width: '300px', height: '30px', marginBottom: '10px' }}
        />
        <button
          // onClick={}
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
      </div>
    </div>
  );
}
