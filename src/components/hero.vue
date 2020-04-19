<template>
  <section class="hero" :class="theme">
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

<style lang="css" scoped>
.hero {
  margin-bottom: 50px;
  height: 300px;
}
@media(max-width: 768px) {
  .hero {
    height: 200px;
  }
}
.title {
  text-align: center;
  color: white;
}
.hero-body {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
