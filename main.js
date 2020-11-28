const menuBtn = document.querySelector('#main-menu-btn');
const openMenu = document.querySelector('body');
const xsScreen = matchMedia("(max-width: 576px)");
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('humburger-open');
    openMenu.classList.toggle('open-menu');
    document.querySelector('.logo').style.display = "none";
    document.querySelector('#welcome').style.display = "none";
    // document.querySelector('.logo').style.backgroundColor = "rgba(255, 0, 0, 0)";
    }
)

xsScreen.addEventListener('change', () => {
    console.log(xsScreen.matches)
    if (xsScreen.matches)
    {
        document.querySelector('#welcome').innerHTML = "WELCOME";
        // document.querySelector('#welcome').style.color = "blue";
        // matchedXsScreen.classList
    }
    else 
    {
        document.querySelector('#welcome').innerHTML = "WELCOME TO MY WEBSITE";
    }
})

// const menuBtn = document.querySelector('.main-menu-btn');
// const mainNav = document.querySelector('.mainNav');
// const menuOptions = document.querySelectorAll('.menu-option');
// const mainMenuWrapperBackground = document.querySelector('.main-menu-wrapper');
// let menuOpen = false;

// menuBtn.addEventListener('click', () => {
//     if(!menuOpen)
//     {
//         menuBtn.classList.add('open');
//         mainNav.classList.add('open-mainNav');
//         menuOptions.forEach(function(item) {
//             item.classList.add('menu-options');
//         });
//         mainMenuWrapperBackground.classList.add('open-overlay');
//         menuOpen = true;
//     }
//     else
//     {
//         menuBtn.classList.remove('open');
//         mainNav.classList.remove('open-mainNav');
//         menuOptions.forEach(function(item) {
//             item.classList.remove('menu-options');
//         });
//         mainMenuWrapperBackground.classList.remove('open-overlay');
//         menuOpen = false;
//     }
// });