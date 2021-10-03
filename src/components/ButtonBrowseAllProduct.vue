<template>
    <div class="button">
        <router-link
            :to="catalogUrl"
            class="button_products">
            Browse All Product
        </router-link>
    </div>
</template>

<script>
export default {
    data () {
       return {
           homeUrl: '/',
           catalogUrl: '/catalog',
           registrationUrl: '/registration',
           productUrl: '/product',
           cartUrl : '/cart'
       }
    }
}
</script>