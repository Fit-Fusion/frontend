<template>
    <div class="edit-user-modal" @click="close">
        <form 
            class="edit-user-modal__form"
            @submit.prevent="saveEdit"
            @click.stop
        >
            <h4 class="edit-user-modal__form-title">Update Selected User</h4>

            <label class="edit-user-modal__form-label">First Name:</label>
            <input 
                class="edit-user-modal__form-input"
                type="text" 
                v-model="firstname" 
                placeholder="First Name"
                required
            />

            <label class="edit-user-modal__form-label">Last Name:</label>
            <input 
                class="edit-user-modal__form-input"
                type="text" 
                v-model="lastname" 
                placeholder="Last Name" 
                required 
            />
            <select 
                class="edit-user-modal__form-input"
                v-model="gender" 
                required
            >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <label class="edit-user-modal__form-label">Email:</label>
            <input 
                class="edit-user-modal__form-input"
                type="email" 
                v-model="email" 
                placeholder="Email" 
                required 
            />

            <label class="edit-user-modal__form-label">Phone Number:</label>
            <input 
                class="edit-user-modal__form-input"
                type="tel"
                v-model="phoneNumber" 
                placeholder="Phone Number" 
                required
            />

            <label class="edit-user-modal__form-label">Age:</label>
            <input 
                class="edit-user-modal__form-input"
                type="number"
                v-model="age" 
                placeholder="Date Of Birth" 
                required 
            />
            <select 
                class="edit-user-modal__form-input"
                v-model="areaOfConcentration" 
                required
            >
                <option value="" disabled>Area Of Concentration</option>
                <option value="Boxing">Boxing</option>
                <option value="Cardio">Cardio</option>
                <option value="Weight Lifting">Weight Lifting</option>
                <option value="Strength Training">Strength Training</option>
                <option value="Spa">Spa</option>
            </select>

            <label class="edit-user-modal__form-label">Weight:</label>
            <input 
                class="edit-user-modal__form-input"
                type="number"
                v-model="weight" 
                placeholder="weight in kg" 
                required
            />

            <label class="edit-user-modal__form-label">Height:</label>
            <input 
                class="edit-user-modal__form-input"
                type="number"
                v-model="height" 
                placeholder="height in cm" 
                required
            />
            <button 
                type="submit" 
                class="edit-user-modal__form-button"
            >
                Save Changes
            </button>
            <button 
                class="edit-user-modal__form-close-button"
                @click="close"
            >
                X
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Role } from '../abstracts/Enum';

@Component
export default class AdminEditUserModal extends Vue {
    public name = 'AdminEditUserModal';

    @Prop({ required: true }) userData!: any;

    private firstname = '';
    private lastname = '';
    private gender = '';
    private email = '';
    private phoneNumber = '';
    private age = 0;
    private areaOfConcentration = '';
    private role = Role.client;
    private weight = 0;
    private height = 0;    

    async saveEdit() {
        try {
            const editedUser = {
                id: this.userData.id,
                firstname: this.firstname,
                lastname: this.lastname,
                gender: this.gender,
                email: this.email,
                phone_number: this.phoneNumber,
                age: this.age,
                area_of_concentration: this.areaOfConcentration,
                role: this.role,
                weight: this.weight,
                height: this.height
            };

            await axios.put(`http://localhost:5555/admin/client/${editedUser.id}`, editedUser);

            this.$emit('refreshUsers');
        } catch(error) {
            console.error('Error Updating user:', error);
        }

        this.clearForm();
        this.close();
    }

    clearForm() {
        this.firstname = '';
        this.lastname = '';
        this.gender = '';
        this.email = '';
        this.phoneNumber = '';
        this.age = 0;
        this.areaOfConcentration = '';
        this.role = Role.client;
        this.weight = 0;
        this.height = 0;

    }

    close() {
        this.$emit('close');
    }

    initializeFormData() {
        this.firstname = this.userData.firstname;
        this.lastname = this.userData.lastname;
        this.gender = this.userData.gender;
        this.email = this.userData.email;
        this.phoneNumber = this.userData.phone_number;
        this.age = this.userData.age;
        this.areaOfConcentration = this.userData.area_of_concentration;
        this.role = this.userData.role;
        this.weight = this.userData.weight;
        this.height = this.userData.height;
    }

    formatDate(dateString: string): string {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    created() {
        this.initializeFormData();
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.edit-user-modal {
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
