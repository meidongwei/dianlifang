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
import btyEnergy from '@/views/products/btyEnergy'
import bms from '@/views/products/bms'
import guiEnergy from '@/views/products/guiEnergy'
import qianEnergy from '@/views/products/qianEnergy'
import homeEnergy from '@/views/products/homeEnergy'
import geliMpcs from '@/views/products/geliMpcs'
import feigeliMpcs from '@/views/products/feigeliMpcs'
import mpcs1 from '@/views/products/mpcs1'
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
      redirect: 'products/btyEnergy',
      children: [
        {
          path: 'btyEnergy',
          name: 'btyEnergy',
          component: btyEnergy
        },
        {
          path: 'bms',
          name: 'bms',
          component: bms
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
          path: 'mpcs1',
          name: 'mpcs1',
          component: mpcs1
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
