const menuBtn = document.querySelector('#main-menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen)
    {
        menuBtn.classList.add('humburger-open');
    }
    else
    {
        menuBtn.classList.remove('humburger-open');
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