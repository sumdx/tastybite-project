document.addEventListener("DOMContentLoaded", () => {
  let data = [];
  data = menu;
  let index = 6;
  data.sort((a, b) => b.rating - a.rating);

  for (let i = 0; i < 6; i++) {
    const bestItemContainer = document.getElementById("best-item-container");
    const bestItemBox = document.createElement("div");
    bestItemBox.innerHTML = `
        <div class="menu-image">
             <img src="./src/images/${data[i].image}" alt="${data[i].name}">
        </div>
        <div class="menu-details">
            <h3>${data[i].name}</h3>
            <p>${data[i].description || "Delicious food!"}</p>
            <br>
            <p>Rating : ${data[i].rating || "Delicious food!"}</p>
        <div>
        <button  class="menu-item-button btn-accent" onclick="addToCart(${data[i].id})">Add to cart</button>
        <button class="menu-item-details btn-accent"><a href="./src/pages/menuItem.html?id=${
          data[i].id
        }">Details</a></button>
        </div>
                            
        </div>
        `;
    bestItemContainer.appendChild(bestItemBox);
  }
});

function addToCart(itemId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const item = menu.find((i) => i.id=== itemId);
  if (!cart.includes(item)) {
      cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Item ${item.name} added to cart!`);
}

document.getElementById("last-updated").textContent = new Date(document.lastModified).toLocaleString();
document.getElementById("current-time").textContent = new Date().toLocaleString();
menu = [
  {
    rating: 4.5,
    id: 1,
    name: "Cheese Burger",
    category: "Burgers",
    price: 8.99,
    image: "cheeseBurger.png",
    description: "A juicy beef patty with melted cheese, lettuce, and tomato.",
  },
  {
    rating: 4.2,
    id: 2,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 12.99,
    image: "margheritaPizza.png",
    description:
      "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
  },
  {
    id: 3,
    rating: 4.4,
    name: "Pasta Alfredo",
    category: "Pasta",
    price: 10.99,
    image: "pastaAlfredo.png",
    description:
      "Creamy Alfredo sauce with fettuccine pasta and parmesan cheese.",
  },
  {
    id: 4,
    rating: 4.6,
    name: "Caesar Salad",
    category: "Salads",
    price: 7.99,
    image: "caesarSalad.png",
    description:
      "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.",
  },
  {
    id: 5,
    rating: 5,
    name: "Cheese Pizza",
    category: "Pizza",
    price: 11.99,
    image: "cheesePizza.png",
    description:
      "Classic pizza with tomato sauce and a generous layer of mozzarella cheese.",
  },
  {
    id: 6,
    rating: 4.6,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 13.99,
    image: "pepperoniPizza.png",
    description: "Pizza topped with zesty pepperoni slices and mozzarella.",
  },
  {
    id: 7,
    rating: 3.5,
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    price: 14.99,
    image: "bbqChickenPizza.png",
    description:
      "Grilled chicken, red onions, and BBQ sauce on a crispy crust.",
  },
  {
    id: 8,
    rating: 4.2,
    name: "Philly Cheesesteak",
    category: "Sandwiches",
    price: 10.99,
    image: "phillyCheesesteak.png",
    description:
      "Sliced steak, grilled onions, and melted cheese on a toasted hoagie roll.",
  },
  {
    id: 9,
    rating: 4.2,
    name: "Bacon Cheeseburger",
    category: "Burgers",
    price: 10.99,
    image: "baconCheeseburger.png",
    description:
      "Classic cheeseburger topped with crispy bacon and special sauce.",
  },
  {
    id: 10,
    rating: 4.2,
    name: "Veggie Burger",
    category: "Burgers",
    price: 9.49,
    image: "veggieBurger.png",
    description: "Plant-based patty with lettuce, tomato, and avocado spread.",
  },
  {
    id: 11,
    rating: 4.2,
    name: "Grilled Chicken Sandwich",
    category: "Sandwiches",
    price: 8.99,
    image: "grilledChickenSandwich.png",
    description:
      "Grilled chicken breast with lettuce, tomato, and honey mustard.",
  },
  {
    id: 12,
    rating: 4.2,
    name: "Turkey Club Sandwich",
    category: "Sandwiches",
    price: 9.99,
    image: "turkeyClub.png",
    description: "Turkey, bacon, lettuce, tomato, and mayo on toasted bread.",
  },
  {
    id: 13,
    rating: 4.2,
    name: "Greek Salad",
    category: "Salads",
    price: 8.49,
    image: "greekSalad.png",
    description:
      "Crisp lettuce, feta cheese, olives, cucumber, and Greek dressing.",
  },
  {
    id: 14,
    rating: 4.2,
    name: "Garden Salad",
    category: "Salads",
    price: 7.49,
    image: "gardenSalad.png",
    description:
      "Fresh mixed greens with cherry tomatoes, cucumber, and carrots.",
  },
  {
    id: 15,
    rating: 4.2,
    name: "French Fries",
    category: "Sides",
    price: 3.99,
    image: "frenchFries.png",
    description: "Crispy golden fries served with ketchup.",
  },
  {
    id: 16,
    rating: 4.2,
    name: "Onion Rings",
    category: "Sides",
    price: 4.99,
    image: "onionRings.png",
    description: "Crunchy battered onion rings with a side of dipping sauce.",
  },
  {
    id: 17,
    rating: 4.5,
    name: "Chicken Wings",
    category: "Appetizers",
    price: 11.99,
    image: "chickenWings.png",
    description:
      "Spicy buffalo wings served with blue cheese or ranch dressing.",
  },
  {
    id: 18,
    rating: 3.5,
    name: "Mozzarella Sticks",
    category: "Appetizers",
    price: 6.99,
    image: "mozzarellaSticks.png",
    description: "Crispy breaded mozzarella sticks with marinara sauce.",
  },
  {
    id: 19,
    rating: 4.3,
    name: "Clam Chowder",
    category: "Soups",
    price: 7.49,
    image: "clamChowder.png",
    description: "Rich and creamy clam chowder with potatoes and herbs.",
  },
  {
    id: 20,
    rating: 4.4,
    name: "Tomato Basil Soup",
    category: "Soups",
    price: 6.99,
    image: "tomatoBasilSoup.png",
    description: "Classic tomato soup with fresh basil and a hint of cream.",
  },
  {
    id: 21,
    rating: 4.7,
    name: "Spaghetti Bolognese",
    category: "Pasta",
    price: 13.99,
    image: "spaghettiBolognese.png",
    description: "Hearty beef Bolognese sauce over spaghetti noodles.",
  },
  {
    id: 22,
    rating: 3.5,
    name: "Fettuccine Alfredo",
    category: "Pasta",
    price: 12.99,
    image: "fettuccineAlfredo.png",
    description: "Creamy Alfredo sauce over fettuccine pasta.",
  },
  {
    id: 23,
    rating: 3.8,
    name: "Chicken Parmesan",
    category: "Entrees",
    price: 15.99,
    image: "chickenParmesan.png",
    description:
      "Breaded chicken breast topped with marinara and mozzarella, served with pasta.",
  },
  {
    id: 24,
    rating: 4.4,
    name: "Grilled Salmon",
    category: "Entrees",
    price: 17.99,
    image: "grilledSalmon.png",
    description:
      "Grilled salmon filet with lemon butter sauce and steamed vegetables.",
  },
  {
    id: 25,
    rating: 4.5,
    name: "Hawaiian Pizza",
    category: "Pizza",
    price: 13.99,
    image: "hawaiianPizza.png",
    description:
      "A sweet and savory combination of ham, pineapple, and mozzarella on a crispy crust.",
  },
  {
    id: 26,
    rating: 4.2,
    name: "Steak and Mashed Potatoes",
    category: "Entrees",
    price: 18.99,
    image: "steakMashedPotatoes.png",
    description:
      "Juicy grilled steak served with creamy mashed potatoes and steamed vegetables.",
  },
  {
    id: 27,
    rating: 4.1,
    name: "Minestrone Soup",
    category: "Soups",
    price: 6.99,
    image: "minestroneSoup.png",
    description:
      "A hearty Italian soup with beans, vegetables, and pasta in a savory broth.",
  },
  {
    id: 28,
    rating: 4.0,
    name: "Buffalo Chicken Pizza",
    category: "Pizza",
    price: 14.99,
    image: "buffaloChickenPizza.png",
    description:
      "Spicy buffalo chicken with ranch drizzle and mozzarella on a crispy crust.",
  },
  {
    id: 29,
    rating: 4.5,
    name: "Stuffed Jalapeños",
    category: "Appetizers",
    price: 7.99,
    image: "stuffedJalapenos.png",
    description:
      "Jalapeños stuffed with cream cheese, wrapped in crispy bacon, and served with ranch.",
  },
  {
    id: 30,
    rating: 4.7,
    name: "Garlic Bread",
    category: "Sides",
    price: 4.99,
    image: "garlicBread.png",
    description:
      "Toasted garlic bread topped with butter, garlic, and parmesan cheese.",
  },
];
