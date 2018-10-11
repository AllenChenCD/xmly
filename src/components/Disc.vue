<template>
  <transition name="slide">
    <div class="music-list">
      <div class="disctop" ref="disctop">
          <div class="top-container">
            <i class="music-icon icon-back" @click="goback"></i>
            <span class="toptitle">{{title}}</span>
          </div>        
      </div>
      <scroll class="wrap" @scrollToEnd = "searchMore" :pullup=true>
        <ul class="list">
          <li  v-for="(item,index) in list" :key="index" class="listshow" 
          @click="selectoplay(item)"
          >
            <h1>
              <span class="title">          
                 {{item.title}}
              </span>
              <span>
                <i class="music-icon icon-play"></i>
              </span>
              </h1>
          </li>
        </ul>
      </scroll>  
      <audio :src="toplay.play_path" ref="myaudio"></audio>     
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import {mapMutations,mapGetters} from 'vuex'
import jsonp from "jsonp";
import scroll from "base/scroll/scroll";
import { getDetail, toplay } from "api/home";
export default {
  data() {
    return {
      list: [],
      toplay: {},
      num: 1,
      taht: 0,
      thatLength: 0,
      imgurl:"",
      title:""
    };
  },
  created() {
    this.getDate();
    this.imgurl = this.imgurlget(this.$route.query.imgUrl)
    this.title = this.$route.query.title
    console.log(this.title)
  },
  components: {
    scroll
  },
  mounted(){
     this.$refs.disctop.style.background =`url("${this.imgurl}") no-repeat no-repeat center center` 
  },
  methods: {
    imgurlget(data){
      var x = data.indexOf("jpg")
      var u = data.substr(0,x+3)
      return u
    },
    getDate(num) {
      var id = this.$route.params.id;
      getDetail(id, this.num).then(res => {
        if (!res.data.data.tracks.length) {
          this.num = this.that;
          return;
        }
        this.list = this.list.concat(this.datachange(res.data.data.tracks));
      });
    },
    searchMore: function() {
      this.that = this.num;
      this.thatLength = this.list.length;
      this.num++;
      this.getDate(this.num);
    },
    goback: function() {
      this.$router.go(-1);
    },
    datachange: function(data) {
      data.forEach((el, index) => {
        var d = el.url;
        var num = d.lastIndexOf("/");
        var urldata = d.slice(num + 1);
        el.urldata = urldata;
      });
      return data;
    },
    selectoplay: function(data) {
      this.set_fullScreen(true)
      toplay(data.urldata).then(res => {
        this.toplay = res.data;
        setTimeout(() => {
          this.$refs.myaudio.play();
        }, 20);
      });
      this.set_CurrentSong(data)
    },
    ...mapMutations({
      set_fullScreen : "SET_FULLSCREEN",
      set_CurrentSong : "SET_CURRENTSONG"
    })
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~assets/stylus/variable';
.toptitle{
  align-self center
  flex-grow 1
  text-align center
  font-size 20px
}
.top-container{
  display flex
  justify-content flex-start
  align-items center
}
.play-icon-main{
  font-size 40px
  position absolute 
  top 50%
  left 50%
  transform translate(-50%,-50%)
}
.wrapimg {
  height: 35vh;
  overflow: hidden;
  text-align: center;
}

.wrapimg>img {
  height: 100%;
  border-radius: 50%;
}

.listshow .title {
  display: block;
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
}

.icon-back {
  font-size: 20px;
}

.top-container {
  padding: 20px;
}

.list li {
  border-bottom: 1px solide #ffffff;
}

.listshow h1 {
  display: flex;
  justify-content: space-around;
  height: 20px;
  line-height: 20px;
}

.disctop {
  height: 40vh;
  background-size cover!important
  position relative
}

.wrap {
  height: 60vh;
  overflow: hidden;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0);
}

.music-list {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}

.list li {
  padding: 20px;
  text-align: justify;
}

.list li h1 {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>