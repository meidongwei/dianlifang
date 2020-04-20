<template>
  <div>
    <!-- hero -->
    <section class="hero m-header">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">科技 · 卓越 · 领航</h1>
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
              <div>
                <img src="../../static/GRES.png" alt="GRES系列">
                <h3>GRES系列</h3>
              </div>
            </div>
            <div class="column">
              <div>
                <img src="../../static/PCS.png" alt="MPCS系列">
                <h3>MPCS系列</h3>
              </div>
            </div>
            <div class="column">
              <div>
                <img src="../../static/guishi.png" alt="储能锂电池系统系列">
                <h3>储能锂电池系统系列</h3>
              </div>
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
                <h2 class="subtitle">核心价值</h2>
                <p>以技术创新为驱动，以客户需求为导向，推动清洁能源友好利用、创造低碳环保未来生活。</p>
              </div>
            </div>
            <div class="column">
              <div>
                <h2 class="subtitle">使命</h2>
                <p>打造安全稳定、长寿命的储能系统应用及风光储、光储充、微电网、并离网等一体化储能解决方案。</p>
              </div>
            </div>
            <div class="column">
              <div>
                <h2 class="subtitle">愿景</h2>
                <p>成为行业内创新型智慧储能系统的优秀研发商与供应商。</p>
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
import SlidePic from '@/components/slidePic'
export default {
  components: {
    SlidePic
  }
}
</script>

<style lang="scss">
.m-header {
  background: url('../../static/hero.jpg');
  background-size: cover;
  background-position: center center;
  height: 680px;
  .hero-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title, .subtitle {
    color: white;
    text-align: center;
    font-size: 50px;
  }
}

@media(max-width: 768px) {
  .m-header {
    height: 200px;
    .title {
      font-size: 28px;
    }
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
      img {
        height: 80%;
      }
      h3 {
        font-size: 20px;
      }
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
      padding: 80px 80px 0 80px;
    }
  }
}
</style>
