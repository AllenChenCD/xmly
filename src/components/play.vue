<template>
 <div>
     <div class="fullscreen" ref="fullScreeen" v-show="fullScreen">
          <div class="top-container">
            <i class="music-icon icon-back" @click="hideFullScreeen"></i>
            <span class="toptitle"></span>
          </div>
          <div>
              <div class="middle">
                  <div class="middle-pad"></div>
                </div>
          </div>
          <div class="bottom">
              <div class="bottom-icon">
                  <div>
                      <i class="icon-sequence"></i>
                  </div>
                  <div>
                      <i class="icon-prev"></i>
                  </div>
                  <div>
                      <i class="needsclick icon-play"></i>
                  </div>
                  <div>
                      <i class="icon-next"></i>
                  </div>
                  <div>
                      <i class="icon icon-not-favorite"></i>
                  </div>
              </div>
          </div>
     </div>
     <div class="mini" v-show="!fullScreen&&currentSong.urldata">
          <div class="bottom">
              <div class="bottom-icon">
                  <div>
                      <div class="home-icon" @click="showFullScreeen">
                         <i class=" icon icon-music"></i>
                      </div>
                  </div>
                  <!-- <div>
                      <i class="icon-prev"></i>
                  </div> -->
                  <div>
                      <i class="needsclick icon-play"></i>
                  </div>
                  <div>
                      <i class="icon-next"></i>
                  </div>
                 
              </div>
          </div>
     </div>
 </div>
</template>

<script type="text/ecmascript-6">
import {mapMutations, mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters([
            'fullScreen',
            'currentSong'
        ])
    },


 data() {
     return {}
 },
 components: {

 },
 mounted(){
     console.log(this.currentSong.urldata)
 },
 methods:{
     showFullScreeen(){
         this.set_fullScreen(true)
     },
     hideFullScreeen(){
       this.set_fullScreen(false)
     },
     ...mapMutations({
         set_fullScreen : "SET_FULLSCREEN"
     })

 }
}
</script>

<style scoped lang="stylus">
.home-icon
    // width 30px
    // height 30px
    // border-radius 50%
    // // background #000
    // color #ffffff
    // text-align center
    // line-height 30px
.mini
    position absolute
    bottom 0
    width 100%
    z-index 101
    padding 20px 0
    background #333
    .bottom
        .bottom-icon i 
            font-size 30px

@keyframes roll {
    0%{
        transform rotate(0)
    }
    100%{
        transform rotate(360deg)
    }
}
.bottom-icon
    display flex
    justify-content space-around
.icon-back {
  font-size: 20px;
  transform: rotate(-90deg);
}

.top-container {
  padding: 20px;
}
.middle-pad{
    padding 40%
    margin 0 auto
    background url("http://imagev2.xmcdn.com/group34/M08/04/0A/wKgJYFnhd33RaCQUAABR6JExQMU557.jpg")
    background-size cover
    border-radius 50%
    animation roll  linear 10s infinite
}
.middle img{
    width 100%
    border-radius 50%
}
.middle{
    width 100%
    margin 30px auto
    height 0
    display flex
}
.fullscreen
    position fixed
    width 100%
    height 100%
    top 0
    left 0
    z-index 100
    background #000
    .bottom
        position: absolute;
        bottom: 50px;
        width: 100%;
        z-index 101
        .bottom-icon i 
            font-size 30px
</style>
