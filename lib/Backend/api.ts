export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const getParishes = async (
  page = 1,
  search = "",
  deanary = ""
) => {
  const res = await fetch(
    `${API_URL}/api/parishes?page=${page}&search=${search}&deanary=${deanary}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch parishes");

  return res.json();
};

export const getDeanaries = async () => {
  const res = await fetch(`${API_URL}/api/parishes/deanaries`, {
    cache: "no-store"
  });
  return res.json();
};
