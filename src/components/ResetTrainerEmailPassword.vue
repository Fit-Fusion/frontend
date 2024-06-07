<template>
    <div class="reset-trainer-email-password" @click="close">
        <form 
            class="reset-trainer-email-password__form"
            @submit.prevent="saveEdit"
            @click.stop
        >
            <h4 class="reset-trainer-email-password__form-title">Reset Email/Password Below</h4>

            <label class="reset-trainer-email-password__form-label">Email:</label>
            <input 
                class="reset-trainer-email-password__form-input"
                type="email" 
                v-model="email" 
                placeholder="Email" 
                required 
            />

            <label class="reset-trainer-email-password__form-label">Password:</label>
            <input 
                class="reset-trainer-email-password__form-input"
                type="password" 
                v-model="password" 
                placeholder="Password" 
                required 
            />

            <button 
                type="submit" 
                class="reset-trainer-email-password__form-button"
            >
                Save Changes
            </button>
            <button 
                class="reset-trainer-email-password__form-close-button"
                @click="close"
            >
                X
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ResetTrainerEmailPassword extends Vue {
    public name = 'ResetTrainerEmailPassword';
    
    @Prop({ required: true }) trainerId: number;

    public email = '';
    public password = '';

    async saveEdit() {
        try {
            const editedTrainer = {
                email: this.email,
                password: this.password
            };

            await axios.put(`http://localhost:5555/reset-email-password/users/${this.trainerId}`, editedTrainer);
            this.$emit('refreshUsers');
        } catch(error) {
            console.error('Error Updating trainer:', error);
        }

        this.clearForm();
        this.close();
    }

    clearForm() {
        this.email = '';
        this.password = '';
    }

    close() {
        this.$emit('close');
    }

    async initializeFormData() {
        const trainer = await this.getTrainer(this.trainerId);

        this.email = trainer.email;
        this.password = trainer.password;
    }

    async getTrainer(id: number) {
        const response = await axios.get(`http://localhost:5555/users/${id}`);

        return response.data.user[0];
    }

    async created() {
        await this.initializeFormData();
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.reset-trainer-email-password {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    &__form {
        position: relative;
        display: flex;
        flex-direction: column;
        background: $black;
        border-radius: 1rem;
        width: 25rem;
        padding: 2rem;
        margin: 0 auto;

        &-title {
            padding-bottom: 1rem;
            text-align: center;
        }

        &-input {
            margin-bottom: 1rem;
            border-radius: .4rem;
            padding: .4rem;
            outline: none;
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

        &-close-button {
            position: absolute;
            top: .5rem;
            right: .5rem;
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 1.5rem;
            color: $red;
        }
    }    
}
</style>

