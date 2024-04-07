<template>
    <a href="" class="header-logo">
        <img 
            src="assets/icons/main-logo.png" 
            class="header-logo__icon" 
            alt="logo"
        />

        <span class="header-logo__title">FitFusion</span>
    </a>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';

@Component
export default class HeaderLogo extends Vue {
    public name = 'HeaderLogo';   

}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.header-logo {
    @include flex($direction: row, $align-items: center);

    color: $white;
    font-size: 3rem;
    text-decoration: none;

    &__icon {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }
}
</style>