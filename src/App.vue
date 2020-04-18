<template>
  <div>
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export default {
  components: {
    Navbar, Footer
  }
}
</script>

<style lang="scss">
.m-con {
  // padding: 0 15px;
  padding: 0 .75rem;
}
</style>
