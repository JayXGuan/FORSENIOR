// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/baimu/Documents/code/ForSenior/node_modules/@umijs/preset-built-in/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'/Users/baimu/Documents/code/ForSenior/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'/Users/baimu/Documents/code/ForSenior/src/layouts/SecurityLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/Users/baimu/Documents/code/ForSenior/src/layouts/BasicLayout'), loading: LoadingComponent}),
            "routes": [
              {
                "path": "/",
                "redirect": "/welcome",
                "exact": true
              },
              {
                "name": "list.table-list",
                "icon": "table",
                "path": "/list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ListTableList' */'/Users/baimu/Documents/code/ForSenior/src/pages/ListTableList'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/baimu/Documents/code/ForSenior/src/pages/404'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/baimu/Documents/code/ForSenior/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/baimu/Documents/code/ForSenior/src/pages/404'), loading: LoadingComponent}),
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
