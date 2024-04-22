<template>
    <router-link 
        to="/"
        class="logo"
    >
        <img 
            src="assets/icons/main-logo.png" 
            class="logo__icon" 
            alt="logo"
        />
        <span class="logo__title">FitFusion</span>
    </router-link>  
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';

@Component
export default class Logo extends Vue {
    public name = 'Logo';   

}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.logo {
    @include flex($direction: row, $align-items: center);

    color: $white;
    font-size: 3rem;
    text-decoration: none;

    &__icon {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }

    &__title {
        text-decoration: none;
    }
}
</style>