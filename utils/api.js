const BASE_URL = "http://localhost:8000";

export async function get(endpoint) {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }
  return res.json();
}

export async function post(endpoint, data = {}) {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Erreur API POST: ${res.status} - ${error}`);
  }

  return res.json();
}
