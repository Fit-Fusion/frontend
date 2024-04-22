<template>
    <header class="header">
        <Logo /> 
        <HeaderNav />
        <LoginDropdown />

    </header>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import Logo from './Logo.vue';
import HeaderNav from './HeaderNav.vue';
import LoginDropdown from './LoginDropdown.vue';

@Component({
    components: {
        Logo,
        HeaderNav,
        LoginDropdown
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
}
</style>