//homeTab.js

// const homeTab = () => {

function home() {
  console.log("Running home() from ./homeTab.js");
  let mode = "home";

  let contentContainer = document.getElementById("content-container");

  let homeContent = document.createElement("div");
  homeContent.id = "home-content";
  homeContent.className = "tab-content";
  contentContainer.appendChild(homeContent);

  let storyHeadline = document.createElement("div");
  storyHeadline.id = "story-headline";
  storyHeadline.innerHTML = "The Story of The Steakhouse";
  homeContent.appendChild(storyHeadline);

  let photoDiv = document.createElement("div");
  photoDiv.id = "photoDiv";
  homeContent.appendChild(photoDiv);

  let homePhoto = document.createElement("img");
  homePhoto.id = "landscape-photo";
  homePhoto.src = "dist/images/cow.jpg";
  photoDiv.appendChild(homePhoto);

  let story = document.createElement("div");
  story.id = "story";
  story.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  homeContent.appendChild(story);
}

export { home };
