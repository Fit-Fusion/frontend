<template>
    <ul class="header-nav">
        <li class="header-nav__item">
            <router-link 
                to="/coaches"
                class="header-nav__link"    
            >
                Coaches
            </router-link>
        </li>
        <li class="header-nav__item">
            <router-link 
                to="/about" 
                class="header-nav__link"  
            >
                About Us
            </router-link>
        </li>
        <li class="header-nav__item">
            <router-link to="/pricing" class="header-nav__link" >Pricing</router-link>
        </li>
        <li class="header-nav__item">
            <router-link to="/store" class="header-nav__link" >Store</router-link>
        </li>
        <li class="header-nav__item">
            <router-link to="/blog" class="header-nav__link" >Blog</router-link>
        </li>
    </ul>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';

@Component
export default class HeaderNav extends Vue {
    public name = 'HeaderNav';   

}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.header-nav {
    @include flex($direction: row, $justify-content: space-evenly, $align-items: center);
    width: 50%;
    
    &__item {
        @include text-format($weight: 300, $size: 1rem);

        list-style-type: none;
        cursor: pointer;
    }

    &__link {
        color: white;
        text-decoration: none;
        transition: all .2s ease-in
    }

    &__link:hover {
        color: $theme-color;
    }
}
</style>