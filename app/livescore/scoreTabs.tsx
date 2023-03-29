'use client';

import { useState } from 'react';
import styles from './Livescore.module.scss';

type Props = {
  soccerData: { events: [] };
  hockeyData: { events: [] };
  basketballData: { events: [] };
};

export default function ScoreTabs({
  soccerData,
  hockeyData,
  basketballData,
}: Props) {
  const [selectedItems, setSelectedItems] = useState(soccerData);

  return (
    <>
      <div className={styles.sportButtonsContainer}>
        <button
          onClick={async () => setSelectedItems(soccerData)}
          className={styles.strSportButton}
        >
          Soccer
        </button>
        <button
          onClick={async () => setSelectedItems(basketballData)}
          className={styles.strSportButton}
        >
          Basketball
        </button>
        <button
          onClick={async () => setSelectedItems(hockeyData)}
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
