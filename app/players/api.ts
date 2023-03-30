export const searchPlayer = async (
  serchQuery: string,
  setter: (data: []) => void,
) => {
  const request = await fetch(
    `/api/searchPlayer?search=${serchQuery}`,

    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  const res = await request.json();
  if (request.ok) {
    setter(res.player || []);
  }
};
