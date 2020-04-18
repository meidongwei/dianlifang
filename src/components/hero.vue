<template>
  <section class="hero" :class="theme" style="margin-bottom: 50px;">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
        <!-- <h2 class="subtitle">{{ subtitle }}</h2> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    theme: {
      type: String,
      default: 'is-primary'
    }
  }
}
</script>

<style lang="css">
</style>
