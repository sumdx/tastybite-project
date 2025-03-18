document.addEventListener("DOMContentLoaded", () => {
  let data = [];

  fetch("./menu.json")
    .then((response) => response.json())
    .then((menu) => {
      data = menu;
      let index = 6;
      data.sort((a, b) => b.rating - a.rating);
      console.log(data);
      for (let i = 0; i < 6; i++) {
        const bestItemContainer = document.getElementById(
          "best-item-container"
        );
        const bestItemBox = document.createElement("div");
        bestItemBox.innerHTML = `
        <div class="menu-image">
             <img src="./../src/${data[i].image}" alt="${data[i].name}">
        </div>
        <div class="menu-details">
            <h3>${data[i].name}</h3>
            <p>${data[i].description || "Delicious food!"}</p>
            <br>
            <p>Rating : ${data[i].rating || "Delicious food!"}</p>
        <div>
        <button  class="menu-item-button btn-accent">Add to cart</button>
        <button class="menu-item-details btn-accent"><a href="./../pages/menuItem.html?id=${
            data[i].id
        }">Details</a></button>
        </div>
                            
        </div>
        `;
        bestItemContainer.appendChild(bestItemBox);
      }
    });
});
