<template>
  <div class="slidePic">
    <figure class="image is-2by1">
      <img :src="imgUrl" alt="">
    </figure>
    <!-- <div class="m-tabs-desktop">
      <div class="container">
        <ul>
          <li :class="{active: index === nowIndex}"
            v-for="(item, index) in tabList" :keys="item.id">
            <a href="javascript:;" @click="handleClick(item, index)">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="m-tabs-mobile">
      <a href="javascript:;" :class="{active: index === nowIndex}"
        v-for="(item, index) in tabList" :keys="item.id"
        @click="handleClick(item, index)">
      </a>
    </div>
  </div>
</template>

<script>
import Img1 from '../../static/1.jpg'
import Img2 from '../../static/2.jpg'
import Img3 from '../../static/3.jpg'
// import Img4 from '../../static/maldives-4.jpg'
// import Img5 from '../../static/maldives-5.jpeg'
// import Img6 from '../../static/maldives-6.jpg'
export default {
  data () {
    return {
      imgUrl: Img1,
      nowIndex: 0,
      tabList: [
        {
          id: 1,
          name: 'All-in-one（集成）储能系统',
          url: Img1
        },
        {
          id: 2,
          name: '储能系统 SAVEEN GT 储能变流器',
          url: Img2
        },
        {
          id: 3,
          name: '储能系统 SAVEEN MG 多功能混合储能变流器',
          url: Img3
        },
        // {
        //   id: 4,
        //   name: 'STABLEEN 工业不可断电源',
        //   url: Img4
        // },
        // {
        //   id: 5,
        //   name: 'APOLLEEN 光伏逆变器',
        //   url: Img5
        // },
        // {
        //   id: 6,
        //   name: 'SAVEEN 燃料电池逆变器',
        //   url: Img6
        // }
      ]
    }
  },
  methods: {
    handleClick (item, index) {
      this.nowIndex = index
      this.imgUrl = item.url
    }
  }
}
</script>

<style lang="scss" scoped>
.slidePic {
  position: relative;
  .m-tabs-desktop, .m-tabs-mobile {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
.m-tabs-mobile {
  // display: none;
}

.m-tabs-desktop ul {
  width: 100%;
  display: flex;
}
.m-tabs-desktop ul li {
  height: 100px;
  width: 16.66%;
  background-color: rgba(255, 255, 255, .8);
}
.m-tabs-desktop ul li.active a {
  color: #428bca;
}
.m-tabs-desktop ul li a {
  height: 100%;
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #626262;
}
.m-tabs-desktop ul li a:hover {
  color: #428bca;
}
// @media (max-width: 1024px) {
  .m-tabs-desktop {
    display: none;
  }
  .m-tabs-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
  }
  .m-tabs-mobile a {
    width: 10px;
    height: 10px;
    border: 1px solid #eeeeee;
    border-radius: 20px;
    margin-right: 10px;
  }
  .m-tabs-mobile a.active {
    width: 20px;
    border-radius: 20px;
    background-color: #aaaaaa;
    border: 1px solid #aaaaaa;
  }
// }
</style>
