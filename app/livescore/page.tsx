import styles from './Livescore.module.scss';

// start
export default async function getLivescorePage() {
  async function getSoccerData() {
    const soccerResponse = await fetch(
      'https://www.thesportsdb.com/api/v2/json/60130162/livescore.php?s=Soccer',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    );
    const soccerData = await soccerResponse.json();
    return soccerData;
  }
  // stop
  async function getBasketballData() {
    const basketballResponse = await fetch(
      'https://www.thesportsdb.com/api/v2/json/60130162/livescore.php?s=Basketball',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    );
    const basketballData = await basketballResponse.json();
    return basketballData;
  }
  // stop
  const hockeyResponse = await fetch(
    'https://www.thesportsdb.com/api/v2/json/60130162/livescore.php?s=Ice_Hockey',

    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  const hockeyData = await hockeyResponse.json();
  console.log(hockeyData);

  // stop
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '20vh',
        }}
      >
        <div>
          <h1>
            <button
              style={{
                background: 'black',
                fontSize: '40px',
                padding: '10px 50px',
                color: 'white',
                borderRadius: '15px',
                marginBottom: '50px',
                marginLeft: '20px',
              }}
            >
              Live
            </button>
          </h1>
        </div>
      </div>
      {/* Hockey map */}
      <div className={styles.sportButtonsContainer}>
        <button className={styles.strSportButton}>Soccer</button>
        <button className={styles.strSportButton}>Basketball</button>
        <button className={styles.strSportButton} onClick={hockeyData}>
          Ice Hockey
        </button>
      </div>
      <div className={styles.matchList}>
        {hockeyData.events.map((data: any) => {
          return (
            <div
              key={`data-${hockeyData.id}`}
              className={styles.matchContainer}
            >
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
