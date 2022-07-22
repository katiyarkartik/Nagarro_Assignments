async function getJoke() {
  const data = await fetch(" https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  const obj = await data.json();
  console.log(obj.joke);
  document.getElementById("joke").innerHTML = obj.joke;
}

async function sendToBackend() {
  alert("Added to Database");
  const joke = document.getElementById("joke");
  const jokeContent = joke.innerText;
  const response = await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ joke: jokeContent.toString() }),
  });
  const data = await response.json();
  console.log(data);
}
