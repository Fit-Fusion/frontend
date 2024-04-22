<template>
    <ul class="header-nav">
        <li class="header-nav__item">
            <router-link 
                to="/about" 
                class="header-nav__link"
                :class="{ 'active': $route.path === '/about' }"
            >
                Our Team
            </router-link>
        </li>
        <li class="header-nav__item">
            <router-link 
                to="/classes" 
                class="header-nav__link"
                :class="{ 'active': $route.path === '/classes' }"
            >
                Classes
            </router-link>
        </li>
        <li class="header-nav__item">
            <router-link 
                to="/store"  
                class="header-nav__link"
                :class="{ 'active': $route.path === '/store' }"
            >
                Store
            </router-link>
        </li>
        <li class="header-nav__item">
            <router-link 
                to="/blog" 
                class="header-nav__link"
                :class="{ 'active': $route.path === '/blog' }"
            >
                Blog
            </router-link>
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
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    &__link {
        color: white;
        text-decoration: none;
        transition: all .2s ease-in
    }

    &__link:hover {
        color: $theme-color;
    }

    &__link.active {
        color: $theme-color;
    }
}
</style>