module.exports = [
  {
    exact: false,
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/',
        component: '../pages/QRScanner',
      },
      {
        path: '/Camera',
        component: '../pages/Camera',
      },
    ],
  },
];
