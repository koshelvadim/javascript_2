<template>
    <div class="list-post">
        <div v-show="posts.length > 0">
            <h3>Список постов</h3>
            <transition-group name="user_list">
                <post-item 
                v-for="post in posts" 
                :key="post.id"
                :post="post"
                @remove="$emit('remove', post)" 
            />
            </transition-group> 
        </div>
        <h3 
            v-show="posts.length === 0"
            class="text-danger"
        >
        Ваш список постов пуст
        </h3>
    </div>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
  components: {
    PostItem 
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    name: 'PostList'
}
</script>

<style scoped>
.user_list-item {
  display: inline-block;
  margin-right: 10px;
}
.user_list-enter-active,
.user_list-leave-active {
  transition: all 1s ease;
}
.user_list-enter-from,
.user_list-leave-to {
  opacity: 0;
  transform: translateX(800px);
}
.user_list-move {
  transition: transform 1s ease;
}
</style>