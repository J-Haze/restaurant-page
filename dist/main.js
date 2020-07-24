!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function a(){console.log("Running menu() from ./menuTab.js");let e=document.getElementById("content-container");const t={"signature cocktails":[["Boulevardier",14],["Cosmopolitan",12],["Gin & Tonic",12],["Manhattan",14],["Martini",12],["Negroni",14],["Old Fashioned",16],["Sidecar",14],["Vieux Carre",16]],"soups & salads":[["House Soup",8],["Lobster Bisque",9],["Iceberg Lettuce Wedge",9],["Caesar Salad",9],["Steakhouse Salad",20]],starters:[["Wagyu Beef Carpaccio",24],["Seared Diver Scallops",18],["Jumbo Lump Crabcake",22],["Pork Belly",15],["Wagyu Slider Duo",16]],sides:[["Stuffed Baked Potatoe",12],["Creamed Spinach",10],["Mashed Potatoes",9],["Green Beans",11],["Charred Summer Squash",14]],"prime steaks":[["8OZ Filet Mignon",51],["14OZ Bone-In Filet Mignon",60],["16OZ New York Strip",58],["22OZ Bone-In Ribeye",66],["22OZ Dry-Aged Ribeye",84],["8OZ Wisconsin Grass Fed Strip Loin",59],["5OZ American Wagyu Strip Loin",50],["5OZ Carrara 640 Wagyu Strip Loin",75],["5OZ Japanese A5 Wagyu Strip Loin",100],["Beef Wellington",105]],"large steaks":[["32OZ. Tomahawk Ribeye",129],["48OZ. Porterhouse",135]],sauce:[["Au Poivre",4],["Roquefort",4],["Bearnaise",4],["House Steak Sauce",4],["Horseradish Crème Fraîche",4]],dessert:[["Vanilla Bean Creme Brulee",8],["Gooey Toffee Pudding Cake",9],["Lemon New York Cheesecake",9],["Peanut Butter Banana Cream Pie",9],["Chocolate Caramel Cream Puff",10],["Assorted Ice Creams & Sorbet",5]]};console.log(t);let n=document.createElement("div");n.id="menu-content",e.appendChild(n);let a=document.createElement("div"),o=document.createElement("div");n.appendChild(a),n.appendChild(o),a.id="col-one",o.id="col-two",a.className="col",o.className="col";let i=0;for(let e in t){let n=document.createElement("div");n.className="submenu";let r=document.createElement("div");r.className="submenu-title",r.textContent=e.toUpperCase();let l=document.createElement("table");l.className="table",t[e].forEach(e=>{let t=document.createElement("table-row"),n=[e[0],e[1]];t.className="row",n.forEach(e=>{let n=document.createElement("table-column");n.textContent=e,"number"==typeof e?n.classList.add("price"):n.classList.add("item"),t.appendChild(n)}),l.appendChild(t)}),n.appendChild(r),n.appendChild(l),i<4?a.appendChild(n):o.appendChild(n),i++}}n.r(t);let o="menu",i=document.getElementById("content-container"),r=document.getElementById("home-tab"),l=document.getElementById("reservations-tab"),d=document.getElementById("menu-tab");function s(){i.innerHTML=""}r.addEventListener("click",()=>{"home"!=o&&(o="home",r.classList.add("selected"),d.classList.remove("selected"),l.classList.remove("selected"),s(),function(){console.log("Running home() from ./homeTab.js");let e=document.getElementById("content-container"),t=document.createElement("div");t.id="home-content",t.className="tab-content",e.appendChild(t);let n=document.createElement("div");n.id="story-headline",n.innerHTML="The Story of The Steakhouse",t.appendChild(n);let a=document.createElement("div");a.id="photoDiv",t.appendChild(a);let o=document.createElement("img");o.id="landscape-photo",o.src="images/landscape.jpg",a.appendChild(o);let i=document.createElement("div");i.id="story",i.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",t.appendChild(i)}())}),d.addEventListener("click",()=>{"menu"!=o&&(o="menu",r.classList.remove("selected"),d.classList.add("selected"),l.classList.remove("selected"),s(),a())}),l.addEventListener("click",()=>{"res"!=o&&(o="res",r.classList.remove("selected"),d.classList.remove("selected"),l.classList.add("selected"),s())}),a()}]);