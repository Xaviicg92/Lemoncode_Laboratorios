import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  details: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  details: '/details/:id',
};

// type NavigationFunction = (id: string) => string;

// interface LinkRoutes extends Omit<SwitchRoutes, 'editHotel'> {
//   editHotel: NavigationFunction;
// }

// export const linkRoutes: LinkRoutes = {
//   ...switchRoutes,
//   editHotel: (id) => generatePath(switchRoutes.editHotel, { id }),
// };
