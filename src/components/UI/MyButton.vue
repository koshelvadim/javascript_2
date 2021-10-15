<template>
    <button class="btn">
       <slot></slot>   <!-- для отображения надписи "Создать пост" -->
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn{
    width: 120px;
}
</style>