<template>
        <div class="trainer-login">
        <h1 class="trainer-login__title">Trainer Login</h1>
        
        <form 
            @submit.prevent="login"
            class="trainer-login__form"
        >
            <h4 class="trainer-login__form-title">Enter your Email and Password to login</h4>
            <input 
                class="trainer-login__form-input"
                type="email" 
                v-model="email" 
                placeholder="Email" 
                required
            />
            <input 
                class="trainer-login__form-input"
                type="password" 
                v-model="password" 
                placeholder="Password" 
                required 
            />
            <button 
                type="submit" 
                class="trainer-login__form-button"
            >
                Login
            </button>
        </form>

        <Alert 
            v-if="errorMessage" 
            :message="errorMessage" 
            @close="clearError" 
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Alert from '../components/Alert.vue';

@Component({
    components: {
        Alert
    }
})
export default class TrainerLogin extends Vue {
    public name = 'TrainerLogin';
    public email = '';
    public password = '';
    public errorMessage = '';

    async login() {
        try {
            const trainerExists = await this.checkTrainerExists();
            if (trainerExists) {
                const validPassword = await this.checkPassword();
                
                if (validPassword) {
                    this.$router.push('/trainer-dashboard');
                } else {
                    this.errorMessage = 'Incorrect password';
                }
            } else {
                this.errorMessage = 'Book an appointment to take interview to become a trainer';
            }
        } catch (error) {
            console.error('Error occurred:', error);
            this.errorMessage = 'An error occurred. Please try again.';
        }
    }

    async checkTrainerExists() {
        // Replace this with your actual logic to check if the user exists in the database
        return true; // Placeholder, always returns true for demonstration
    }

    async checkPassword() {
        // Replace this with your actual logic to check the password
        return true; // Placeholder, always returns true for demonstration
    }

    clearError() {
        this.errorMessage = '';
    }
}

</script>

<style lang="scss" scoped>
@import '../scss/styles';

.trainer-login {
    background: linear-gradient(
      90deg,
      rgba(108, 210, 74, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url("/assets/images/trainer-login-bg.webp")
      center fixed no-repeat;
    background-size: cover;
    color: white;
    width: 100%;
    height: 30rem;
    text-align: center;

    &__title {
        padding: 2rem;
    }

    &__form {
        display: flex;
        flex-direction: column;
        background: $black;
        border-radius: 1rem 0 1rem 0;
        width: 25rem;
        padding: 2rem;
        margin: 0 auto;

        &-title {
            padding-bottom: 1rem;
        }

        &-input {
            margin-bottom: 1rem;
            border-radius: .4rem;
            padding: .4rem;
            outline: none;
        }

        &-input:focus {
            border: .2rem solid $theme-color;
        }

        &-button {
            background-color: $theme-color;
            font-weight: 600;
            width: 10rem;
            margin: 0 auto;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            padding: 0.5rem 1rem;
            border: none;
            cursor: pointer;
            border-radius: 0.3rem;
        }

        &-button:hover {
            background-color: $theme-color-hover;
            transition: all .2s ease-in
        }
    }
}
</style>