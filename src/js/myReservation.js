document.addEventListener("DOMContentLoaded", () => {

    const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo")) || [];
    const cartInfo = JSON.parse(localStorage.getItem("cart")) || [];
    let total =0 ;
    for(let item of cartInfo){

        total = total + item.price;

    }
    
    

    const reservationList = document.getElementById("reservation-body");
    const cartList = document.getElementById("cart-body");

    if(bookingInfo.length>0){

        reservationList.innerHTML = bookingInfo
        .map((res, index) => `

            <tr>
                    <td>${index + 1}</td>
                    <td>${res.name}</td>
                    <td>${res.phone}</td>
                    <td>${res.date}</td>
                    <td>${res.time}</td>
                    <td>${res.guests}</td>
                    <td><button onclick="deleteReservation(${index})">Cancel</button></td>
            </tr>
        `)
        .join("");

    }else{
        reservationList.innerHTML =`
        <tr >
                    <td class="py-sm" colspan="7"> No reservation found</td>
        </tr>
           
        `
    }

    if(cartInfo.length>0){

        cartList.innerHTML = cartInfo
        .map((res, index) => `

            <tr>
                    <td>${index + 1}</td>
                    <td>${res.name}</td>
                    <td>${res.price}</td>
                    <td><button onclick="deleteCart(${index})">Cancel</button></td>
            </tr>
        `)
        .join("");
        cartList.innerHTML =`
    <tr >
                 <td>" "</td>
                    <td> Total </td>
                    <td>${total}</td>
                <td><button onclick="deleteCart(${index})">Cancel</button></td>
    </tr>
       
    `

    }else{
        cartList.innerHTML =`
        <tr >
                    <td class="py-sm" colspan="7"> No item found</td>
        </tr>
           
        `
    }

    

   

});

function deleteReservation(index) {
    let reservations = JSON.parse(localStorage.getItem("bookingInfo")) || [];
    reservations.splice(index, 1); 
    localStorage.setItem("bookingInfo", JSON.stringify(reservations));
    location.reload(); 
}

function deleteCart(index) {
    let reservations = JSON.parse(localStorage.getItem("cart")) || [];
    reservations.splice(index, 1); 
    localStorage.setItem("cart", JSON.stringify(reservations));
    location.reload(); 
}