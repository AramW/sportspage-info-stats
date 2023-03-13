import Link from 'next/link';
import { getPlayers } from '../../database/players';

export default async function PlayersPage() {
  const players = await getPlayers();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button
        style={{
          background: 'white',
          fontSize: '20px',
          padding: '10px 60px',
          color: 'black',
          borderRadius: '15px',
        }}
      >
        Players
      </button>
    </div>
  );
}
