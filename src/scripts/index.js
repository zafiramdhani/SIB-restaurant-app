import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './view/app';
// import data from './data/DATA.json';

// for (let i = 0; i < data.restaurants.length; i++) {
//   const addDiv = document.createElement('div');
//   addDiv.setAttribute('class', 'res');
//   addDiv.innerHTML = `
//     <div class="res-image">
//       <img src="
//        ${data.restaurants[i].pictureId}" width="100%"
//        alt="${data.restaurants[i].name} image">
//     </div>
//     <div class="city">
//       <p>${data.restaurants[i].city}</p>
//     </div>
//     <div class="res-description">
//       <h4>Rating: ${data.restaurants[i].rating}</h4>
//       <h3>${data.restaurants[i].name}.</h3>
//       <p>${data.restaurants[i].description}</p>
//     </div>
//   `;
//   document.querySelector('article').appendChild(addDiv);
// }

const app = new App({
  button: document.querySelector('#hamburger-btn'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('#explore'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// const btnHamburger = document.querySelector('#hamburger-btn');
// const drawer = document.querySelector('nav');
// const main = document.querySelector('main');

// btnHamburger.addEventListener('click', (e) => {
//   drawer.classList.toggle('open');
//   e.stopPropagation();
// });

// main.addEventListener('click', (e) => {
//   drawer.classList.remove('open');
//   e.stopPropagation();
// });
