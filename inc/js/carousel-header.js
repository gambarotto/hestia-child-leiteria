//header - filter
const $containerBackgrounds = document.querySelector('.page-header');
const $divBackground = document.querySelector('.header-filter');
$divBackground.classList.add('dg-selected');

// const divBackground = document.createElement('div');
// divBackground.className = 'header-filter';
// divBackground.setAttribute('style', 'background-image:url(http://localhost/leiteria/wp-content/uploads/2020/08/hero_image2.png)');

// const divBackground2 = document.createElement('div');
// divBackground2.className = 'header-filter';
// divBackground2.setAttribute('style', 'background-image:url(http://localhost/leiteria/wp-content/uploads/2020/08/imagem-sobre.jpg)');

const divBackground3 = document.createElement('div');
divBackground3.className = 'header-filter';
divBackground3.setAttribute('style', 'background-image:url(http://localhost/leiteria/wp-content/uploads/2020/08/image-026.png)');

//$containerBackgrounds.appendChild(divBackground);
//$containerBackgrounds.appendChild(divBackground2);
$containerBackgrounds.appendChild(divBackground3);

const divs = [$divBackground,divBackground3]// divBackground2, divBackground3];
const max = divs.length;
const time = 5000;
let index = 0;

function carousel(){
  divs[index].classList.remove('dg-selected');
  index++;
  if(index >= max){
    index = 0;
  }
  divs[index].classList.add('dg-selected');
}

function start(){
  setInterval(carousel,time);
}
window.addEventListener('load', start);