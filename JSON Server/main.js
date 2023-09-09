const data = {
    image: "https://id.wikipedia.org/wiki/Berkas:Iron_Man_bleeding_edge.jpg",
    title: "Iron Man",
    year: 2009,
    id: 5
};

// fetch API
fetch("http://localhost:3000/movies", {
  method: "PATCH",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((json) => console.log(json));