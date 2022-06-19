const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (e) => {
      this._toggleDrawer(e, drawer);
    });

    content.addEventListener('click', (e) => {
      this._closeDrawer(e, drawer);
    });
  },

  _toggleDrawer(e, drawer) {
    e.stopPropagation();
    drawer.classList.toggle('open');
    e.preventDefault();
  },

  _closeDrawer(e, drawer) {
    e.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
