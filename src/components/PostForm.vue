<template>
    <div class="form" @submit.prevent>
        <h3>Создание поста</h3>
        <my-input 
            v-focus
            v-model="post.title"  
            id="form1" 
            placeholder="Введите название поста">
        </my-input>
        <my-input 
            v-model="post.body" 
            id="form2" 
            placeholder="Введите содержание поста">
        </my-input>
        <my-button
            @click="createPost"
            class="btn-primary">
            Создать пост
        </my-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            console.log('click');
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: ''
            }
        }
    },
    name: 'PostForm'
}
</script>

<style scoped>
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>