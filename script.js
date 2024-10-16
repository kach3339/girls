
function initialize() {
  const closebtn= document.querySelector('.closebtn');
  closebtn.addEventListener('click', closeNav);
  const openbtn= document.querySelector('.openbtn');
  openbtn.addEventListener('click', openNav);
}
/* Открыть боковое меню */
function openNav() {
  document.querySelector('#menu').style.transform = "translateX(100%)";
}

/* Закрыть боковое меню */
function closeNav() {
  document.querySelector('#menu').style.transform = "translateX(-100%)";
}

initialize();