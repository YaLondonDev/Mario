import { Game, Home, Leaderboard, SignIn, SignUp, UserPage } from './pages';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    isProtected: true,
  },
  {
    path: '/game',
    component: Game,
    exact: true,
    isProtected: true,
  },
  {
    path: '/leaderboard',
    component: Leaderboard,
    exact: true,
    isProtected: true,
  },
  {
    path: '/user',
    component: UserPage,
    exact: true,
    isProtected: true,
  },
  {
    path: '/signin',
    component: SignIn,
    exact: true,
  },
  {
    path: '/signup',
    component: SignUp,
    exact: true,
  },
];
