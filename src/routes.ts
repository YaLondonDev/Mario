import loadable from '@loadable/component';

const Game = loadable(() => import('./pages/Game/Game'));
const Home = loadable(() => import('./pages/Home/Home'));
const Leaderboard = loadable(() => import('./pages/Leaderboard/Leaderboard'));
const SignIn = loadable(() => import('./pages/SignIn/SignIn'));
const SignUp = loadable(() => import('./pages/SignUp/SignUp'));
const UserPage = loadable(() => import('./pages/UserPage/UserPage'));
const Feedback = loadable(() => import('./pages/Feedback/Feedback'));

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
  {
    path: '/feedback',
    component: Feedback,
    exact: true,
  },
];
