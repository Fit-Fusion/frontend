<template>
    <div class="edit-client-modal" @click="close">
        <form 
            class="edit-client-modal__form"
            @submit.prevent="saveEdit"
            @click.stop
        >
            <h4 class="edit-client-modal__form-title">Update Profile Data</h4>

            <label class="edit-client-modal__form-label">First Name:</label>
            <input 
                class="edit-client-modal__form-input"
                type="text" 
                v-model="firstname" 
                placeholder="First Name" 
                required
            />
        
            <label class="edit-client-modal__form-label">Last Name:</label>
            <input 
                class="edit-client-modal__form-input"
                type="text" 
                v-model="lastname" 
                placeholder="Last Name" 
                required 
            />

            <select 
                class="edit-client-modal__form-input"
                v-model="gender" 
                required
            >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

            <label class="edit-client-modal__form-label">Age:</label>
            <input 
                class="edit-client-modal__form-input"
                type="number" 
                v-model="age" 
                placeholder="Age" 
                required 
            />
            <label class="edit-client-modal__form-label">Weight:</label>
            <input 
                class="edit-client-modal__form-input"
                type="number" 
                v-model="weight" 
                placeholder="Weight (kg)" 
                required 
            />
            <label class="edit-client-modal__form-label">Height:</label>
            <input 
                class="edit-client-modal__form-input"
                type="number" 
                v-model="height" 
                placeholder="Height (cm)" 
                required 
            />
            <label class="edit-client-modal__form-label">Phone:</label>
            <input 
                class="edit-client-modal__form-input"
                type="number" 
                v-model="phoneNumber" 
                placeholder="Phone Number" 
                required 
            />
            <button 
                type="submit" 
                class="edit-client-modal__form-button"
            >
                Save Changes
            </button>
            <button 
                class="edit-client-modal__form-close-button"
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
export default class EditClientProfile extends Vue {
    public name = 'EditClientModal';
    
    @Prop({ required: true }) clientId: number;

    public firstname = '';
    public lastname = '';
    public gender = '';
    public age = 0;
    public weight = 0;
    public height = 0;
    public phoneNumber = '';

    async saveEdit() {
        try {
            const editedClient = {
                firstname: this.firstname,
                lastname: this.lastname,
                gender: this.gender,
                age: this.age,
                weight: this.weight,
                height: this.height,
                phone_number: this.phoneNumber
            };

            await axios.put(`http://localhost:5555/users/${this.clientId}`, editedClient);
            this.$emit('refreshUsers');
        } catch(error) {
            console.error('Error Updating client:', error);
        }

        this.clearForm();
        this.close();
    }

    clearForm() {
        this.firstname = '';
        this.lastname = '';
        this.gender = '';
        this.age = 0;
        this.weight = 0;
        this.height = 0;
        this.phoneNumber = '';
    }

    close() {
        this.$emit('close');
    }

    async initializeFormData() {
        const client = await this.getClient(this.clientId);

        this.firstname = client.firstname;
        this.lastname = client.lastname;
        this.gender = client.gender;
        this.age = client.age;
        this.weight = client.weight;
        this.height = client.height;
        this.phoneNumber = client.phone_number;
    }

    async getClient(id: number) {
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

.edit-client-modal {
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

