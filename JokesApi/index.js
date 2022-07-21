

async function getJoke() {
  const data = await fetch(" https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  const obj = await data.json();
  console.log(obj.joke);
  document.getElementById("joke").innerHTML = obj.joke;
}
