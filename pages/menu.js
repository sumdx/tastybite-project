document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-section");

    let data = [];
    let categories = []; 


    fetch("./../menu.json")
        .then(response => response.json())
        .then(menu => {
            data = menu; 
            categories = [...new Set(data.map(item => item.category))];

            console.log("Categories:", categories); 

            menuContainer.innerHTML = "";


            categories.forEach(category => {

                const categoryDiv = document.createElement("div");
                categoryDiv.classList.add("category-container");


                const categoryTitle = document.createElement("h1");
                categoryTitle.innerText = category;
                categoryTitle.classList.add("category-title");
                categoryTitle.classList.add("text-center");
                categoryDiv.appendChild(categoryTitle);


                const itemsDiv = document.createElement("div");
                itemsDiv.classList.add("menu-item-container");


                data.filter(item => item.category === category).forEach(item => {
                    const menuItem = document.createElement("div");
                    menuItem.classList.add("menu-item");

                    menuItem.innerHTML = `
                        <div class="menu-image">
                            <img src="./../src/${item.image}" alt="${item.name}">
                        </div>
                        <div class="menu-details">
                            <h3>${item.name}</h3>
                            <p>${item.description || "Delicious food!"}</p>
                            <div>
                            <button class="menu-item-button btn-accent">Add to cart</button>
                            <button class="menu-item-details btn-accent"><a href="./menuItem.html?id=${item.id}">Details</a></button>
                            </div>
                            
                        </div>
                    `;

                    itemsDiv.appendChild(menuItem);
                });


                categoryDiv.appendChild(itemsDiv);


                menuContainer.appendChild(categoryDiv);
            });
        })
        .catch(error => console.error("Error fetching menu:", error));
});
