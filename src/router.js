import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

import overview from '@/views/overview'
import intro from '@/views/overview/intro'
import advantage from '@/views/overview/advantage'
import location from '@/views/overview/location'
import news from '@/views/overview/news'

import solution from '@/views/solution'
import bms from '@/views/solution/bms'
import gresW from '@/views/solution/gresW'
import pack from '@/views/solution/pack'

import products from '@/views/products'
import gresJT from '@/views/products/gresJT'
import gresX from '@/views/products/gresX'
import guiEnergy from '@/views/products/guiEnergy'
import qianEnergy from '@/views/products/qianEnergy'
import homeEnergy from '@/views/products/homeEnergy'
import geliMpcs from '@/views/products/geliMpcs'
import feigeliMpcs from '@/views/products/feigeliMpcs'
import ems from '@/views/products/ems'

import references from '@/views/references'
import reference from '@/views/references/reference'

import support from '@/views/support'
import contact from '@/views/support/contact'

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
        // {
        //   path: 'location',
        //   name: 'location',
        //   component: location
        // }
        {
          path: 'news',
          name: 'news',
          component: news,
        }
      ]
    },
    {
      path: '/solution',
      name: 'solution',
      component: solution,
      redirect: 'solution/gresW',
      children: [
        {
          path: 'gresW',
          name: 'gresW',
          component: gresW
        },
        {
          path: 'pack',
          name: 'pack',
          component: pack
        },
        {
          path: 'bms',
          name: 'bms',
          component: bms
        }
      ]
    },
    {
      path: '/products',
      name: 'products',
      component: products,
      redirect: 'products/gresJT',
      children: [
        {
          path: 'gresJT',
          name: 'gresJT',
          component: gresJT
        },
        {
          path: 'gresX',
          name: 'gresX',
          component: gresX
        },
        {
          path: 'guiEnergy',
          name: 'guiEnergy',
          component: guiEnergy
        },
        {
          path: 'qianEnergy',
          name: 'qianEnergy',
          component: qianEnergy
        },
        {
          path: 'homeEnergy',
          name: 'homeEnergy',
          component: homeEnergy
        },
        {
          path: 'geliMpcs',
          name: 'geliMpcs',
          component: geliMpcs
        },
        {
          path: 'feigeliMpcs',
          name: 'feigeliMpcs',
          component: feigeliMpcs
        },
        {
          path: 'ems',
          name: 'ems',
          component: ems
        }
      ]
    },
    {
      path: '/references',
      name: 'references',
      component: references,
      redirect: 'references/reference',
      children: [
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
      redirect: 'support/contact',
      children: [
        {
          path: 'contact',
          name: 'contact',
          component: contact
        }
      ]
    }
  ]
})
