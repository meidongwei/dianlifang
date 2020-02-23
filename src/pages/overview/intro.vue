<template>
  <div class="content m-con">
    <h3>公司简介</h3>
    <ul>
      <li>成立时间：2017年</li>
      <li>员工人数：50+</li>
      <li>制造：与RSA合作</li>
    </ul>
    <h3>核心技术</h3>
    <ul>
      <li>电池标准化模组</li>
      <li>电池管理系统（BMS）</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.time-box {
  display: flex;
  margin-bottom: 15px;
  .left {
    width: 100px;
    font-size: 20px;
    color: #6945a4;
    font-weight: bold;
    padding-right: 15px;
    position: relative;
  }
  .left::after {
    content: '';
    width: 5px;
    height: 5px;
    background-color: #6945a4;
    border-radius: 50%;
    position: absolute;
    right: -3px;
    top: 10px;
  }
  .right {
    padding-left: 15px;
    position: relative;
  }
  .right::after {
    content: '';
    width: 2px;
    height: 70%;
    background-color: #dedede;
    position: absolute;
    left: -1px;
    top: 18px;
  }
}
</style>
