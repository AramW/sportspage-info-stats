'use client';

import { useRef, useState } from 'react';
import styles from '../livescore/Livescore.module.scss';
import { searchTeams } from './api';

export default function SearchTeam() {
  const inputRef = useRef<any>('');
  const [teams, setTeams] = useState([]);
  return (
    <>
      <input
        type=""
        ref={inputRef}
        placeholder="Search for a Team/League"
        style={{ width: '300px', height: '30px', marginBottom: '10px' }}
      />
      <button
        onClick={async () => {
          const value = inputRef.current.value;
          await searchTeams(value, setTeams);
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

      {teams.map((data: any) => {
        return (
          <div key={`data-${data.strTeam}`} className={styles.matchContainer}>
            <div className={styles.matchInfo}>
              <div className={styles.sport}>{data.strTeam}</div>
              <div className={styles.league}>{data.strStadium}</div>
            </div>
            <div className={styles.matchDetails}>
              <div className={styles.status}>{data.strStadiumLocation}</div>
              <div className={styles.strEventTime}>
                std capacity:{data.intStadiumCapacity}
              </div>
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
