export const getItems = async () => {
  const resp = await fetch(
    'https://random-data-api.com/api/app/random_app?size=500',
  );

  return resp.json();
};
