export const getHockeyData = async () => {
  const request = await fetch(
    `${process.env.BASE_URL}/api/v2/json/${process.env.API_KEY}/livescore.php?s=Ice_Hockey`,

    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  const res = await request.json();
  return res;
};

export const getSoccerData = async () => {
  const request = await fetch(
    `${process.env.BASE_URL}/api/v2/json/${process.env.API_KEY}/livescore.php?s=Soccer`,

    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  const res = await request.json();
  return res;
};

export const getBasketballData = async () => {
  const request = await fetch(
    `${process.env.BASE_URL}/api/v2/json/${process.env.API_KEY}/livescore.php?s=Basketball`,

    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  const res = await request.json();

  return res;
};
