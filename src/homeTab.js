//homeTab.js


// const homeTab = () => {

function home() {
    console.log('Running home() from ./homeTab.js')
    // let tabsContainer = document.getElementById("tabs-container")
    let mode = "home";

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
    

    let contentContainer = document.getElementById("content-container")
    
    let homeContent = document.createElement('div');
    homeContent.id = "home-content";
    homeContent.className = "tab-content";
    contentContainer.appendChild(homeContent);

    let storyHeadline = document.createElement('div');
    storyHeadline.id = "story-headline";
    storyHeadline.innerHTML = "The Story of The Steakhouse";
    homeContent.appendChild(storyHeadline); 

    let photoDiv = document.createElement('div');
    photoDiv.id = "photoDiv";
    homeContent.appendChild(photoDiv); 

    let homePhoto = document.createElement('img');
    homePhoto.id = "landscape-photo";
    homePhoto.src = "dist/images/cow.jpg";
    photoDiv.appendChild(homePhoto);

    let story = document.createElement('div');
    story.id = "story";
    story.innerHTML = "Look at this photograph. Every time I do it makes me laugh. How did our eyes get so red? And what the hell is on Joey's head?" +
                        "<br/> <br/>This is where I grew up. I think the present owner fixed it up. I never knew we ever went without. The second floor is hard for sneakin' out. And this is where I went to school." +
                        " Most of the time I had better things to do. Criminal record says I broke in twice. I must of done it half a dozen times. I wonder if it's too late. Should I go back and try to graduate?" +
                        " Lot's better now than it was back then. If I was them, I wouldn't let me in. Every memory of lookin' out the back door. I have the photo album spread out on my bedroom floor. It's hard to say it." +
                        " Time to say it: Good bye, good bye" +
                        "<br/><br/>Every memory of walkin' out the front door, I found the photo of the friend that I was lookin' for. It's hard to say it. Time to say it. Good bye, good bye, good bye. Remember the old arcade?" +
                        " Blew every dollar that we ever made. The cops hated us hangin' out. They said somebody went and burnt it down. We use to listen to the radio, and sing along with every song we know.We said someday we'd find out how it feels." +
                        " To sing to more than just a steering wheel, Kim's the first girl I kissed. I was so nervous that I nearly missed. She's had a couple of kids since then. I haven't seen her since God knows when." +
                        " Every memory of lookin' out the back door. I have the photo album spread out on my bedroom floor. It's hard to say it. Time to say it. Good bye, goodbye. Every memory of walkin' out the front door. I found the photo of the friend that I was lookin' for." +
                        " It's hard to say it. Time to say it: Goodbye, goodbye, goodbye" +
                        "<br/><br/>I miss that town. I miss their faces. You can't erase. You can't replace it. I miss it now, I can't believe it. So hard to stay, too hard to leave it. If I could relive those days. I know the one thing that would never change." +
                        " Every memory of lookin' out the back door. I have the photo album spread out on my bedroom floor. It's hard to say it. Time to say it: Goodbye, goodbye. Every memory of walkin' out the front door. I found the photo of the friend that I was lookin' for." +
                        "<br/><br/>It's hard to say it. Time to say it, goodbye, goodbye, good bye. Look at this photograph, every time I do it makes me laugh."
    homeContent.appendChild(story);

}

export{home}
