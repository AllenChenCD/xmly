<template>
  <div id="app">
      <MHeader/>
     <MNav/>
    <router-view/>
    <Play></Play> 
  </div>
</template>

<script>
import MHeader from "components/m-header";
import MNav from "components/m-nav";
import Play from "components/play";
export default {
  name: "App",
  components: {
    MHeader,
    MNav,
    Play
  }
};
</script>

<style>
</style>
