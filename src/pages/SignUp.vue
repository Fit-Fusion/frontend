<template>
    <div class="sign-up">
        <h1 class="sign-up__title">Sign up Page</h1>
        
        <form 
            @submit.prevent="registerNewUser"
            class="sign-up__form"
        >
            <h4 class="sign-up__form-title">Fill the form to sign up</h4>
            
            <input 
                class="sign-up__form-input"
                type="text"
                v-model="firstName" 
                placeholder="First Name" 
                required
            />
            <input 
                class="sign-up__form-input"
                type="text"
                v-model="lastName" 
                placeholder="Last Name" 
                required
            />
            <input 
                class="sign-up__form-input"
                type="text"
                v-model="gender" 
                placeholder="Gender" 
                required
            />
            <input 
                class="sign-up__form-input"
                type="email" 
                v-model="email" 
                placeholder="Email" 
                required
            />            
            <input 
                class="sign-up__form-input"
                type="tel"
                v-model="phoneNumber" 
                placeholder="Phone Number" 
                required
            />
            <input 
                class="sign-up__form-input"
                type="date"
                v-model="dateOfBirth" 
                placeholder="Date Of Birth" 
                required
            />
            <input 
                class="sign-up__form-input"
                type="string"
                v-model="areasOfConcentration" 
                placeholder="Area of Concentration" 
                required
            />
            <input 
                class="sign-up__form-input"
                type="number"
                v-model="weight" 
                placeholder="weight in kg" 
                required
            />
            <input 
                class="sign-up__form-input"
                type="number"
                v-model="height" 
                placeholder="height in cm" 
                required
            />
            
            <button 
                type="submit" 
                class="sign-up__form-button"
            >
                Sign Up
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueRouter  from 'vue-router';
import Alert from '../components/Alert.vue';
import { User } from '../abstracts/Interfaces';
import { Role } from '../abstracts/Enum';
import axios from 'axios';

@Component({
    components: {
        Alert
    }
})
export default class SignUp extends Vue {
    $router: VueRouter;

    private firstName: string = '';
    private lastName: string = '';
    private email: string = '';
    private phoneNumber: string = '';
    private dateOfBirth: string = '';
    private areasOfConcentration: string = '';
    private weight: string = '';
    private height: string = '';
    private role: Role.client | Role.trainer = Role.client;
    private gender: string = '';

    async registerNewUser() {
        try {
            const newUser = this.createNewUser();
            const response = await axios.post('http://localhost:5555/user', newUser);

            this.clearForm();
            this.$router.push('/login');
            console.log('User created successfully:', response.data);
        } catch(error) {
            console.error('Error registering new user:', error);
        }
    }

    createNewUser(): User {
        return { 
            firstname: this.firstName,
            lastname: this.lastName,
            email: this.email,
            phoneNumber: this.phoneNumber,
            dateOfBirth: this.dateOfBirth,
            areasOfConcentration: this.areasOfConcentration,
            weight: this.weight,
            height: this.height,
            role: this.role,
            gender: this.gender
        }        
    }

    clearForm() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phoneNumber = '';
        this.dateOfBirth = '';
        this.areasOfConcentration = '';
        this.weight = '';
        this.height = '';
        this.gender = '';
    }

}

</script>

<style lang="scss" scoped>
@import '../scss/styles';

.sign-up {
    background: linear-gradient(
      90deg,
      rgba(108, 210, 74, 0.9),
      rgba(0, 0, 0, 0.9)
    ), center fixed no-repeat;
    background-size: cover;
    color: white;
    width: 100%;
    padding-bottom: 2rem;
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