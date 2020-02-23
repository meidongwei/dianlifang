import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

import overview from '@/pages/overview'
import intro from '@/pages/overview/intro'
import concept from '@/pages/overview/concept'
import location from '@/pages/overview/location'

import business from '@/pages/business'
import aboutme from '@/pages/business/aboutme'
import areas from '@/pages/business/areas'
import features from '@/pages/business/features'
import ESSapp from '@/pages/business/ESSapp'

import products from '@/pages/products'
import storeEnergy from '@/pages/products/storeEnergy'
import MEMS from '@/pages/products/MEMS'
import allinone from '@/pages/products/allinone'
import homeStoreEnergy from '@/pages/products/homeStoreEnergy'
import pcs from '@/pages/products/pcs'
import bms from '@/pages/products/bms'
import batteryCabinet from '@/pages/products/batteryCabinet'
import standardizedModule from '@/pages/products/standardizedModule'
import storeEnergyBattery from '@/pages/products/storeEnergyBattery'

import references from '@/pages/references'
import planning from '@/pages/references/planning'
import reference from '@/pages/references/reference'

import support from '@/pages/support'
import news from '@/pages/support/news'
import dataDownload from '@/pages/support/dataDownload'
import certification from '@/pages/support/certification'
import qualityManagement from '@/pages/support/qualityManagement'

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
          path: 'concept',
          name: 'concept',
          component: concept
        },
        {
          path: 'location',
          name: 'location',
          component: location
        }
      ]
    },
    {
      path: '/business',
      name: 'business',
      component: business,
      redirect: 'business/aboutme',
      children: [
        {
          path: 'aboutme',
          name: 'aboutme',
          component: aboutme
        },
        {
          path: 'areas',
          name: 'areas',
          component: areas
        },
        {
          path: 'features',
          name: 'features',
          component: features
        },
        {
          path: 'ESSapp',
          name: 'ESSapp',
          component: ESSapp
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
          path: 'batteryCabinet',
          name: 'batteryCabinet',
          component: batteryCabinet
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
