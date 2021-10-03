<template>
  <div class="home">
    <Header />
    <section class="container_fluid bg_fluid">
        <div class="container_xl main">
            <div class="main_left vision_none">
                <img class="image_header_1" src="../images/main_image.png" alt="picture">
            </div>
            <div class="main_right">
                <div>
                    <p class="text_line"></p>
                </div>
                <div>
                    <h1 class="text_main_right">THE BRAND</h1>
                    <h2 class="text_main_right_1">OF LUXERIOUS <span class="text_main_right_2">FASHION</span></h2>
                </div>
            </div>
        </div>
    </section>
    <BoxFor />
    <CatalogProducts />
    <ButtonBrowseAllProduct />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import BoxFor from '@/components/BoxFor.vue'
import CatalogProducts from '@/components/CatalogProducts.vue'
import ButtonBrowseAllProduct from '@/components/ButtonBrowseAllProduct.vue'

 export default {
     name: 'MainPage',
     components: {
         Header, 
         Footer, 
         BoxFor,
         CatalogProducts,
         ButtonBrowseAllProduct
     }
 }
</script>
