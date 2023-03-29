import { getBasketballData, getHockeyData, getSoccerData } from './api';
import ScoreTabs from './scoreTabs';

// start
export default async function GetLivescorePage() {
  const soccerData = await getSoccerData();
  const hockeyData = await getHockeyData();
  const basketballData = await getBasketballData();

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
      <ScoreTabs
        soccerData={soccerData}
        hockeyData={hockeyData}
        basketballData={basketballData}
      />
    </>
  );
}
