//Use functions and comments
//Seperate loading the main page and loading the Home tab
//"Put the contents of each tab within its own module"

import {home} from './homeTab';
import {menu} from './menuTab';
// import {reservations} from '.reservationsTab';

let mode = "home";

//Add event listeners for the tabs

// let tabsContainer = document.getElementById("tabs-container")
let contentContainer = document.getElementById('content-container');
let homeTab = document.getElementById('home-tab');
let resTab = document.getElementById('reservations-tab');
let menuTab = document.getElementById('menu-tab');

function clear() {
    // contentContainer.empty();
    contentContainer.innerHTML = "";
}
// let homeTab = document.createElement('div');
// let resTab = document.createElement('div');
// let menuTab = document.createElement('div');

// homeTab.id = "home-tab";
// homeTab.className = "tab selected";
// homeTab.innerHTML = "HOME";
// tabsContainer.appendChild(homeTab);

// menuTab.id = "menu-tab";
// menuTab.className = "tab";
// menuTab.innerHTML= "MENU";
// tabsContainer.appendChild(menuTab);

// resTab.id = "reservations-tab";
// resTab.className = "tab";
// resTab.innerHTML = "RESERVATIONS";
// tabsContainer.appendChild(resTab);


homeTab.addEventListener('click', () => {
    if (mode == "home") return
    mode = "home";
    homeTab.classList.add("selected");
    menuTab.classList.remove("selected");
    resTab.classList.remove("selected");
    clear();
    home();//Am I calling this function? Is that okay?
});

menuTab.addEventListener('click', () => {
    if (mode == "menu") return
    mode = "menu";
    homeTab.classList.remove("selected");
    menuTab.classList.add("selected");
    resTab.classList.remove("selected");
    clear();
    menu(); //Am I calling a function that isn't defined?
});

resTab.addEventListener('click', () => {
    if (mode == "res") return
    mode = "res";
    homeTab.classList.remove("selected");
    menuTab.classList.remove("selected");
    resTab.classList.add("selected");
    clear();
    // res(); //Am I calling a function that isn't defined?
});

home();
// menu();





// if (mode == "home"){
//     home();
// }else if (mode == "menu"){
//     menu();
// }else if (mode == "reservations"{
//     // reservations();
//     return
// }

