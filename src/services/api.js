const API_URL = import.meta.env.VITE_API_URL;

export async function createEnrollment(data) {
  const response = await fetch(`${API_URL}/enrollments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const contentType = response.headers.get("content-type");

  let result = {};

  if (contentType?.includes("application/json")) {
    result = await response.json();
  } else {
    const text = await response.text();

    if (text) {
      result.message = text;
    }
  }

  if (!response.ok) {
    throw new Error(
      result.message || "Não foi possível realizar a inscrição."
    );
  }

  return result;
}