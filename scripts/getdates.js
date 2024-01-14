let current_date = new Date();

let current_year = current_date.getFullYear();

document.querySelector('#year').innerHTML = current_year;

let oLastModif = new Date(document.lastModified);

var options = { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

oLastModif = oLastModif.toLocaleDateString("en-US", options);

document.querySelector('#lastModified').innerHTML = oLastModif;
