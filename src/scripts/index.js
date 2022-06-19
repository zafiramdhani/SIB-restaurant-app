import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/animation.css';
import App from './view/app';
import swRegister from './utils/sw-register';

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
  swRegister();
});
