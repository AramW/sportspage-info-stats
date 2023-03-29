'use client';

import { useRef, useState } from 'react';
import styles from '../livescore/Livescore.module.scss';
import { searchPlayer } from './api';

export default function SearchPlayers() {
  const inputRef = useRef<any>('');
  const [players, setPlayers] = useState([]);
  return (
    <>
      <input
        type=""
        ref={inputRef}
        placeholder="Search for a player"
        style={{ width: '300px', height: '30px', marginBottom: '10px' }}
      />
      <button
        onClick={async () => {
          const value = inputRef.current.value;
          await searchPlayer(value, setPlayers);
          inputRef.current.value = '';
        }}
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

      {players.map((data: any, indx: number) => {
        return (
          <div key={`data-${data.strTeam}`} className={styles.matchContainer}>
            <div className={styles.matchInfo}>
              <div className={styles.sport}>{data.strSport}</div>
              <div className={styles.league}>{data.strPosition}</div>
            </div>
            <div className={styles.matchDetails}>
              <div className={styles.status}>{data.strPlayer}</div>
              <div className={styles.strEventTime}>{data.strNationality}</div>
              {/* <div className={styles.progress}>min: {data.strProgress}</div> */}
              {/* <div className={styles.teamsScores}>
                {data.strHomeTeam} {data.intHomeScore} : {data.intAwayScore}{' '}
                {data.strAwayTeam}
              </div> */}
            </div>
          </div>
        );
      })}
    </>
  );
}
