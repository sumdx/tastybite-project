document.addEventListener("DOMContentLoaded", () => {
  const itemDetailsContainer = document.getElementById(
    "item-details-container"
  );
  const itemTitle = document.getElementById("itemTitle");


  let data = [];

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  fetch("./../menu.json")
    .then((response) => response.json())
    .then((menu) => {
      data = menu;
      categories = [...new Set(data.map((item) => item.category))];

      console.log(data);
      // menuContainer.innerHTML = "";
      const food = data.find((item) => item.id == id);
      itemTitle.innerHTML = `<h1 id="itemTitle" class="text-4xl">
          ${food.name}
        </h1>`;
      const foodDetails = `
             <div class="item-details-container">
                 <div class="item-details-leftCont">
                    <img src="./../src/${food.image}" alt="">
                </div>
                 <div class="item-details-rightCont">
                    <h1>${food.name}</h1>
                    <h2>Category : ${food.category}</h2>
                    <h2>Description : ${food.description}</h2>
                    <p>Price : $${food.price}</p>
                    <button id="add-to-cart-btn" class="add-to-cart-btn" >Add to cart </button>
                </div>
            </div>
            `;
      itemDetailsContainer.innerHTML = foodDetails;
    })
    .catch((error) => console.error("Error fetching menu:", error));
});
