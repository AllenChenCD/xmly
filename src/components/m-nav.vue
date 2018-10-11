<template>
 <div class="nav">
    <router-link tag="div" class="tab-item" to="/home">
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/catogry">
      <span class="tab-link">全部</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行
      </span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "m-nav",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="stylus">
@import "~assets/stylus/variable.styl"

.nav{
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
}
.nav>div{
    width: 25%;
    text-align: center
}
.nav>div span{
    color: #ffffff
}
.router-link-active .tab-link{
    color: #E9400B;
    border-bottom: 2px solid #E9400B;
    padding-bottom 5px
}

</style>
