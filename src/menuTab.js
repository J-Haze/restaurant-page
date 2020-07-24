function menu() {
    console.log('Running menu() from ./menuTab.js')
    // let tabsContainer = document.getElementById("tabs-container")

    // let homeTab = document.createElement('div');
    // homeTab.id = "home-tab";
    // homeTab.className = "tab";
    // homeTab.innerHTML = "HOME";
    // tabsContainer.appendChild(homeTab);

    // let menuTab = document.createElement('div');
    // menuTab.id = "menu-tab";
    // menuTab.className = "tab selected";
    // menuTab.innerHTML= "MENU";
    // tabsContainer.appendChild(menuTab);

    // let resTab = document.createElement('div');
    // resTab.id = "reservations-tab";
    // resTab.className = "tab";
    // resTab.innerHTML = "RESERVATIONS"
    // tabsContainer.appendChild(resTab);
    
    let contentContainer = document.getElementById("content-container")

    const menus = {"signature cocktails":[
        ["Boulevardier", 14],
        ["Cosmopolitan", 12],
        ["Gin & Tonic", 12]
        ],

        "soups & salads":[
            ["House Soup", 8],
            ["Lobster Bisque", 9]
        ]
    };
    
    // let soups = [
    //     ["House Soup", 8],
    //     ["Lobster Bisque", 9]
    // ];

    // let menuSections = [cocktails, soups];

    console.log(menus)
    
    let menuContent = document.createElement('div');
    menuContent.id = "menu-content";
    menuContent.className = "tab-content";
    contentContainer.appendChild(menuContent);

    // console.log(menuSections)
    // console.log(cocktails)
    // for (let i = 0; i < menus.length; i++){
    for (let i in menus){
        let newSect = document.createElement('div');
        newSect.className = "submenu";

        let newTitle = document.createElement('div');
        newTitle.className = "submenu-title";
        newTitle.textContent = i.toUpperCase();

        let newTable = document.createElement('table');
        newTable.className = "table";

        menus[i].forEach(x => {
            let row = document.createElement("table-row")
            let item = x[0];
            let price = x[1];
            let rowItems = [item,price]
            row.className = "row";
            rowItems.forEach(y =>{
                let column = document.createElement("table-column")
                column.textContent = y;
                if (typeof(y) == "number"){
                    column.classList.add("price")
                } else{
                    column.classList.add("item")
                }
                row.appendChild(column);
            })
            newTable.appendChild(row);
        })
        
        newSect.appendChild(newTitle);
        newSect.appendChild(newTable);
        menuContent.appendChild(newSect);


        // console.log("With i", Object.getOwnPropertyNames(menus[i]))
        // console.log("just i:", i)
        // console.log("No i", Object.getOwnPropertyNames(menus))

        // let newTable = document.createElement('table')
        // for (i in sect){

        // }
    }


    // contentContainer.appendChild(innerHTML);
    // let storyHeadline = document.createElement('div');
    // storyHeadline.id = "story-headline";
    // storyHeadline.innerHTML = "MENU";
    // homeContent.appendChild(storyHeadline); 

    // let photoDiv = document.createElement('div');
    // photoDiv.id = "photoDiv";
    // homeContent.appendChild(photoDiv); 

    // let homePhoto = document.createElement('img');
    // homePhoto.id = "landscape-photo";
    // homePhoto.src = "images/landscape.jpg";
    // photoDiv.appendChild(homePhoto);

    // let story = document.createElement('div');
    // story.id = "story";
    // story.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    // homeContent.appendChild(story);
}

export{menu}