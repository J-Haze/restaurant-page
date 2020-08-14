function reservations() {

    let contentContainer = document.getElementById("content-container")
    
    let resContent = document.createElement('div');
    resContent.id = "res-content";
    resContent.className = "tab-content";
    contentContainer.appendChild(resContent);

    //Contact
    let contactCont = document.createElement('div');
    contactCont.id = "contactCont";
    resContent.appendChild(contactCont);

    let contact = document.createElement('div');
    contact.id = "contact";
    contact.className = "res-title";
    contact.innerHTML = "CONTACT:";
    contactCont.appendChild(contact); 

    let phone = document.createElement('div');
    phone.id = "phone";
    phone.innerHTML = "Phone: +1 512 555 1234";
    contactCont.appendChild(phone); 

    let email = document.createElement('div');
    email.id = "email";
    email.innerHTML = "Email: info@thesteakhouse.com";
    contactCont.appendChild(email); 

    //Location
    let locationCont = document.createElement('div');
    locationCont.id = "locationCont";
    resContent.appendChild(locationCont);

    let location = document.createElement('div');
    location.id = "location";
    location.className = "res-title";
    location.innerHTML = "LOCATION:";
    locationCont.appendChild(location);

    let address = document.createElement('div');
    address.id = "address";
    address.innerHTML = "The Steakhouse <br>6th Street, Austin, Texas";
    locationCont.appendChild(address); 

    //Hours
    let hoursCont = document.createElement('div');
    hoursCont.id = "hoursCont";
    resContent.appendChild(hoursCont);

    let hours = document.createElement('div');
    hours.id = "hours";
    hours.className = "res-title";
    hours.innerHTML = "HOURS:";
    hoursCont.appendChild(hours);

    let dateTime = document.createElement('div');
    dateTime.id = "dateTime";
    dateTime.innerHTML = "Monday-Sunday: 5 - 11pm";
    hoursCont.appendChild(dateTime);

}

export{reservations}