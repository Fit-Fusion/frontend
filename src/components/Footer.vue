<template>
    <footer class="footer">
        <div class="footer-left">
            <Logo />

            <ul class="footer__icons">
                <li class="footer__icon">
                    <a href="#" class="footer__link">
                        <img
                            src="assets/icons/facebook.svg"
                            alt=""
                            class="footer__icon-img"
                        />
                    </a>
                </li>
                <li class="footer__icon">
                    <a href="#" class="footer__link">
                        <img
                            src="assets/icons/twitter.svg"
                            alt=""
                            class="footer__icon-img"
                        />
                    </a>
                </li>
                <li class="footer__icon">
                    <a href="#" class="footer__link">
                        <img
                            src="assets/icons/gmail.svg"
                            alt=""
                            class="footer__icon-img"
                        />
                    </a>
                </li>
                <li class="footer__icon">
                    <a href="#" class="footer__link">
                        <img
                            src="assets/icons/instagram.svg"
                            alt=""
                            class="footer__icon-img"
                        />
                    </a>
                </li>
                <li class="footer__icon">
                    <a href="#" class="footer__link">
                        <img
                            src="assets/icons/vk.svg"
                            alt=""
                            class="footer__icon-img"
                        />
                    </a>
                </li>
            </ul>
        </div>
        <div class="footer-center">
            <ul class="footer__nav">
                <li class="footer__nav-item">
                    <router-link to="/about" class="footer__nav-link">Our Team</router-link>
                </li>
                <li class="footer__nav-item">
                    <router-link to="/classes" class="footer__nav-link">Classes</router-link>
                </li>
                <li class="footer__nav-item">
                    <router-link to="/store" class="footer__nav-link">Store</router-link>
                </li>
                <li class="footer__nav-item">
                    <router-link to="/blog" class="footer__nav-link">Blog</router-link>
                </li>
            </ul>

            <p class="footer__address">
                Visit Us <br />
                Petrovskaya 87, Moscow, 119021
                +7 (495) 123-45-678<br/>
                info@fitfusion.ru
            </p>
        </div>
        <div class="footer-right">
            <p class="footer__call-to-action">Subscribe to News</p>

            <input key="email" type="email" class="footer__input" placeholder="Your email" />
            <button class="footer__button">Subscribe</button> 
        </div>
    </footer>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import Logo from './Logo.vue';

@Component({
    components: {
        Logo
    }
})
export default class Footer extends Vue {
    public name = 'Footer';   

}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.footer {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    background: rgb(60, 65, 66);
    

    &__icons {
        display: flex;
        margin-top: 3rem;
    }

    &__icon {
        list-style-type: none;
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .6rem; 

    }

    &__icon:hover {
        width: 1.8rem;
        height: 1.8rem;

        transition: all .2s ease-in
    }

    &__nav {
        display: flex;
        flex-direction: row;
        padding-bottom: 3rem;
    }

    &__nav-item {
        list-style-type: none;
        margin-right: 1rem;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    &__nav-link {
        color: white;
        text-decoration: none;
    }

    &__address {
        color: white;
        font-size: .8rem;
    }

    &__call-to-action {
        color: white;
        font-size: .8rem;
        padding-bottom: .6rem;
    }

    &__button {
        background-color: $theme-color;
        padding: .3rem;
        border: none;
        cursor: pointer;
        border-radius: 0.3rem; 
    }


}

</style>