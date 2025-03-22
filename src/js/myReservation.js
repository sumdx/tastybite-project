document.addEventListener("DOMContentLoaded", () => {

    const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));
    console.log(bookingInfo);

    const reservationList = document.getElementById("reservation-body");

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

   

});

function deleteReservation(index) {
    let reservations = JSON.parse(localStorage.getItem("bookingInfo")) || [];
    reservations.splice(index, 1); 
    localStorage.setItem("bookingInfo", JSON.stringify(reservations));
    location.reload(); 
}