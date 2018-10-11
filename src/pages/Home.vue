<template>
 <div class="recommend">
    <Scroll ref="scroll" class="recommend-content">
         <div class="scr-container">
            <div class="slider-container">
                 <Slider>
                    <div v-for="(item,index) in recommends" :key="index">
                        <a :href="item.url">
                            <img  :src="item.coverImgUrl" @load="loadImage"/>
                        </a>
                    </div>
                </Slider>
            </div>
            <div class="recommend-list">
                <h1 class="list-title">热门推荐</h1>
            </div>
            <div>
                <ul>
                  <li  v-for="(item,index) in diclist" class="item" :key="index">
                      <a>
                            <div class="icon">
                                <img width="60" height="60" :src="item.coverPath" >
                            </div>
                            <div class="text">
                                <h2 class="name" v-html="item.title"></h2>
                                <p class="desc" v-html="item.anchorName"></p>
                            </div>
                      </a>
                   </li>
                </ul>
            </div>
         </div>
    </Scroll>
    <div class="loading-container">
         <Loading v-if="!diclist.length"></Loading>
    </div>
    <router-view></router-view>
 </div>
</template>

<script type="text/ecmascript-6">
import Slider from "base/slider/slider";
import { data } from "data/data";
import { gui } from "data/gui";
import Scroll from "base/scroll/scroll";
import Loading from "base/loading/loading";
import { sliderdata, diclist } from "api/home";
export default {
  data() {
    return {
      recommends: [],
      diclist: []
    };
  },
  components: {
    Slider,
    Scroll,
    Loading
  },
  created() {
    diclist().then(res => {
      this.diclist = res.data.data.albums;
    });
    this.recommends = data.TingContentPage.tingAndRecommend.todayNewSubjects;
    // this.diclist = gui.CategoryFilterResultPage.albumsResult.albums;
  },
  methods: {
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true;
        setTimeout(() => {
          this.$refs.scroll.refresh();
        }, 20);
      }
    },
    select(item) {
      this.$router.push({
        path: `/home/${item.albumId}`,
         query:{
          imgUrl:item.coverPath,
           title:item.title
      }
      });
    }
  }
};
</script>

<style scoped lang='stylus'>
.slider-container img {
    width: 100%;
}

.recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 40%;
        overflow: hidden;

        .slider-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}

.recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
}

.loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}

.item a{
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 0 20px 20px 20px;
}

.scr-container {
    position: relative;
}

.list-title {
    height: 65px;
    line-height: 65px;
    text-align: center;
    font-size: $font-size-medium;
    color: #E9400B;
}

.slider-container {
    position: relative;
}

.icon {
    flex: 0 0 60px;
    width: 60px;
    padding-right: 20px;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    line-height: 20px;
    overflow: hidden;
    font-size: $font-size-medium;

    .name {
        margin-bottom: 10px;
        color: $color-text;
    }
}
</style>
