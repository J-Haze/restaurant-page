import {home} from './homeTab';
import {menu} from './menuTab';
import {reservations} from './reservationsTab';

let mode = "home";

let contentContainer = document.getElementById('content-container');
let homeTab = document.getElementById('home-tab');
let resTab = document.getElementById('reservations-tab');
let menuTab = document.getElementById('menu-tab');

function clear() {
    contentContainer.innerHTML = "";
}


homeTab.addEventListener('click', () => {
    if (mode == "home") return
    mode = "home";
    homeTab.classList.add("selected");
    menuTab.classList.remove("selected");
    resTab.classList.remove("selected");
    clear();
    home();
});

menuTab.addEventListener('click', () => {
    if (mode == "menu") return
    mode = "menu";
    homeTab.classList.remove("selected");
    menuTab.classList.add("selected");
    resTab.classList.remove("selected");
    clear();
    menu(); 
});

resTab.addEventListener('click', () => {
    if (mode == "res") return
    mode = "res";
    homeTab.classList.remove("selected");
    menuTab.classList.remove("selected");
    resTab.classList.add("selected");
    clear();
    reservations();
});

home();

