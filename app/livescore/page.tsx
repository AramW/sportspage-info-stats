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
  console.log(soccerData.events[0]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
      }}
    >
      <div>
        <h1 style={{ marginBottom: '20px', marginRight: '20px' }}>
          LiveScores
        </h1>
        <h1>
          <button
            style={{
              background: 'black',
              fontSize: '20px',
              padding: '10px 50px',
              color: 'white',
              borderRadius: '15px',
              marginBottom: '1px',
              marginLeft: '20px',
            }}
          >
            Live
          </button>
        </h1>
      </div>

      {soccerData.events.map((data: any) => {
        return (
          <div key={`data-${soccerData.id}`}>
            <div>{data.strSport}</div>
            <div>{data.strLeague}</div>
            <div>
              {data.strStatus}, min:{data.strProgress}:{data.strHomeTeam}.
              {data.intHomeScore}:{data.intAwayScore}.{data.strAwayTeam}
              {/* :::

              {data.strHomeTeamBadge}: */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
