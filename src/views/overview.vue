<template>
  <div>
    <Hero title="公司概况" subtitle="小标题" theme="heroBg"></Hero>

    <div class="container m-con" style="margin-bottom: 50px;">
      <div class="columns">
        <div class="column is-hidden-mobile">
          <Menu :menuList="menuList" :isActive="isActive" @goto="goto"></Menu>
        </div>
        <div class="column is-three-quarters">
          <router-view/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Hero from '@/components/hero'
import Menu from '@/components/menu'
export default {
  components: {
    Hero,
    Menu
  },
  data () {
    return {
      isActive: 1
    }
  },
  computed: {
    menuList () {
      return JSON.parse(localStorage.getItem('navbarList'))[0].subList
    }
  },
  methods: {
    goto (id) {
      this.isActive = id
    }
  }
}
</script>

<style lang="css" scoped>
.heroBg {
  background: url('../../static/gongsijianjie.jpeg');
  background-size: cover;
}
</style>
