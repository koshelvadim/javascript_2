<template>
    <div class="cart">
        <Header />
        <section id="cart">
        <div class="catalog_header_bg">
            <div class="container catalog_header">
                <div class="catalog_header_text">
                    <h2 class="catalog_header_text_h2">shopping cart</h2>
                </div>
            </div>
        </div>
        <div class="container cart_shoping_wrap">
            <div class="cart_shoping_cart_left">
                <div class="cart_shoping_cart">
                    <a href="catalog.html" class="cart_shoping_cart_link">
                        <img class="cart_shoping_image" src="images/cart_shoping_cart_image_1.png" alt="picture">
                    </a>
                    <div class="cart_shoping_cart_text">
                        <p class="cart_text_name">mango people t-shirt</p>
                        <p class="cart_text_price">Price: </p>
                        <p class="cart_text_color">Color: </p>
                        <p class="cart_text_size">Size: </p>
                        <p class="cart_text_quantity">Quantity: <input class="cart_input_quantity" type="number"
                                max="99" min="1" value="1"></p>
                    </div>
                    <a href="#"><i class="fas fa-times cart_shoping_close_button"></i></a>
                </div>
                <div class="cart_shoping_cart">
                    <a href="catalog.html" class="cart_shoping_cart_link">
                        <img class="cart_shoping_image" src="images/cart_shoping_cart_image_2.png" alt="picture">
                    </a>
                    <div class="cart_shoping_cart_text">
                        <p class="cart_text_name">mango people t-shirt</p>
                        <p class="cart_text_price">Price: </p>
                        <p class="cart_text_color">Color: </p>
                        <p class="cart_text_size">Size: </p>
                        <p class="cart_text_quantity">Quantity: <input class="cart_input_quantity" type="number"
                                max="99" min="1" value="1"></p>
                    </div>
                    <a href="#"><i class="fas fa-times cart_shoping_close_button"></i></a>
                </div>
                <div class="cart_shoping_button">
                    <div class="cart_shoping_left_button">
                        <a class="cart_shoping_left_button_link" href="#">
                            <p class="cart_shoping_left_button_text">Clear shopping cart</p>
                        </a>
                    </div>
                    <div class="cart_shoping_right_button">
                        <a class="cart_shoping_right_button_link" href="catalog.html">
                            <p class="cart_shoping_right_button_text">Continue shopping</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="cart_shoping_cart_right">
                <form class="cart_shoping_form" action="#">
                    <label for="adress_country" class="cart_shoping_cart_right_text">shipping adress</label>
                    <input class="cart_shoping_input" id="adress_country" type="text" placeholder="Country" required
                        maxlength="20">
                    <label for="adress_state"></label>
                    <input class="cart_shoping_input" id="adress_state" type="text" placeholder="State" required
                        maxlength="20">
                    <label for="adress_postcode"></label>
                    <input class="cart_shoping_input" id="adress_postcode" type="text" placeholder="Postcode / Zip"
                        maxlength="10" required>
                    <input class="cart_shoping_input" type="submit" value="GET A QUOTE">
                </form>
                <div class="cart_shoping_total_coast">
                    <p class="cart_shoping_total_coast_text_1">SUB TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p class="cart_shoping_total_coast_text_2">GRAND TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <hr>
                    <a class="cart_shoping_total_coast_button" href="#">
                        <p class="cart_shoping_total_coast_text_3">PROCEED TO CHECKOUT</p>
                    </a>
                </div>
            </div>
        </div>
        </section>
        <Footer />
    </div>   
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

 export default {
     name: 'main',
     components: {
         Header, Footer
     }
 }
</script>