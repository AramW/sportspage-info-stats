'use client';

import { useEffect, useState } from 'react';
import { fetchScore } from './api';
import styles from './Livescore.module.scss';

export default function ScoreTabs() {
  const [selectedItems, setSelectedItems] = useState({ events: [] });

  useEffect(() => {
    fetchScore(setSelectedItems, 'Soccer');
  }, []);

  return (
    <>
      <div className={styles.sportButtonsContainer}>
        <button
          onClick={() => fetchScore(setSelectedItems, 'Soccer')}
          className={styles.strSportButton}
        >
          Soccer
        </button>
        <button
          onClick={() => fetchScore(setSelectedItems, 'Basketball')}
          className={styles.strSportButton}
        >
          Basketball
        </button>
        <button
          onClick={() => fetchScore(setSelectedItems, 'Ice_Hockey')}
          className={styles.strSportButton}
        >
          Ice Hockey
        </button>
      </div>
      <div className={styles.matchList}>
        {selectedItems.events.map((data: any, indx: number) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={`data-${indx}`} className={styles.matchContainer}>
              <div className={styles.matchInfo}>
                <div className={styles.sport}>{data.strSport}</div>
                <div className={styles.league}>{data.strLeague}</div>
              </div>
              <div className={styles.matchDetails}>
                <div className={styles.status}>{data.strStatus}</div>
                <div className={styles.strEventTime}>{data.strEventTime}</div>
                <div className={styles.progress}>min: {data.strProgress}</div>
                <div className={styles.teamsScores}>
                  {data.strHomeTeam} {data.intHomeScore} : {data.intAwayScore}{' '}
                  {data.strAwayTeam}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
