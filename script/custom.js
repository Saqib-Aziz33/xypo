/* navbar event */
const navTogglerBtn = document.getElementById(`nav-toggler-btn`);
const sideNav = document.getElementById(`side-nav`);

navTogglerBtn.addEventListener(`click`, () => {
    sideNav.classList.toggle(`show-nav`);
})

/* social icons */
const socialIcons = document.querySelector(`.social-icons`);

window.addEventListener(`scroll`, () => {
    if(window.pageYOffset > 500){
        socialIcons.style.left = `0`;
    }
    else{
        socialIcons.style.left = `-100px`;
    }
})