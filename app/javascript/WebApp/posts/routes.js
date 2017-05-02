import List from './List';

// const routes = [
//   { path: '/sandwiches',
//     component: Sandwiches
//   },
//   { path: '/tacos',
//     component: Tacos,
//     routes: [
//       { path: '/tacos/bus',
//         component: Bus
//       },
//       { path: '/tacos/cart',
//         component: Cart
//       }
//     ]
//   }
// ];

const routes = [
  {
    path: '/posts',
    component: List,
    requireAuth: true,
  }
];

export default routes;
