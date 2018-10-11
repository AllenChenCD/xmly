<template>
 <div>
        <Scroll ref="scroll" class="recommend-content catogry" 
        :pullup="pullup"
        @scrollToEnd="searchMore"
        >
         <div class="scr-container">
            <div>
                <ul>
                  <li  v-for="(item,index) in diclist" class="item" :key="index" @click="select(item)" :item="item">
                      <a>
                            <div class="icon">
                                <img width="60" height="60" v-lazy="item.coverPath" >
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
    <div class="catogry-loading">
         <Loading v-if="!diclist_check.length"></Loading>
    </div>
     <router-view></router-view>
 </div>
</template>

<script type="text/ecmascript-6">
import Scroll from "base/scroll/scroll";
import Loading from "base/loading/loading";
import { sliderdata, diclist } from "api/home";
export default {
  created() {
    diclist().then(res => {
      this.diclist = res.data.data.albums;
    });
  },
  data() {
    return {
      recommends: [],
      diclist: [],
      pagenum: 1,
      pullup: true,
      diclist_check: [1]
    };
  },
  methods: {
    select(item) {
      this.$router.push({
        path: `/catogry/${item.albumId}`,
        query:{
          imgUrl:item.coverPath,
          title:item.title
      }
      }
     
      );
    },
    searchMore() {
      this.diclist_check = [];
      this.pagenum++;
      diclist(this.pagenum).then(res => {
        if (res.data.data.albums.length)
          this.diclist_check = res.data.data.albums;
        this.diclist = this.diclist.concat(res.data.data.albums);
      });
    }
  },
  components: {
    Scroll,
    Loading
  }
};
</script>

<style scoped lang="stylus">
.item
    img{
        border-radius:50%
    }
.catogry-loading {
    position: fixed;
    bottom: 5vh;
    left: 50%;
    transform: translate(-50%, 0);
}

.catogry {
    height: calc(95vh - 58px - 26px);
    overflow: hidden;
    margin-top: 5vh;
}

.loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}

.item a {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 0 20px 20px 20px;
}

.scr-container {
    position: relative;
}

.icon {
    flex: 0 0 60px;
    width: 60px;
    padding-right: 20px;
}

.text .name {
    margin-bottom: 10px;
}
</style>
