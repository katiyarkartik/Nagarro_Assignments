function call() {
  const apikey = "57508f24-bb43-41d2-b211-44b7394b0b6d";
  window
    .fetch("https://api.cricapi.com/v1/cricScore?apikey=" + apikey)
    .then((result) => result.json())
    .then((result, index) => {
      console.log("We have the result", result);

      for (let i = 0; i < 5; i++) {
        let myData = result.data.filter((obj) => {
          return obj.id === result.data[i].id;
        });
        console.log(myData);
        let text=myData[0].matchType
        let matchType = text.toUpperCase();
      
        root.innerHTML += `
          <div class="match-card">
          <div class="teams">
          <div class="team1 t">
          <p >${myData[0].t1}</p>
          <div class="image">
          <img src="${myData[0].t1img}"  alt="...">
          </div>
          </div>
      <hr>
          <div class="team2 t">
          <p >${myData[0].t2}</p>
          <div class="image">
          <img src="${myData[0].t2img}"  alt="...">
          </div>
          </div>
         
          </div>
          <div class="details">
          <p >${myData[0].status}</p>
          <p >${matchType} Match</p>
          </div>
          </div>
       
      
           `;
      }


    })
    .catch((err) => {
      console.log("An error occured. Please check your code", err);
    });
}
