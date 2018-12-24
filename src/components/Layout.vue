<template>
  <section>

    <div class="pages">
    <transition name="fade">
        <router-view></router-view>
    </transition>
    </div>  
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <i slot="icon"/>
        任务大厅
      </mt-tab-item>
      <mt-tab-item id="task">
        <i slot="icon"/>
        我的任务
      </mt-tab-item>
      <mt-tab-item id="member">
        <i slot="icon"/>
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </section>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      title: "任务大厅",
      selected: "home"
    };
  },
  watch: {
    selected: {
      handler: function(val, oldVal) {
        console.log(val, oldVal);
        this.$router.push({ path: val });
      },
      immediate: true
    }
  },
  methods: {
    toggleTab(e) {
      console.log(this);
    }
  }
};
</script>
<style scoped lang="less">
  .pages{
    position: fixed;;
    left:0;
    right:0;
    top:50px;
    bottom:55px;
    top:40px;
    overflow-y:auto;
  }
</style>
