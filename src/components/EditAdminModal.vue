<template>
    <div class="edit-admin-modal" @click="close">
        <form 
            class="edit-admin-modal__form"
            @submit.prevent="saveEdit"
            @click.stop
        >
            <h4 class="edit-admin-modal__form-title">Update Profile Data</h4>

            <label class="edit-admin-modal__form-label">First Name:</label>
            <input 
                class="edit-admin-modal__form-input"
                type="text" 
                v-model="firstname" 
                placeholder="First Name" 
                required
            />
        
            <label class="edit-admin-modal__form-label">Last Name:</label>
            <input 
                class="edit-admin-modal__form-input"
                type="text" 
                v-model="lastname" 
                placeholder="Last Name" 
                required 
            />

            <label class="edit-admin-modal__form-label">Email:</label>
            <input 
                class="edit-admin-modal__form-input"
                type="email" 
                v-model="email" 
                placeholder="Email" 
                required 
            />

            <label class="edit-admin-modal__form-label">Password:</label>
            <input 
                class="edit-admin-modal__form-input"
                type="password" 
                v-model="password" 
                placeholder="Password" 
                required 
            />

            <label class="edit-admin-modal__form-label">Phone:</label>
            <input 
                class="edit-admin-modal__form-input"
                type="number" 
                v-model="phoneNumber" 
                placeholder="Phone Number" 
                required 
            />
            <button 
                type="submit" 
                class="edit-admin-modal__form-button"
            >
                Save Changes
            </button>
            <button 
                class="edit-admin-modal__form-close-button"
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
export default class EditAdminProfile extends Vue {
    public name = 'EditAdminProfile';

    @Prop({ required: true }) adminId: number;

    public firstname = '';
    public lastname = '';
    public email = '';
    public phoneNumber = '';
    public password = '';

    async saveEdit() {
        try {
            const editedAdmin = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password,
                phone_number: this.phoneNumber
            };

            await axios.put(`http://localhost:5555/users/admin/${this.adminId}`, editedAdmin);
            this.$emit('refreshUsers');
        } catch(error) {
            console.error('Error Updating admin:', error);
        }

        this.clearForm();
        this.close();
    }

    clearForm() {
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.phoneNumber = '';
        this.password = '';
    }

    close() {
        this.$emit('close');
    }

    async initializeFormData() {
        const admin = await this.getAdmin(this.adminId);

        this.firstname = admin.firstname;
        this.lastname = admin.lastname;
        this.email = admin.email;
        this.password = admin.password;
        this.phoneNumber = admin.phone_number;
    }

    async getAdmin(id: number) {
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

.edit-admin-modal {
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

