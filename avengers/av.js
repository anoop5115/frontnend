const avengers = [
  {
    name: "Tony Stark",
    designation: "Iron Man",
    image:
      "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png", // Placeholder image
  },
  {
    name: "Steve Rogers",
    designation: "Captain America",
    image:
      "https://w0.peakpx.com/wallpaper/21/365/HD-wallpaper-steve-rogers-america-captain-shield.jpg",
  },
  {
    name: "Thor",
    designation: "God of Thunder",
    image:
      "https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg",
  },
  // Add more team members as needed
];

var container = document.getElementById("cards");
avengers.forEach((result) => {
  const content = `
      <div class="card" >
      <div class="card-header" id="Cards">
      <img src="${result.image}" class="cardImage">
    
      </div>
  
      <div class="card-body">
        <h5>${result.name}</h5>
        <p>${result.designation}</p>
      </div>
   </div>
    `;

  container.innerHTML += content;
});
