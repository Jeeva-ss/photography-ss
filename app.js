const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a')

const handleClick = () => {
  nav.classList.toggle('nav-open')
  burger.classList.toggle('toggle')
}

burger.addEventListener('click', handleClick)
links.forEach((link) => {
  link.addEventListener('click', handleClick)
})