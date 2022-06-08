import All from '../view/pages/all';
import Detail from '../view/pages/detail';
import Favorite from '../view/pages/like';

const routes = {
  '/': All,
  '/all': All,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
