<template>
    <header class="header">
        <Logo /> 
        <HeaderNav />
        <button class="header__btn">
            <router-link 
                to="/login" 
                class="header__link"
            >
                Login
            </router-link>
        </button>
    </header>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import Logo from './Logo.vue';
import HeaderNav from './HeaderNav.vue';

@Component({
    components: {
        Logo,
        HeaderNav
    }
})
export default class Header extends Vue {
    public name = 'Header'; 
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.header {
    @include flex($direction: row, $justify-content: space-between, $align-items: center);
    @include size($width: 100%, $height: 6rem);
    background-color: $theme-background;
    padding: 0 1rem 0 1rem;

    box-sizing: border-box;

    &__btn {
        background-color: $theme-color;
        font-weight: 600;
        font-family:'Courier New', Courier, monospace;
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
        border-radius: 0.3rem; 
    }

    &__link {
        color: $black;
        text-decoration: none;
    }
}
</style>