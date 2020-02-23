<template>
  <div class="content m-con">
    <h3>BMS</h3>
    <h4>主动均衡的BMS</h4>
    <ul>
      <li>能量转移式主动均衡</li>
      <li>均衡精度小于2%，均衡能力达到额定输出的10%</li>
      <li>避免电池过充过放</li>
      <li>单体电芯容量变化不影响系统容量</li>
      <li>保障整组电池的循环寿命</li>
    </ul>
    <h4>BMS三级管理架构</h4>
    <img src="../../../static/333.png">
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
    <h4>BMS功能</h4>
    <ul>
      <li>电池参数监测</li>
      <ul>
        <li>电压监测、电流监测、温度监测、绝缘监测、SOC监测</li>
      </ul>
      <li>主动均衡控制</li>
      <ul>
        <li>
          充电过程中，通过调整单节电池充电电流方式，保证系统内所有电池的电池端电压在每一时刻有良好的一致性。
        </li>
      </ul>
      <li>通讯管理系统</li>
      <ul>
        <li>
          可通过通信接口读取实时数据，可实现BMS数据的监控、数据转储和电池性能分析等功能。
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
