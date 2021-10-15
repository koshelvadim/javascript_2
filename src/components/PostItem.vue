<template>
        <div class="post">
            <div class="post__text">
                <p><span class="text-success">ID: </span>{{ post.id }}</p>
                <p><span class="text-success">Название: </span>{{ post.title }}</p>
                <p><span class="text-primary">Содержание: </span>{{ post.body }}</p>
            </div>
            <div class="post__btns">
                <my-button
                class="btn-danger my-1"
                @click="$router.push(`/posts/${post.id}`)"
                >
                открыть
                </my-button>
                <my-button
                class="btn-danger my-1"
                @click="$emit('remove', post)"
                >
                удалить
                </my-button>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    name: 'PostItem',
}
</script>
 
<style scoped>
.post{
    border: 2px solid blue;
    margin-top: 10px;
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p{
    margin: 0;
  }
  span{
      font-weight: bold;
  }
  .post__btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

</style>