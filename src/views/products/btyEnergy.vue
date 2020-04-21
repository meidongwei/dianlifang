<template>
<div class="content m-con">
  <h3>电池储能系统</h3>
  <p>
    电立方电池系统选取国际市场顶尖性能电芯，解决客户不同应用场景需求。内部主要安装电池模组、双向主动均衡BMS电池管理系统及电气保护部件等。机柜结构科学、机械强度高，模组安装维护便捷，整体结构最大程度保证系统的可靠性与安全性的同时做到外观美观大方。系统搭载可视化人机交互界面，实时监控系统运行状态、单体电芯状态。
  </p>
  <hr>
  <div class="m-bty">
    <div class="m-bty-cell">
      <img src="../../../static/d-1.png" alt="">
      <h4>结构设计</h4>
      <p>
        <strong>模组</strong>：
<strong>激光焊接</strong>Busbar，低阻抗、高强度；全覆盖工程塑料，<strong>防触摸，防短路</strong>；电芯间采用高熔点、耐2000V的PC绝缘支架进行<strong>绝缘固定</strong>；电极和Busbar采用塑料卡槽设计，<strong>防止漏电</strong>。
<strong>机柜</strong>：
电池柜采用<strong>框架式设计</strong>，增加空气流通性，提高热效率;<strong>结构安全、可靠</strong>，具有足够的机械强度，无摇晃、不变形；<strong>绝缘设计</strong>；电池柜内部高压连接采用<strong>高压快插连接器</strong>。

      </p>
    </div>
    <hr>
    <div class="m-bty-cell">
      <img src="../../../static/d-2.png" alt="">
      <h4>电气设计</h4>
      <p>
        本系统采用了<strong>继电器、熔断器、断路器</strong>、BMS等构成的集电气安全和功能安全为一体的综合保护体系。

      </p>
    </div>
    <hr>
    <div class="m-bty-cell">
      <img src="../../../static/d-4.png" alt="">
      <h4>BMS设计</h4>
      <p>
        主动双向均衡；模组、机柜、系统三级BMS设计，状态多重监测，分级联动，全面保障电池系统安全。

      </p>
    </div>
    <hr>
    <div class="m-bty-cell">
      <img src="../../../static/d-3.png" alt="">
      <h4>电芯设计</h4>
      <p>
        低热失控磷酸铁锂材料；Vent防爆阀泄压设计及时泄压；Fuse熔断保护设计防止短路；卷绕型叠片工艺降低内部短路可能性。

      </p>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .m-bty {
    display: flex;
    flex-wrap: wrap;
  }
  .m-bty-cell {
    width: 50%;
  }
}

.m-bty-cell {
  text-align: center;
  padding: 20px;
  img {
    margin-bottom: 20px;
    width: 160px;
  }
}
</style>
