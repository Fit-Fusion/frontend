
<template>
    <div class="login-dropdown">
        <button 
            class="login-dropdown__toggle-btn" 
            @click="toggleDropdown"
        >
            Login
        </button>
        <div v-if="dropdownOpen" class="login-dropdown__content">
            <span @click="loginAsClient" class="login-dropdown__item">Client</span>
            <span @click="loginAsTrainer" class="login-dropdown__item">Trainer</span>
        </div>
    </div>  
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import VueRouter  from 'vue-router';

@Component
export default class LoginDropdown extends Vue {
    $router!: VueRouter;
    public name = 'LoginDropdown';   
    public dropdownOpen = false;  


    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
    }

    loginAsClient() {
        this.$router.push('/client-login');
        this.dropdownOpen = false;
    }

    loginAsTrainer() {
        this.$router.push('/trainer-login');
        this.dropdownOpen = false;
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.login-dropdown {
    position: relative;

    &__toggle-btn {
        background-color: $theme-color;
        font-weight: 600;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
        border-radius: 0.3rem;
    }

   &__content {
        position: absolute;
        top: 100%;
        right: 0;
        background-color: #34366d;
        width: 7rem;
        z-index: 1;
    }

    &__item {
        color: $white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        cursor: pointer;
    }

    &__item:hover {
        background-color: #0d0d2d;
    }
}
</style>