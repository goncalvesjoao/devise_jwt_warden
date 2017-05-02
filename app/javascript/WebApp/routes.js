import Layout from './Layout';
import { routes as home } from './home';
import { routes as posts, List as rootComponent } from './posts';
import { routes as users } from './users';
import { addPathPrefixToRoutes } from './utils';

const routes = [
  {
    component: Layout,
    routes: addPathPrefixToRoutes('/web_app', [
      {
        path: '/',
        exact: true,
        component: rootComponent
      },
      ...home,
      ...users,
      ...posts
    ])
  }
];

export default routes;
