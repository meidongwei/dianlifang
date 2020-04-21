<template>
  <div class="content m-con">
    <h3>嵌入式储能系统</h3>
    <img src="../../../static/qian.png" alt="">
    <hr>
    <h4>产品特点︱Feature</h4>
    <ul>
      <li>集成BMS功能，可作为系统单独使用</li>
      <li>可灵活组串，方便维护、管理、扩容</li>
      <li>磷酸铁锂电芯行业顶级厂家电芯</li>
      <li>能量型系统，能量密度高，集成度高，体积小，空间占用少</li>
      <li>倍率型系统性能突出，支持最大2C充电，6C放电</li>
      <li>相较铅酸电池，体积小、重量轻、寿命长、放电快</li>
      <li>4000次循环寿命，度电成本低</li>
      <li>实时监控电芯状态，SOC精度全范围优于3%</li>
      <li>智能风冷设计，系统寿命长，运行平稳</li>
      <li>电源与通讯环路设计，容错性强</li>
    </ul>
    <hr>
    <h4>应用场景︱Application</h4>
    <img class="gui-yycj" src="../../../static/gui-yycj.png" alt="">
    <hr>
    <h4>+-192V</h4>
    <img class="qian192" src="../../../static/qian192.png" alt="">
    <hr>
    <h4>+-224V</h4>
    <img class="qian224" src="../../../static/qian224.png" alt="">
    <hr>
    <h4>+-48V</h4>
    <img class="qian48" src="../../../static/qian48.png" alt="">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.gui-yycj {
  max-height: 120px;
}
.gui-cs, .qian192 {
  width: 600px;
}
.qian224, .qian48 {
  width: 340px;
}
@media (max-width: 768px) {
  .qian224, .qian48 {
    width: 220px;
  }
}

</style>
