<template>
  <headroom>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="javascript:;" @click="handleBacktoIndex">
            <img src="@/assets/logo.png" alt="dianlifang" width="112" height="28">
          </a>
          <div class="navbar-burger burger" @click="handleOpenMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="navbar-menu" :class="{'is-active': isActive}">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable"
              v-for="item in navbarList" :key="item.id">
              <a class="navbar-link" @click="gotoItem(item)">
                {{ item.name }}
              </a>
              <div class="navbar-dropdown is-boxed">
                <!-- 普通子菜单 -->
                <div v-if="item.id != 3">
                  <a href="javascript:;" class="navbar-item"
                    v-for="sub in item.subList" :key="sub.id"
                    @click="gotoSub(sub)">
                    {{ sub.name }}
                  </a>
                </div>
                <!-- 带标题的子菜单 -->
                <div v-if="item.id === 3">
                  <div v-for="sub in item.subList" :key="sub.id">
                    <div class="subTitle">{{ sub.name }}</div>
                    <a href="javascript:;" class="navbar-item"
                      v-for="sub2 in sub.list" :key="sub2.id"
                      @click="gotoSub(sub2)">
                      {{ sub2.name }}
                    </a>
                    <hr class="navbar-divider" v-if="sub.id === 301 || sub.id === 302">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="你想知道...">
                </div>
              </div>
            </div>
            <a href="javascript:;" class="navbar-item is-active">中文</a>
            <a href="javascript:;" class="navbar-item">EN</a>
          </div>
        </div>
      </div>
    </nav>
  </headroom>
</template>

<script>
import { headroom } from 'vue-headroom'
export default {
  components: { headroom },
  data () {
    return {
      isActive: false,
      navbarList: [
        {
          id: 1,
          name: '公司概况',
          subList: [
            {
              id: 1,
              name: '公司简介',
              val: 'intro'
            },
            {
              id: 2,
              name: '核心优势',
              val: 'advantage'
            },
            {
              id: 3,
              name: '位置',
              val: 'location'
            }
          ]
        },
        {
          id: 2,
          name: 'GRES',
          subList: [
            {
              id: 1,
              name: '什么是GRES',
              val: 'gresW'
            },
            {
              id: 2,
              name: 'GRES价值',
              val: 'gresJZ'
            },
            {
              id: 3,
              name: 'GRES静态发动机',
              val: 'gresJT'
            },
            {
              id: 4,
              name: 'GRES集装箱',
              val: 'gresX'
            }
          ]
        },
        {
          id: 3,
          name: '产品',
          subList: [
            {
              id: 301,
              name: 'MPCS',
              list: [
                {
                  id: 1,
                  name: 'MPCS',
                  val: 'mpcs1'
                },
                {
                  id: 2,
                  name: '非隔离变型MPCS',
                  val: 'feigeliMpcs'
                },
                {
                  id: 3,
                  name: '隔离变型MPCS',
                  val: 'geliMpcs'
                }
              ]
            },
            {
              id: 302,
              name: '电池储能系统',
              list: [
                {
                  id: 5,
                  name: '电池储能系统',
                  val: 'btyEnergy'
                },
                {
                  id: 6,
                  name: 'BMS',
                  val: 'bms'
                },
                {
                  id: 7,
                  name: '柜式储能系统',
                  val: 'guiEnergy'
                },
                {
                  id: 8,
                  name: '嵌入式储能系统',
                  val: 'qianEnergy'
                },
                {
                  id: 9,
                  name: 'ERA家用储能系统',
                  val: 'homeEnergy'
                }
              ]
            },
            {
              id: 303,
              name: 'EMS',
              list: [
                {
                  id: 10,
                  name: '能源管理系统EMS',
                  val: 'ems'
                }
              ]
            }
          ]
        },
        {
          id: 4,
          name: '应用案例',
          subList: [
            {
              id: 1,
              name: '跟踪记录和计划',
              val: 'planning'
            },
            {
              id: 2,
              name: '应用案例',
              val: 'reference'
            }
          ]
        },
        {
          id: 5,
          name: '客户支持',
          subList: [
            {
              id: 1,
              name: '新闻',
              val: 'news'
            },
            {
              id: 2,
              name: '数据下载',
              val: 'dataDownload'
            },
            {
              id: 3,
              name: '认证',
              val: 'certification'
            },
            {
              id: 4,
              name: '质量管理',
              val: 'qualityManagement'
            }
          ]
        }
      ]
    }
  },
  created () {
    localStorage.setItem('navbarList', JSON.stringify(this.navbarList))
  },
  methods: {
    // 打开导航按钮
    handleOpenMenu () {
      this.isActive = !this.isActive
    },

    // 页面跳转
    gotoSub (subItem) {
      this.isActive = !this.isActive
      this.$router.push({name: subItem.val}).catch(err => {err})
    },

    // 页面跳转
    gotoItem (item) {
      if (item.subList[0].val) {
        this.$router.push({name: item.subList[0].val}).catch(err => {err})
      } else {
        this.$router.push({name: item.subList[0].list[0].val}).catch(err => {err})
      }
      
    },

    // 返回首页
    handleBacktoIndex () {
      this.$router.push({name: 'index'}).catch(err => {err})
    }

    

  }
}
</script>

<style lang="css" scoped>
  @media (max-width: 1024px) {
    .navbar-menu {
      height: 500px;
      overflow-y: scroll;
    }
  }
  .subTitle {
    padding-left: 15px;
    color: #acacac;
  }
</style>
