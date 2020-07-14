const renderContact = pageDiv => {
    let page = document.createElement("div")
    page.id = "contact-page"
    page.classList.add("active", "page")

    let contact = document.createElement("div")
    let contactHtml = `<h6>CONTACT:</h6> <br> <p>Phone: <a href="tel:+01604905905"> +1 604-905-905</a></p> <br> <p>Email: <a href = "mailto:info@goldenmountain.com"> info@goldenmountain.com</a></p> <br>`
    contact.insertAdjacentHTML('beforeend', contactHtml);

    let location = document.createElement("div")
    let locationHtml = `<h6>LOCATION:</h6> <br> <a href="https://www.google.ca/maps/place/Main+St,+Whistler,+BC/@50.1183982,-122.9578806,17z/data=!3m1!4b1!4m5!3m4!1s0x54873cb3a3db2007:0x7e088b946f095b85!8m2!3d50.1183982!4d-122.9578806">Golden Mountain <br> 69 Main Street, Whistler</a><br>`
    location.insertAdjacentHTML('beforeend',locationHtml);
    
    let hours = document.createElement("div")
    let hoursHtml = `<h6>HOURS:</h6> <br> <p>Tuesday - Sunday: 12PM - 10PM</p> <br> <p>DINE-IN, DELIVERY OR TAKEAWAY</p><br>`
    hours.insertAdjacentHTML('beforeend', hoursHtml);

    page.appendChild(contact)
    page.appendChild(location)
    page.appendChild(hours)
    pageDiv.appendChild(page)
}

export default renderContact

