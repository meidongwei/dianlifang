import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

import overview from '@/views/overview'
import intro from '@/views/overview/intro'
import advantage from '@/views/overview/advantage'
import location from '@/views/overview/location'

import gres from '@/views/gres'
import gresW from '@/views/gres/gresW'
import gresJZ from '@/views/gres/gresJZ'
import gresJT from '@/views/gres/gresJT'
import gresX from '@/views/gres/gresX'

import products from '@/views/products'
import storeEnergy from '@/views/products/storeEnergy'
import MEMS from '@/views/products/MEMS'
import allinone from '@/views/products/allinone'
import homeStoreEnergy from '@/views/products/homeStoreEnergy'
import pcs from '@/views/products/pcs'
import bms from '@/views/products/bms'
import standardizedModule from '@/views/products/standardizedModule'
import storeEnergyBattery from '@/views/products/storeEnergyBattery'

import references from '@/views/references'
import planning from '@/views/references/planning'
import reference from '@/views/references/reference'

import support from '@/views/support'
import news from '@/views/support/news'
import dataDownload from '@/views/support/dataDownload'
import certification from '@/views/support/certification'
import qualityManagement from '@/views/support/qualityManagement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/overview',
      name: 'overview',
      component: overview,
      redirect: 'overview/intro',
      children: [
        {
          path: 'intro',
          name: 'intro',
          component: intro
        },
        {
          path: 'advantage',
          name: 'advantage',
          component: advantage
        },
        {
          path: 'location',
          name: 'location',
          component: location
        }
      ]
    },
    {
      path: '/gres',
      name: 'gres',
      component: gres,
      redirect: 'gres/gresW',
      children: [
        {
          path: 'gresW',
          name: 'gresW',
          component: gresW
        },
        {
          path: 'gresJZ',
          name: 'gresJZ',
          component: gresJZ
        },
        {
          path: 'gresJT',
          name: 'gresJT',
          component: gresJT
        },
        {
          path: 'gresX',
          name: 'gresX',
          component: gresX
        }
      ]
    },
    {
      path: '/products',
      name: 'products',
      component: products,
      redirect: 'products/storeEnergy',
      children: [
        {
          path: 'storeEnergy',
          name: 'storeEnergy',
          component: storeEnergy
        },
        {
          path: 'MEMS',
          name: 'MEMS',
          component: MEMS
        },
        {
          path: 'allinone',
          name: 'allinone',
          component: allinone
        },
        {
          path: 'homeStoreEnergy',
          name: 'homeStoreEnergy',
          component: homeStoreEnergy
        },
        {
          path: 'pcs',
          name: 'pcs',
          component: pcs
        },
        {
          path: 'bms',
          name: 'bms',
          component: bms
        },
        {
          path: 'standardizedModule',
          name: 'standardizedModule',
          component: standardizedModule
        },
        {
          path: 'storeEnergyBattery',
          name: 'storeEnergyBattery',
          component: storeEnergyBattery
        }
      ]
    },
    {
      path: '/references',
      name: 'references',
      component: references,
      redirect: 'references/planning',
      children: [
        {
          path: 'planning',
          name: 'planning',
          component: planning
        },
        {
          path: 'reference',
          name: 'reference',
          component: reference
        }
      ]
    },
    {
      path: '/support',
      name: 'support',
      component: support,
      redirect: 'support/news',
      children: [
        {
          path: 'news',
          name: 'news',
          component: news
        },
        {
          path: 'dataDownload',
          name: 'dataDownload',
          component: dataDownload
        },
        {
          path: 'certification',
          name: 'certification',
          component: certification
        },
        {
          path: 'qualityManagement',
          name: 'qualityManagement',
          component: qualityManagement
        }
      ]
    }
  ]
})
