document.getElementById("reservation-form").onsubmit = function(event) {
    event.preventDefault(); 
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const date = event.target.date.value;
    const time = event.target.time.value;
    const guests=  event.target.guests.value;
    const bookingInfo =  {name,phone,date,time,guests,guests};
    const bookings = JSON.parse(localStorage.getItem("bookingInfo")) || [];
    bookings.push(bookingInfo);
    localStorage.setItem("bookingInfo", JSON.stringify(bookings));
    location.href = "./../pages/myReservation.html";
};