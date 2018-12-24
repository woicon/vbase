<template >
  <section>
    <mt-navbar v-model="currentTab" fixed>
      <mt-tab-item v-for="(item,index) in tasktype" :id="index" :key="index">{{item}}</mt-tab-item>
    </mt-navbar>

    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li
        class="home-list-item line-b"
        v-for="item in list"
        :key="item.pid"
        @click="toDetail"
        :id="item.pid"
      >
        <div class="home-list-cont">
          <div class="home-list-cont-img">
            <img :src="item.taskimg">
          </div>
          <div>
            <h2>{{item.taskname}}</h2>
            <div class="home-list-cont-line">
              <span>关注任务</span>
              <span>剩余{{item.taskrenum}}份</span>
            </div>
          </div>
        </div>
        <div class="home-list-tag">
          <b>+{{item.reward}}</b>金币
        </div>
      </li>
    </ul>
    <div class="loading" v-show="loading">
      <mt-spinner type="triple-bounce"></mt-spinner>
    </div>
  </section>
</template>
<script>
//import taskDetail from "@/components/task/TaskDetail";
export default {
  name: "Home",
  data() {
    return {
      tasktype: ["全部", "关注任务", "分享任务", "阅读任务", "下载任务"],
      list: null,
      currentTab: 1,
      loading: false,
      pagenum: 0,
      isEmpty:false,
      hasMore:true
    };
  },
  mounted() {
    this.tasklist();
  },
  methods: {
    tasklist(args) {
      let arg = args || {};
      let params = {
        pagenum: this.pagenum,
        pagesize: 10,
        tasktype: this.currentTab
      };
      this.$api.tasklist(params).then(res => {
        console.log(res);
        if(res.datas){
            this.list = res.datas
        }else if(res.ret_code == 300){
            if(arg.loadMore){
                this.hasMore =false
            }else{
                this.isEmpty =true
            }
        }
         this.loading = false
      });
    },
    toDetail(e) {
      console.log(e);
      let id = e.target.id;
      this.$router.push({ path: `/home/${id}`, params: { id: id } });
    },
    loadMore() {
      this.loading = true;
      if(this.hasMore){
          this.tasklist()
      }
      
    }
  },
  watch: {
    currentTab: function(val, oldVal) {
      console.log(val, oldVal);
      this.tasklist({
        tasktype: val
      });
      // immediate: true
    }
  }
};
</script>
<style lang="less" scoped>
.loading {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
