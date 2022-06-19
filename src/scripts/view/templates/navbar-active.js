const home = document.getElementById('home-link');
const favorite = document.getElementById('favorite-link');

home.addEventListener('click', () => {
  home.classList.add('active');
  favorite.classList.remove('active');
});

favorite.addEventListener('click', () => {
  home.classList.remove('active');
  favorite.classList.add('active');
});
