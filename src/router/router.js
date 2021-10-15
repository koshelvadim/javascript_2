import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import Posts from "@/views/Posts.vue";
import About from "@/views/About.vue";
import PostId from "@/views/PostId.vue";
// import PostWithStore from "@/views/PostWithStore.vue"

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/posts",
    name: "Pots",
    component: Posts
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/posts/:id",
    name: "PostId",
    component: PostId
  },
  // {
  //   path: "/store",
  //   name: "PostWithStore",
  //   component: PostWithStore
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
