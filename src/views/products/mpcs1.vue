<template>
  <div class="content m-con">
    <h3>MPCS</h3>
    <img class="mpcs-img" src="../../../static/PCS.png" alt="">
    <p>
      模块化多功能储能变流器（MPCS）通过控制储能电池或光伏组件的充电和放电过程，进行交直流的双向变换。MPCS 由多个 DC/AC 双向变流模块、电子开关、隔离变压器、监控单元等构成。MPCS通过通讯接收后台控制指令，根据功率指令的符号及大小控制变流器对电池进行充电或放电，实现对电网有功功率及无功功率的调节。 MPCS 通过 CAN 接口与 BMS 通讯，获取电池组状态信息，可实现对电池的保护性充放电，确保电池运行安全。
    </p>
    <hr>
    <h4>产品特点 | Feature</h4>
    <ul>
      <li>高效率：三电平电路设计、谐波小、效率高</li>
      <li>支持多路直流输入、杜绝环流</li>
      <li>配置灵活、易维护：模块化设计、与电池灵活匹配、易扩容、易维护、电池梯度利用率高</li>
      <li>双向变流、双向保护：充电具备恒流充电、恒压充电模式，放电具备恒功率放电、恒流放电模式，延长电池使用寿命</li>
      <li>电网适应能力强：先进的孤岛效应检测技术、支持高/低压穿越、频率穿越、快速功率调度、孤网独立运行</li>
      <li>具备PQ、VF、VSG、SVG等功能，支持离网运行和黑启动</li>
      <li>支持多机并联、可以扩容至兆瓦功率等级</li>
      <li>可选配隔离变压器，实现变压器隔离</li>
      <li>可选配室外型，实现恶劣环境安全可靠运行</li>
      <li>可选配STS实现并离网无缝切换</li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.mpcs-img {
  width: 500px;
  padding-bottom: 50px;
}
hr {
  margin: 50px 0;
}
</style>
