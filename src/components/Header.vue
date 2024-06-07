<template>
    <header class="header">
        <Logo /> 
        <HeaderNav />
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
    public showNav = true;
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.header {
    @include flex($direction: row, $justify-content: space-between, $align-items: center);
    @include size($width: 100%, $height: 6rem);
    background-color: $theme-background;
    padding: 0 1rem 0 1rem;
    height: 15vh;
    box-sizing: border-box;
}
</style>