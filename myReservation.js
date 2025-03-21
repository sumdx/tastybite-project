document.addEventListener("DOMContentLoaded", () => {

    const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));
    console.log(bookingInfo);

    const reservationList = document.getElementById("reservation-list");

    if(bookingInfo.length>0){

        reservationList.innerHTML = bookingInfo
        .map((res, index) => `
            <div class="reservation-card">
                <p><strong>Reservation ${index + 1}:</strong></p>
                <p>Name: ${res.name}</p>
                <p>Phone: ${res.phone}</p>
                <p>Date: ${res.date}</p>
                <p>Time: ${res.time}</p>
                <p>Guests: ${res.guests}</p>
                <button onclick="deleteReservation(${index})">Cancel</button>
                <hr>
            </div>
        `)
        .join("");

    }else{
        reservationList.innerHTML =`
                <h1> No reservation found</h1>
           
        `
    }

   

});

function deleteReservation(index) {
    let reservations = JSON.parse(localStorage.getItem("bookingInfo")) || [];
    reservations.splice(index, 1); 
    localStorage.setItem("bookingInfo", JSON.stringify(reservations));
    location.reload(); 
}