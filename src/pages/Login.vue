<template>
    <div class="login">
        <h1 class="login__title">Login Page</h1>
        
        <form 
            @submit.prevent="login"
            class="login__form"
        >
            <h4 class="login__form-title">Enter your Email and Password to login</h4>
            <input 
                class="login__form-input"
                type="email" 
                v-model="email" 
                placeholder="Email" 
                required
            />
            <input 
                class="login__form-input"
                type="password" 
                v-model="password" 
                placeholder="Password" 
                required 
            />
            <button 
                type="submit" 
                class="login__form-button"
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
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import VueRouter  from 'vue-router';
import { DbUser } from '../abstracts/Interfaces';
import { Role } from '../abstracts/Enum';
import Alert from '../components/Alert.vue';

@Component({
    components: {
        Alert
    }
})
export default class Login extends Vue {
    $router: VueRouter;
    public name = 'Login';

    public email = '';
    public password = '';
    public errorMessage = '';

    @Action('loginUser') loginUser: Function;

    async login() {
        try {
            const user: DbUser = await this.getUser();
            if (!user) {
                this.errorMessage = 'User Not Found';
                return;
            }
              
            const validPassword = this.checkUserPassword(user);
            if (!validPassword) {
                this.errorMessage = 'Incorrect Login password';
                return
            }
            
            if (!this.checkUserEmail(user)) {
                this.errorMessage = 'Email not found';
                return;
            }
            
            this.redirectUser(user);
            this.loginUser(user);
        } catch (error) {
            console.error('Error occurred:', error);
            this.errorMessage = 'An error occurred. Please try again.';
        }
    }

    redirectUser(user: DbUser) {
        const userRole = user.role;
        const userId = user.id;

        if (userRole == Role.admin) {
            this.redirectAdminToProfile(userId);
        } else if (userRole == Role.client) {
            this.redirectClientToProfile(userId);
        } else if (userRole == Role.trainer) {
            this.redirectTrainerToProfile(userId);
        } else {
            this.$router.push('/sign-up');
        }
    }

    redirectAdminToProfile(userId: number) {
        this.$router.push({ 
            name: 'AdminProfile',
            params: { 
                adminId: userId.toString()
            }
        });
    }

    redirectClientToProfile(userId: number) {
        this.$router.push({ 
            name: 'ClientProfile',
            params: { 
                clientId: userId.toString()
            }
        });
    }

    redirectTrainerToProfile(userId: number) {
        this.$router.push({ 
            name: 'TrainerProfile',
            params: { 
                trainerId: userId.toString()
            }
        });
    }

    async getUser(): Promise<DbUser> {
        // improve
        const response = await axios.get(`http://localhost:5555/users/email/${this.email}`);      
        
        return response.data.user;
    }

    checkUserPassword(user: DbUser) {
        return (user.password == this.password)
    }

    checkUserEmail(user: DbUser) {
        return (user.email == this.email)
    }

    clearError() {
        this.errorMessage = '';
    }
}

</script>

<style lang="scss" scoped>
@import '../scss/styles';

.login {
    background: linear-gradient(
      90deg,
      rgba(108, 210, 74, 0.9),
      rgba(0, 0, 0, 0.9)
    ),
    url("/assets/images/login-bg.webp")
      center fixed no-repeat;
    background-size: cover;
    color: white;
    width: 100%;
    height: 60vh;
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