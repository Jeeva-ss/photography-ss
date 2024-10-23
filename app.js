const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a')

const currentYear1 = document.querySelector(".footer-wrapper h4 span");
const currentYear2 = new Date().getFullYear();
currentYear1.innerText = currentYear2;

const handleClick = () => {
  nav.classList.toggle('nav-open')
  burger.classList.toggle('toggle')
}

burger.addEventListener('click', handleClick)
links.forEach((link) => {
  link.addEventListener('click', handleClick)
})