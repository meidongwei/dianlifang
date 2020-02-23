<template>
  <aside class="menu">
    <ul class="menu-list" v-if="!hasSubList">
      <li v-for="item in menuList" :key="item.id">
        <a :class="{'is-active': routeName === item.val}"
          @click="goto(item)">
          {{ item.name }}
        </a>
      </li>
    </ul>
    <div v-for="item in menuList" :key="item.id" v-if="hasSubList">
      <p class="menu-label">
        {{ item.name }}
      </p>
      <ul class="menu-list">
        <li v-for="subItem in item.list" :key="subItem.id">
          <a :class="{'is-active': routeName === subItem.val}"
            @click="goto(subItem)">
            {{ subItem.name }}
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array
    },
    isActive: {
      type: Number
    },
    hasSubList: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    routeName () {
      return this.$route.name
    }
  },
  methods: {
    goto (item) {
      this.$emit('goto', item.id)
      this.$router.push({name: item.val})
    }
  }
}
</script>

<style lang="css">
</style>
