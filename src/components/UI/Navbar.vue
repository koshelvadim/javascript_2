<template>
  <div class="navbar container-fluid">
    <div class="container">
      <div class="logo text-danger fw-bold" @click="$router.push('/')"><h2>TEST VUE</h2></div>
      <div class="navbar__btns">
        <my-button 
          class="btn-danger mx-1"
          @click="$router.push('/posts')"
        >POSTS</my-button>
        <my-button 
          class="btn-danger mx-1"
          @click="$router.push('/about')"
        >ABOUT</my-button>
        <my-button 
          class="btn-danger mx-1"
          @click="$router.push('/store')"
        >STORE</my-button>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
.navbar{
    background-color: rgba(0, 0, 0, 0.9);
    display: flex; 
}
.logo:hover h2{
  color: #fff;
  cursor: pointer;
}
</style>