<template>
    <header>
        <div class="container_fluid bg_dark">
            <nav class="container top">
                <div class="navbar_left">
                    <router-link
                        :to="homeUrl">
                        <img src="../images/logo.svg" alt="picture">
                    </router-link>
                    <input type="checkbox" id="search">
                    <label for="search" class="menu_padding"><i class="fas fa-search"></i></label>
                    <form class="menu_search">
                        <input type="search" class="menu_search_input" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
                <div class="navbar_right">
                    <input type="checkbox" id="menu" checked>
                    <label for="menu" class="menu_padding"><i class="fas fa-bars"></i></label>
                    <nav class="main_menu">
                        <label for="menu" class="close_item">
                            <i class="fas fa-times"></i>
                        </label>
                        <h5 class="text_menu_box_h5">Menu</h5>
                        <a href="catalog.html" class="menu_link_h6">
                            <h6 class="text_menu_box_h6">Men</h6>
                        </a>
                        <a href="#" class="menu_link">Accessories</a>
                        <a href="#" class="menu_link">Bags</a>
                        <a href="#" class="menu_link">Denim</a>
                        <a href="#" class="menu_link">T-Shirts</a>
                        <a href="catalog.html" class="menu_link_h6">
                            <h6 class="text_menu_box_h6">Women</h6>
                        </a>
                        <a href="#" class="menu_link">Accessories</a>
                        <a href="#" class="menu_link">Jackets & Coats</a>
                        <a href="#" class="menu_link">Polos</a>
                        <a href="#" class="menu_link">T-Shirts</a>
                        <a href="#" class="menu_link">Shirts</a>
                        <a href="catalog.html" class="menu_link_h6">
                            <h6 class="text_menu_box_h6">Kids</h6>
                        </a>
                        <a href="#" class="menu_link">Accessories</a>
                        <a href="#" class="menu_link">Jackets & Coats</a>
                        <a href="#" class="menu_link">Polos</a>
                        <a href="#" class="menu_link">T-Shirts</a>
                        <a href="#" class="menu_link">Shirts</a>
                        <a href="#" class="menu_link">Bags</a>
                    </nav>
                    <!-- <a class="menu_padding vision_none" href="registration.html"><i class="far fa-user"></i></a> -->
                    <router-link
                        :to="registrationUrl"
                        class="menu_padding vision_none">
                        <i class="far fa-user"></i>
                    </router-link>
                    <!-- <a class="menu_padding vision_none" href="cart.html"><i class="fas fa-shopping-cart"></i></a> -->
                    <router-link
                        :to="cartUrl"
                        class="menu_padding vision_none">
                        <i class="fas fa-shopping-cart"></i>
                    </router-link>
                </div>
            </nav>
        </div>
    </header>
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

