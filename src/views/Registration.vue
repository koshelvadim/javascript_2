<template>
    <div class="registration">
        <Header />
        <section id="registration">
                <div class="catalog_header_bg">
                    <div class="container catalog_header">
                        <div class="catalog_header_text">
                            <h2 class="catalog_header_text_h2">registration</h2>
                        </div>
                    </div>
                </div>
                <div class="container registration_wrap">
                    <div class="registration_wrap_left">
                        <form class="registration_wrap_form" action="#">
                            <label class="registration_form_text_p" for="registration_form_first_name">Your Name</label>
                            <input class="registration_form_input" type="text" id="registration_form_first_name"
                                placeholder="First Name" required minlength="8">
                            <label for="registration_form_last_name"></label>
                            <input class="registration_form_input" type="text" id="registration_form_last_name"
                                placeholder="Last Name" required minlength="8">
                            <div class="registration_form_radio">
                                <label for="registration_form_male" class="registration_form_inline_block">
                                    <span class="registration_form_radio_text_p"><input class="registration_form_radio_male"
                                            type="radio" id="registration_form_male" value="male" name="gender"
                                            required>Male</span>
                                </label>
                                <label for="registration_form_female" class="registration_form_inline_block">
                                    <span class="registration_form_radio_text_p"><input class="registration_form_radio_female"
                                            type="radio" id="registration_form_female" value="female" name="gender"
                                            required>Female</span>
                                </label>
                                <label for="registration_form_other" class="registration_form_inline_block">
                                    <span class="registration_form_radio_text_p"><input class="registration_form_radio_other"
                                            type="radio" id="registration_form_other" value="other" name="gender"
                                            required>Other</span>
                                </label>
                            </div>
                            <label class="registration_form_text_p" for="registration_form_email">Login details</label>
                            <input class="registration_form_input" type="email" id="registration_form_email" placeholder="Email"
                                required minlength="8">
                            <label for="registration_form_password"></label>
                            <input class="registration_form_input" type="password" id="registration_form_password"
                                placeholder="Password" required minlength="8">
                            <p class="registration_form_text_p3">Please use 8 or more characters, with at least 1 number and a
                                mixture of uppercase and lowercase letters</p>
                            <a class="registration_form_link" href="#">Join now<i
                                    class="fas fa-long-arrow-alt-right registration_form_button"></i></a>
                        </form>
                    </div>
                    <div class="registration_wrap_right">
                        <p class="registration_wrap_right_text_p1">Loyalty has its perks</p>
                        <p class="registration_wrap_right_text_p2">Get in on the loyalty program where you can earn points and
                            unlock serious perks. Starting with these as soon as you join:</p>
                        <div class="registration_wrap_right_check_box">
                            <p class="registration_wrap_right_text_p3"><i class="fas fa-check"></i></p>
                            <p class="registration_wrap_right_text_p3">15% off welcome offer</p>
                        </div>
                        <div class="registration_wrap_right_check_box">
                            <p class="registration_wrap_right_text_p3"><i class="fas fa-check"></i></p>
                            <p class="registration_wrap_right_text_p3">Free shipping, returns andexchanges on all orders</p>
                        </div>
                        <div class="registration_wrap_right_check_box">
                            <p class="registration_wrap_right_text_p3"><i class="fas fa-check"></i></p>
                            <p class="registration_wrap_right_text_p3">$10 off a purchase on your birthday</p>
                        </div>
                        <div class="registration_wrap_right_check_box">
                            <p class="registration_wrap_right_text_p3"><i class="fas fa-check"></i></p>
                            <p class="registration_wrap_right_text_p3">Early access to products</p>
                        </div>
                        <div class="registration_wrap_right_check_box">
                            <p class="registration_wrap_right_text_p3"><i class="fas fa-check"></i></p>
                            <p class="registration_wrap_right_text_p3">Exclusive offers & rewards</p>
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