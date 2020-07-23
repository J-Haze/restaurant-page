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
    
    let homeContent = document.createElement('div');
    homeContent.id = "home-content";
    homeContent.className = "tab-content";
    contentContainer.appendChild(homeContent);

    let storyHeadline = document.createElement('div');
    storyHeadline.id = "story-headline";
    storyHeadline.innerHTML = "MENU";
    homeContent.appendChild(storyHeadline); 

    let photoDiv = document.createElement('div');
    photoDiv.id = "photoDiv";
    homeContent.appendChild(photoDiv); 

    let homePhoto = document.createElement('img');
    homePhoto.id = "landscape-photo";
    homePhoto.src = "images/landscape.jpg";
    photoDiv.appendChild(homePhoto);

    let story = document.createElement('div');
    story.id = "story";
    story.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    homeContent.appendChild(story);
}

export{menu}