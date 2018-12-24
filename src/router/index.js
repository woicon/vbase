import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/Layout";
import Home from "@/components/Home";
import Task from "@/components/Task";
import Member from "@/components/Member";
import TaskDetail from "@/components/task/taskDetail";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "任务大厅",
      component: Layout,
      children: [
        {
          path: "/home",
          component: Home,
          name: "任务大厅"
        },
        {
          path: "/task",
          name: "我的任务",
          component: Task,
          hidden: true
        },
        {
          path: "/member",
          component: Member,
          name: "会员中心"
        }
      ]
    },
    {
      path: "/home/:id",
      name: "任务大厅",
      component: TaskDetail
    }
  ]
});
