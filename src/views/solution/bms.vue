<template>
  <div class="content m-con">
    <h3>BMS-电池管理系统</h3>
    <p>
      电池管理系统是储能系统的核心部件之一，优秀的BMS可以保证单体电芯安全、性能、寿命等方面的表现，有效保护电池过充、过放、过流等，同时避免电池在长时间、高倍率充放电情况下导致的单体电芯不均衡、温度分布不均等问题，保障整个系统的安全、可靠、高效运转。
    </p>
    <hr>
    <img src="../../../static/bms-zygn.png" alt="">
    <hr>
    <h3>双向主动均衡</h3>
    <ul>
      <li>能量转移式主动均衡；</li>
      <li>均衡精度小于2%，均衡能力达到额定输出的10%；</li>
      <li>单体电芯容量变化不影响系统容量；</li>
    </ul>
    <hr>
    <h4>BMS三级管理架构</h4>
    <img class="sanji" src="../../../static/3ji.png" alt="">
    <hr>
    <img class="bms-cs" src="../../../static/bms-cs.png" alt="">
    <!-- <div class="table-container">
      <table class="table is-bordered">
        <thead>
          <tr class="is-selected">
            <th>类别</th>
            <th colspan="2">名称</th>
            <th>功能描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>BMU</th>
            <td colspan="2">电池模块管理单元</td>
            <td>用于储能模块电池管理，最多支持16路电压采集</td>
          </tr>
          <tr>
            <th>BCU</th>
            <td colspan="2">电池串管理单元</td>
            <td>管辖BMU，管理电池组</td>
          </tr>
          <tr>
            <th>BAU</th>
            <td colspan="2">电池阵列管理单元</td>
            <td>管辖BCU，管理整个电池阵列</td>
          </tr>
          <tr>
            <th rowspan="4">其他</th>
            <td>HCS</td>
            <td>强电控制系统</td>
            <td>
              用于监控管理电池串处的主接触器，负责电池串处的电流采集
              及检测绝缘漏电状态
            </td>
          </tr>
          <tr>
            <td>LCD</td>
            <td>显示屏</td>
            <td>显示电池信息及报警状态，设置和修改部分关键参数</td>
          </tr>
          <tr>
            <td>Current Sensor</td>
            <td>电流传感器</td>
            <td>检测电池组充放电回路电流</td>
          </tr>
          <tr>
            <td>Cables</td>
            <td>连接线束</td>
            <td>检测/通信/电源/控制等线束</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.sanji {
  width: 300px;
}
.bms-cs {
  width: 600px;
}
</style>
