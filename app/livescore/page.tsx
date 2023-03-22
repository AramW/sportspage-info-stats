import styles from './Livescore.module.scss';

export default async function livescoreTage() {
  const response = await fetch(
    // opder const soccer/footballrespons (variablen nicht doppelt verwenden zb constsoccerrespons, const baskeball responst)
    'https://www.thesportsdb.com/api/v2/json/60130162/livescore.php?s=Soccer',

    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  const soccerData = await response.json();
  console.log(soccerData);

  const basketballResponse = await fetch(
    // opder const soccer/footballrespons (variablen nicht doppelt verwenden zb constsoccerrespons, const baskeball responst)
    'https://www.thesportsdb.com/api/v2/json/60130162/livescore.php?s=Ice_Hockey',

    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  const basketballData = await basketballResponse.json();
  console.log(basketballData);

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
                fontSize: '20px',
                padding: '10px 50px',
                color: 'white',
                borderRadius: '15px',
                marginBottom: '100px',
                marginLeft: '20px',
              }}
            >
              Live
            </button>
          </h1>
        </div>
      </div>
      <div className={styles.strSport}>{soccerData.events[0].strSport}</div>
      <div className={styles.matchList}>
        {soccerData.events.map((data: any) => {
          return (
            <div
              key={`data-${soccerData.id}`}
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
