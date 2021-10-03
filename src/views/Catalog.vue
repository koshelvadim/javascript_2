<template>

    <div class="catalog">
        <Header />
        <section id="catalog">
            <div class="catalog_header_bg">
                <div class="container catalog_header">
                    <div class="catalog_header_text">
                        <h2 class="catalog_header_text_h2">NEW ARRIVALS</h2>
                    </div>
                    <div class="breadcrump_catalog_header">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb_item"><a href="#" class="breadcrumb_list">HOME</a></li>
                                <li class="breadcrumb_item"><a href="#" class="breadcrumb_list">MEN</a></li>
                                <li class="breadcrumb_item active"><a href="#" class="breadcrumb_list active">NEW
                                        ARRIVALS</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="filter_box">
                    <div class="filter_box_left">
                        <input type="checkbox" id="catalog_filter" checked>
                        <label for="catalog_filter">
                            <span class="catalog_text_filter_p">filter</span>
                        </label>
                        <label for="catalog_filter"><i class="fas fa-sort-amount-down black"></i></label>
                        <nav class="catalog_filter_menu">
                            <div class="catalog_accordion_top">
                                <label for="catalog_filter">
                                    <span class="catalog_text_filter_p_color">filter</span>
                                </label>
                                <label for="catalog_filter"><i class="fas fa-sort-amount-down ping"></i></label>
                            </div>
                            <input type="checkbox" id="catalog_accordion_category">
                            <label for="catalog_accordion_category">
                                <span class="catalog_accordion_header">
                                    <span class="catalog_accordion_line"></span>
                                    <span class="catalog_accordion_top_text_1">category</span>                                                   
                                </span>
                                <span class="catalog_accordion_category">
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Accessories</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Bags</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Denim</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Hoodies&nbsp;& &nbsp;Sweatshirts</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Jackets&nbsp;& &nbsp;Coats</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Polos</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Shirts</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">T-Shirts</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Tanks</span></a>
                                </span>
                            </label>
                            <input type="checkbox" id="catalog_accordion_brand">
                            <label for="catalog_accordion_brand">
                                <span class="catalog_accordion_header">
                                    <span class="catalog_accordion_line"></span>
                                    <span class="catalog_accordion_top_text_2">brand</span>                                                   
                                </span>
                                <span class="catalog_accordion_brand">
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Adidas</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Asics</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Converse</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Columbia</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">DKS</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Puma</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Reebook</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Sketchers</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Nike</span></a>
                                </span>
                            </label>
                            <input type="checkbox" id="catalog_accordion_designer">
                            <label for="catalog_accordion_designer">
                                <span class="catalog_accordion_header">
                                    <span class="catalog_accordion_line"></span>
                                    <span class="catalog_accordion_top_text_3">designer</span>                                                   
                                </span>
                                <span class="catalog_accordion_designer">
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Ralph Lauren</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Giorgio Armani</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Jimmy Choo</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Jean-Paul Gaultier</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Marc Jacobs</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Roberto Cavalli</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Calvin Klein</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Valentino Garavani</span></a>
                                    <a href="#" class="catalog_accordion_body_link"><span class="catalog_accordion_body_item">Miuccia Prada</span></a>
                                </span>
                            </label>      
                        </nav>
                    </div>
                    <div class="filter_box_center">
                        <div class="filter_box_center_trending">
                            <input type="checkbox" id="trending" checked>
                            <label for="trending">
                                    <span class="text_filter_box_center_p">trending&nbsp; now</span><i class="fas fa-angle-down"></i>
                            </label>
                            <nav class="filter_box_nav_trending">
                                <div class="filter_box_center_trending_nav">
                                    <div class="trending_nav_items">
                                        <input type="checkbox" id="nav_items_1">
                                        <p class="trending_nav_items_text_p">Denim</p>
                                    </div>
                                    <div class="trending_nav_items">
                                        <input type="checkbox" id="nav_items_2">
                                        <p class="trending_nav_items_text_p">Polos</p>
                                    </div>
                                    <div class="trending_nav_items">
                                        <input type="checkbox" id="nav_items_3">
                                        <p class="trending_nav_items_text_p">Shirts</p>
                                    </div>
                                    <div class="trending_nav_items">
                                        <input type="checkbox" id="nav_items_4">
                                        <p class="trending_nav_items_text_p">Bags</p>
                                    </div>
                                    <div class="trending_nav_items">
                                        <input type="checkbox" id="nav_items_5">
                                        <p class="trending_nav_items_text_p">T-Shirts</p>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div class="filter_box_center_size">
                            <input type="checkbox" id="size" checked>
                            <label for="size">
                                    <span class="text_filter_box_center_p">size</span><i class="fas fa-angle-down"></i>
                            </label>
                            <nav class="filter_box_nav_size">
                                <div class="filter_box_center_size_nav">
                                    <div class="trending_nav_items">
                                        <input type="checkbox" id="nav_size_1">
                                        <p class="trending_nav_items_text_p">XS</p>
                                    </div>
                                    <div class="trending_nav_items">
                                        <input type="checkbox" id="nav_size_2">
                                        <p class="trending_nav_items_text_p">S</p>
                                    </div>
                                    <div class="trending_nav_items">
                                        <input type="checkbox" id="nav_size_3">
                                        <p class="trending_nav_items_text_p">M</p>
                                    </div>
                                    <div class="trending_nav_items">
                                        <input type="checkbox" id="nav_size_4">
                                        <p class="trending_nav_items_text_p">L</p>
                                    </div>                   
                                </div>
                            </nav>
                        </div>
                        <div class="filter_box_center_price">
                            <input type="checkbox" id="price" checked>
                            <label for="price">
                                    <span class="text_filter_box_center_p">price</span><i class="fas fa-angle-down"></i>
                            </label>
                            <nav class="filter_box_nav_price">
                                <div class="filter_box_center_price_nav">
                                    <div class="trending_nav_items">
                                        <input type="checkbox" id="nav_price_1">
                                        <p class="trending_nav_items_text_p">10$</p>
                                    </div>
                                    <div class="trending_nav_items">
                                        <input type="checkbox" id="nav_price_2">
                                        <p class="trending_nav_items_text_p">50$</p>
                                    </div>
                                    <div class="trending_nav_items">
                                        <input type="checkbox" id="nav_price_3">
                                        <p class="trending_nav_items_text_p">99$</p>
                                    </div>                                            
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card_container">
                    <div class="card_box">
                        <a class="card" href="product.html">
                            <img class="images_card" src="images/items_1.png" alt="picture">
                            <div class="card_text">
                                <h5 class="text_card_h5">ELLERY X M'O CAPSULE</h5>
                                <p class="text_card_p">Known for her sculptural takes on traditional tailoring, Australian
                                    arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                                <p class="text_cash">$52.00</p>
                            </div>
                        </a>
                        <div class="add_box">
                            <a class="add_to_cart" href="cart.html">
                                <img class="images_add" src="images/add_to_cart.png" alt="picture">
                                <p class="text_add_to_cart_p">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div class="card_box">
                        <a class="card" href="product.html">
                            <img class="images_card" src="images/items_7.png" alt="picture">
                            <div class="card_text">
                                <h5 class="text_card_h5">ELLERY X M'O CAPSULE</h5>
                                <p class="text_card_p">Known for her sculptural takes on traditional tailoring, Australian
                                    arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                                <p class="text_cash">$52.00</p>
                            </div>
                        </a>
                        <div class="add_box">
                            <a class="add_to_cart" href="cart.html">
                                <img class="images_add" src="images/add_to_cart.png" alt="picture">
                                <p class="text_add_to_cart_p">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div class="card_box vision_none">
                        <a class="card" href="product.html">
                            <img class="images_card" src="images/items_3.png" alt="picture">
                            <div class="card_text">
                                <h5 class="text_card_h5">ELLERY X M'O CAPSULE</h5>
                                <p class="text_card_p">Known for her sculptural takes on traditional tailoring, Australian
                                    arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                                <p class="text_cash">$52.00</p>
                            </div>
                        </a>
                        <div class="add_box">
                            <a class="add_to_cart" href="cart.html">
                                <img class="images_add" src="images/add_to_cart.png" alt="picture">
                                <p class="text_add_to_cart_p">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div class="card_box">
                        <a class="card" href="product.html">
                            <img class="images_card" src="images/items_4.png" alt="picture">
                            <div class="card_text">
                                <h5 class="text_card_h5">ELLERY X M'O CAPSULE</h5>
                                <p class="text_card_p">Known for her sculptural takes on traditional tailoring, Australian
                                    arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                                <p class="text_cash">$52.00</p>
                            </div>
                        </a>
                        <div class="add_box">
                            <a class="add_to_cart" href="cart.html">
                                <img class="images_add" src="images/add_to_cart.png" alt="picture">
                                <p class="text_add_to_cart_p">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div class="card_box">
                        <a class="card" href="product.html">
                            <img class="images_card" src="images/items_8.png" alt="picture">
                            <div class="card_text">
                                <h5 class="text_card_h5">ELLERY X M'O CAPSULE</h5>
                                <p class="text_card_p">Known for her sculptural takes on traditional tailoring, Australian
                                    arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                                <p class="text_cash">$52.00</p>
                            </div>
                        </a>
                        <div class="add_box">
                            <a class="add_to_cart" href="cart.html">
                                <img class="images_add" src="images/add_to_cart.png" alt="picture">
                                <p class="text_add_to_cart_p">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div class="card_box">
                        <a class="card" href="product.html">
                            <img class="images_card" src="images/items_9.png" alt="picture">
                            <div class="card_text">
                                <h5 class="text_card_h5">ELLERY X M'O CAPSULE</h5>
                                <p class="text_card_p">Known for her sculptural takes on traditional tailoring, Australian
                                    arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                                <p class="text_cash">$52.00</p>
                            </div>
                        </a>
                        <div class="add_box">
                            <a class="add_to_cart" href="cart.html">
                                <img class="images_add" src="images/add_to_cart.png" alt="picture">
                                <p class="text_add_to_cart_p">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div class="card_box">
                        <a class="card" href="product.html">
                            <img class="images_card" src="images/items_10.png" alt="picture">
                            <div class="card_text">
                                <h5 class="text_card_h5">ELLERY X M'O CAPSULE</h5>
                                <p class="text_card_p">Known for her sculptural takes on traditional tailoring, Australian
                                    arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                                <p class="text_cash">$52.00</p>
                            </div>
                        </a>
                        <div class="add_box">
                            <a class="add_to_cart" href="cart.html">
                                <img class="images_add" src="images/add_to_cart.png" alt="picture">
                                <p class="text_add_to_cart_p">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div class="card_box">
                        <a class="card" href="product.html">
                            <img class="images_card" src="images/items_11.png" alt="picture">
                            <div class="card_text">
                                <h5 class="text_card_h5">ELLERY X M'O CAPSULE</h5>
                                <p class="text_card_p">Known for her sculptural takes on traditional tailoring, Australian
                                    arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                                <p class="text_cash">$52.00</p>
                            </div>
                        </a>
                        <div class="add_box">
                            <a class="add_to_cart" href="cart.html">
                                <img class="images_add" src="images/add_to_cart.png" alt="picture">
                                <p class="text_add_to_cart_p">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div class="card_box">
                        <a class="card" href="product.html">
                            <img class="images_card" src="images/items_12.png" alt="picture">
                            <div class="card_text">
                                <h5 class="text_card_h5">ELLERY X M'O CAPSULE</h5>
                                <p class="text_card_p">Known for her sculptural takes on traditional tailoring, Australian
                                    arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                                <p class="text_cash">$52.00</p>
                            </div>
                        </a>
                        <div class="add_box">
                            <a class="add_to_cart" href="cart.html">
                                <img class="images_add" src="images/add_to_cart.png" alt="picture">
                                <p class="text_add_to_cart_p">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container pagination_navigation">
                <nav aria-label="Page navigation example">
                    <ul class="pagination_box">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <i class="fas fa-angle-left"></i>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                        <li class="page-item"><a class="page-link" href="#">6...20</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <i class="fas fa-angle-right"></i>
                        </a>
                        </li>
                    </ul>
                    </nav>
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
