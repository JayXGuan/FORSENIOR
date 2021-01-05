export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './ListTableList',
              },
              // {
              //   name: '',
              //   icon: 'table',
              //   path: '/list/cmt_list',
              //   component: './ListTableList',
              // },
              // {
              //   name: 'theme',
              //   icon: 'table',
              //   path: '/list/theme',
              //   component: './ListTableList',
              // },
              // {
              //   name: 'singer_home',
              //   icon: 'table',
              //   path: '/list/singer_home',
              //   component: './ListTableList',
              // },
              // {
              //   name: 'mvvip',
              //   icon: 'table',
              //   path: '/list/mvvip',
              //   component: './ListTableList',
              // },
              // {
              //   name: 'nactcenterreact',
              //   icon: 'table',
              //   path: '/list/nactcenterreact',
              //   component: './ListTableList',
              // },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
