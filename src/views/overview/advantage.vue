<template>
  <div class="content m-con">
    <div class="m-ys">
      <div>
        <div class="m-ys-img">
          <img src="../../../static/zgcn.png" alt="">
        </div>
        <h4>专攻储能</h4>
        <ul>
          <li>国内外多个发电侧、用电侧储能项目EPC经验</li>
          <li>完美契合储能应用技术要求</li>
          <li>储能专用的电芯, PACK设计，BMS设计</li>
          <li>清华大学河北研究院技术支撑，多年锂电池及电源行业开发经验</li>
        </ul>
      </div>
      <div>
        <div class="m-ys-img">
          <img src="../../../static/zzyf.png" alt="">
        </div>
        <h4>自主研发BMS</h4>
        <ul>
          <li>先进的三级管理架构</li>
          <li>成熟的主/被动均衡</li>
          <li>均衡能力，采集精度，SOC精度，行业领先</li>
        </ul>
      </div>
      <div>
        <div class="m-ys-img">
          <img src="../../../static/dzh.png" alt="">
        </div>
        <h4>定制化设计</h4>
        <ul>
          <li>合作多家一线电芯厂商</li>
          <li>定制化BMS,PACK,集装箱</li>
          <li>客户需求定制化的储能系统/电站解决方案</li>
        </ul>
      </div>
      <div>
        <div class="m-ys-img">
          <img src="../../../static/jjfa.png" alt="">
        </div>
        <h4>整体解决方案</h4>
        <ul>
          <li>调峰，调频解决方案</li>
          <li>微电网解决方案</li>
          <li>光储充电站解决方案</li>
          <li>并离网储能解决方案</li>
          <li>风光柴储多源解决方案</li>
        </ul>
      </div>
    </div>
    
  </div>
</template>
<style lang="scss" scoped>
.m-ys {
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 50%;
    height: 300px;
    padding: 25px;
    .m-ys-img {
      text-align: center;
      margin-bottom: 25px;
      > img {
        width: 50px;
      }
    }
    > h4 {
      text-align: center;
    }
  }
}
@media (max-width: 768px) {
  .m-ys {
    > div {
      width: 100%;
      height: auto;
    }
  }
}
</style>
