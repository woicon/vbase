<template >
  <section>
    <h2> {{detail.tasktitle}}</h2> 
     <div v-html="detail.content" class="content"></div>
  </section>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      detail:null
    };
  },
  created(e){
      this.taskDetail(this.$route.params.id);
  },
  mounted(e) {
    
  },
  methods: {
    taskDetail(id) {
      this.$api.taskDetail({
          pid:id
      }).then(res => {
        console.log(res)
        this.detail = res.datas
      });
    }
  },
  watch: {
    
  }
};
</script>
<style lang="less">
.content{
    padding:20px;
    background:#fff;
    img{
        width:100% ;
        box-shadow:none !important;
    }
}

</style>
