<template>
  <div class="content m-con">
    <h3 class="has-text-primary">"欢迎来到电立方！"</h3>
    <h3>电立方</h3>
    <ul>
      <li>地址：河北省石家庄市高新技术开发区海河道10号</li>
      <li>电话：0311-86786210</li>
      <li>E-MAIL：zhuyijie@ecube.net.cn</li>
    </ul>
    <div id="allmap" ref="allmap"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.map()
  },
  methods: {
    map () {
      let map = new BMap.Map(this.$refs.allmap) // 创建Map实例
      // map.centerAndZoom('石家庄', 15)
      var point = new BMap.Point(114.608925,38.05456)
      map.centerAndZoom(point, 15)
      var marker = new BMap.Marker(point)  // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE) // 跳动的动画
      var label = new BMap.Label("电立方",{offset: new BMap.Size(20,-10)})
      marker.setLabel(label)

      map.enableDragging() // 启用地图拖拽事件，默认启用(可不写)
      map.enableScrollWheelZoom() // 启用地图滚轮放大缩小
      map.enableDoubleClickZoom() // 启用鼠标双击放大，默认启用(可不写)
      map.enableKeyboard() // 启用键盘上下左右键移动地图

      // 向地图中添加缩放控件
      var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE})
      map.addControl(ctrl_nav)
      // 向地图中添加缩略图控件
      var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1})
      map.addControl(ctrl_ove)
      // 向地图中添加比例尺控件
      var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT})
      map.addControl(ctrl_sca)
    }
  }
}
</script>

<style lang="css">
#allmap{
  height: 500px;
  overflow: hidden;
}
.BMapLabel {
  border: none !important;
  box-shadow: 1px 1px 3px #505050;
  border-radius: 3px;
  padding: 0 5px !important;
  font-size: 18px !important;
}
</style>
