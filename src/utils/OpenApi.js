function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(`Error: ${response.status}`);
}

export function searchBooks(query) {
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
    query
  )}`;

  return fetch(url).then(checkResponse);
}
