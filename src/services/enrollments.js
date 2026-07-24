const API_URL = import.meta.env.VITE_API_URL;

export async function getEnrollments() {
  const token = localStorage.getItem("adminToken");

  const response = await fetch(`${API_URL}/enrollments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Não foi possível carregar os inscritos.");
  }

  return data;
}