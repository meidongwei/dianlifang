<template>
  <div>
    <!-- hero -->
    <section class="hero is-primary is-large m-header">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">图虫创意，编号：216913578149806083</h1>
          <h2 class="subtitle"></h2>
        </div>
      </div>
    </section>


    <!-- 信息展示 -->
    <section class="hero is-medium m-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            储能产品系列
          </h1>
          <div class="columns">
            <div class="column">
              <div></div>
            </div>
            <div class="column">
              <div></div>
            </div>
            <div class="column">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- 大图切换 -->
    <SlidePic></SlidePic>


    <!-- 关于 -->
    <section class="hero is-medium m-about">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            关于我们
          </h1>
          <div class="columns">
            <div class="column">
              <div>
                <h2 class="subtitle">愿景</h2>
                <p>电力转换应用方面的全球化公司</p>
                <p>电源转换应用方面的第一品牌</p>
              </div>
            </div>
            <div class="column">
              <div>
                <h2 class="subtitle">核心价值</h2>
                <p>为人类的繁荣与电力电子的未来创造价值</p>
              </div>
            </div>
            <div class="column">
              <div>
                <h2 class="subtitle">核心技术</h2>
                <p>储能系统控制技术</p>
                <p>静态和动态电网支持技术</p>
                <p>微电网逆变器技术</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- 信息展示 -->
    <section class="hero is-primary is-large is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            浩瀚无尽的电力...
          </h1>
          <h2 class="subtitle"></h2>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import SlidePic from '@/component/slidePic'
export default {
  components: {
    SlidePic
  }
}
</script>

<style lang="scss">
.m-header.is-primary {
  background: url('../../static/hero.jpg');
  background-size: 100%;

  .title, .subtitle {
    color: #373737;
  }
}

.m-info {
  .container {
    text-align: center;
    .title {
      margin-bottom: 50px;
    }
    .column > div{
      height: 300px;
      width: 100%;
      background-color: #f5f5f5;
    }
  }
}
.m-about {
  .container {
    text-align: center;
    .title {
      margin-bottom: 50px;
    }
    .column > div{
      height: 300px;
      width: 100%;
      background-color: #f5f5f5;
      padding-top: 80px;
    }
  }
}
</style>
