<template>
    <div class="container box">
        <router-link
            :to="catalogUrl"
            class="box1">
            <p class="text_box1">30% OFF<br><span class="text_box_ping">FOR WOMEN</span></p>
        </router-link>
        <router-link
            :to="catalogUrl"
            class="box2">
            <p class="text_box2">HOT DEAL<br><span class="text_box_ping">FOR MEN</span></p>
        </router-link>
        <router-link
            :to="catalogUrl"
            class="box3">
            <p class="text_box3">NEW ARRIVALS<br><span class="text_box_ping">FOR KIDS</span></p>
        </router-link>
        <router-link
            :to="catalogUrl"
            class="box4">
            <p class="text_box4">LUXIROUS & TRENDY<br><span class="text_box_ping">ACCESORIES</span></p>
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