import All from '../view/pages/all';
import Detail from '../view/pages/detail';

const routes = {
  '/': All,
  '/all': All,
  '/detail/:id': Detail,
};

export default routes;
