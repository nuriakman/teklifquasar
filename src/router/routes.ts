import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/welcome/WelcomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/welcome/IndexPage.vue') },
      {
        path: 'register',
        component: () => import('pages/welcome/RegisterPage.vue'),
      },
      {
        path: 'login',
        component: () => import('pages/welcome/LoginPage.vue'),
      },
      {
        path: 'about',
        component: () => import('pages/welcome/AboutPage.vue'),
      },
    ],
  },

  {
    path: '/home',
    component: () => import('layouts/main/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/main/IndexPage.vue') },
      { path: 'help', component: () => import('pages/main/HelpPage.vue') },
      { path: 'bus', component: () => import('pages/main/BusPage.vue') },
      {
        path: 'konfeti',
        component: () => import('pages/main/ConfettiPage.vue'),
      },
      { path: 'test', component: () => import('pages/main/TestPage.vue') },
      { path: 'test1', component: () => import('pages/main/Test1Page.vue') },
      { path: 'test2', component: () => import('pages/main/Test2Page.vue') },
      {
        path: 'logout',
        component: () => import('pages/main/LogoutPage.vue'),
      },
      {
        path: 'offer',
        component: () => import('pages/main/OfferPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/welcome/ErrorNotFound.vue'),
  },
];

export default routes;
