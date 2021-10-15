<template>
  <div class="container">
    <h3>Страница с постами</h3>
   <my-input
      v-focus
      v-model="searchQuery"
      placeholder="Search..."
      class="form-input"
    />
    <div class="app__btns">
      <my-button @click="showDialog" class="btn btn-primary my-3 d-flex">
        Создать пост
      </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form 
        @create="createPost" 
      />
    </my-dialog>
    <post-list 
      :posts="sortedAndSearchedPosts"
      @remove="removePost" 
      v-if="!isPostLoading" 
    />
    <div class="text-info my-5" v-else>
      <h5>Идет загрузка постов с сервера...</h5>
    </div>
    <div class="observer" ref="observer"></div>
    <!-- <div class="page__wrapper">
      <div 
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
          'current-page': page === pageNumber
        }"
        @click="changePage(pageNumber)"
      >
      {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(pageNumber){  
    //   this.page = pageNumber;
    // },
    async futchPosts() {
      try {
        this.isPostLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts' , {
              params: {
                _page: this.page,
                _limit: this.limit
              }
            }
          );
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = response.data;
          // console.log(this.posts);
          this.isPostLoading = false;
        }, 500);
      } catch (e) {
        alert("Ошибка");
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        // this.isPostLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts' , {
              params: {
                _page: this.page,
                _limit: this.limit
              }
            }
          );
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = [...this.posts, ...response.data];
          // console.log(this.posts);
          // this.isPostLoading = false;
        }, 100);
      } catch (e) {
        alert("Ошибка");
      }
    },
  },
  mounted() {
    this.futchPosts();
    // console.log(this.$refs.observer);
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if(entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
        console.log(observer);
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      )
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    // page() {
    //   this.futchPosts();
    // }
  }
}
</script>

<style scoped>
.app__btns {
  display: flex;
  justify-content: space-between;
}
.page__wrapper{
  display: flex;
  margin-top: 15px;
}
.page{
  border: 1px solid #000;
  padding: 10px;
}
.current-page{
  background: orange;
  color: red;
}
.observer{
  height: 30px;
  background: green;
}
</style>
