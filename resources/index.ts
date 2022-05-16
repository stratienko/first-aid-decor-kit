export async function getServices(): Promise<Array<TService>> {
  const resp = await fetch("http://localhost:3000/api/services");

  return resp.json();
}
