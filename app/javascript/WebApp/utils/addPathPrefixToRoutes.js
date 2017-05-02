import _ from 'lodash';

function addPathPrefix(pathPrefix, route) {
  if (route.path) {
    route.path = pathPrefix + route.path;
  }

  if (route.routes) {
    addPathPrefixToRoutes(pathPrefix, route.routes);
  }

  return route;
}

function addPathPrefixToRoutes(pathPrefix, routes) {
  if (_.isArray(routes)) {
    _.forEach(routes, addPathPrefix.bind(null, pathPrefix));
  } else {
    addPathPrefix(pathPrefix, route);
  }

  return routes;
}

export default addPathPrefixToRoutes;
