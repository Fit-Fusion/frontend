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
                to="/calorie-calculator" 
                class="header-nav__link"
                :class="{ 'active': $route.path === '/calorie-calculator' }"
            >
                Calorie Calculator
            </router-link>
        </li>
        <li class="header-nav__item">
            <button class="header-nav__btn">
                <router-link 
                    to="/login" 
                    class="header-nav__btn-link"
                >
                    Login
                </router-link>
            </button>
        </li>
    </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class HeaderNav extends Vue {
    public name = 'HeaderNav';   

    @Prop({ default: false }) showNav: boolean;

}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.header-nav {
    @include flex($direction: row, $justify-content: space-evenly, $align-items: center);
    width: 50%;

    @include screen-for($mobile) {
        flex-direction: column;
        align-items:flex-end;
        margin-top: 10rem;
        width: 30%;
        background: $theme-background;
    }

    @include screen-including($mobile, $tablet) {
        width: 65%;
    }
    
    &__item {
        @include text-format($weight: 300, $size: 1rem);

        
        @include screen-for($mobile) {
            padding: 0 1rem 1rem 0;
        }

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

    &__btn {
        background-color: $theme-color;
        font-weight: 600;
        font-family:'Courier New', Courier, monospace;
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
        border-radius: 0.3rem; 

        &-link {
            color: $black;
            text-decoration: none;
        }
    }

    &__btn:hover {
        background-color: $theme-color-hover;
    }
}
</style>