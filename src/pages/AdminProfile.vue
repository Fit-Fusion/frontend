<template>
    <div class="admin-profile">
        <div class="admin">
            <div class="admin__bio-wrapper">
                <img
                    src="/assets/images/profile_pic.webp"
                    class="admin__image"
                    alt="admin"
                />

                <div class="admin__bio">
                    <h3 class="admin__name">{{ fullname }}</h3>
                    <p class="admin__bio-data">{{ email }}</p>
                    <p class="admin__bio-data"> {{ phoneNumber }} </p>
                </div>
            </div>

            <!-- <div class="admin-info">
                <div class="admin-info__item">
                    <i class="admin-info__icon"><i class="fas fa-user"></i></i>
                    <div class="admin-info__wrapper">
                        <p class="admin__basic-info">{{ role }}</p>
                        <p class="admin__basic-info-title">Role</p>
                    </div>
                </div>
            </div> -->

            <h3 class="admin__actions-title">Actions</h3>

            <div class="actions">
                <button class="actions__button" @click="showEditProfile">Edit Profile</button>
                <button class="actions__button" @click="showManageUsersModal">Manage Users</button>
                <button class="actions__button" @click="showManageClassesModal">Manage Classes</button>
                <button class="actions__button">Manage Products</button>
            </div>
        </div>

        <EditAdminModal
            v-if="showEditProfileModal"
            :adminId="adminId"
            @close="hideEditProfileModal"
            @refreshUsers="refreshUsers"
        />  
        <ManageUsersModal
            v-if="showManageUsers"
            :visible="showManageUsers"
            @close="hideManageUsersModal"
        /> 
        <ManageClassesModal
            v-if="showManageClasses"
            :visible="showManageClasses"
            @close="hideManageClassesModal"
        /> 
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue, Prop } from 'vue-property-decorator';
import EditAdminModal from '../components/EditAdminModal.vue';
import ManageUsersModal from '../components/ManageUsersModal.vue';
import ManageClassesModal from '../components/ManageClassesModal.vue';

@Component({
    components: {
        EditAdminModal,
        ManageUsersModal,
        ManageClassesModal
    }
})
export default class AdminProfile extends Vue {
    public name = 'AdminProfile'; 

    public firstname = '';
    public lastname = '';
    public fullname = '';
    public email = '';
    public phoneNumber = '';
    public password = '';

    private showEditProfileModal = false;
    private showManageUsers = false;
    private showManageClasses = false;


    @Prop({ required: true }) adminId: string;

    async initializeData() { 
        try {
            const user = await this.getAdmin();

            this.initiateUser(user);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    initiateUser(user: any) {
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.fullname = this.getFullName(this.firstname, this.lastname);
        this.email = user.email;
        this.phoneNumber = user.phone_number;
        this.password = user.password;
    }

    private getFullName(firstname: string, lastname: string) {
        return `${firstname.charAt(0).toUpperCase()}${firstname.slice(1)} ${lastname.charAt(0).toUpperCase()}${lastname.slice(1)}`;
    }

    async getAdmin() {
        try {
            const response = await axios.get(`http://localhost:5555/users/profile/admin/${this.adminId}`); 
            return response.data.admin[0];
        } catch (error) {
            console.error('Error fetching user data:', error);
            return null;
        }
    }

    showEditProfile() {
        this.showEditProfileModal = true; 
    }

    hideEditProfileModal() {
        this.showEditProfileModal = false; 
    }

    showManageUsersModal() {
        this.showManageUsers = true;
    }

    hideManageUsersModal() {
        this.showManageUsers = false;
    }

    showManageClassesModal() {
        this.showManageClasses = true;
    }

    hideManageClassesModal() {
        this.showManageClasses = false;
    }

    async refreshUsers() {
        await this.initializeData();
    }

    mounted() {
        this.initializeData();
    }
}
</script>


<style lang="scss" scoped>
@import '../scss/styles';

.admin-profile {
    @include size($width: 100%);
    padding: 2rem 4rem;
    background: linear-gradient(to bottom, rgb(32, 39, 55), rgb(21, 138, 151));

    color: $white;
}

.admin {
    display: flex;
    flex-direction: column;
    justify-items: center;

    &__bio-wrapper {
        display: flex;
        flex-direction: row;
    }

    &__bio {    
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
    }

    &__bio-data {   
        color: $white;
        font-size: 1.1rem;
    }

    &__image {
        width: 13rem;
        height: 13rem;
        border-radius: 50%;
        margin-right: .5rem;
    }

    &__name {
        font-size: 2.5rem;
    }

    &__email {
        font-size: 1.2rem;
        padding-bottom: .4rem;
    }

    &__basic-info {
        color: $white;
        font-size: 1rem;
    }

    &__basic-info-title {
        color: rgb(226, 223, 223);
        font-size: .7rem;
        font-style: italic;
    }

    &__actions-title {
        color: $black;
    }
}

.admin-info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1rem 0;

    &__item {
        padding: 0.5rem;
        background-color: #46B84B;
        border-radius: .6rem;
        min-width: 4rem;
        margin-right: .5rem;
    }
}

.actions {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    padding-bottom: 8rem;

    &__button {
        background-color: $theme-background;
        padding: .3rem;
        border: none;
        cursor: pointer;
        border-radius: 0.3rem; 
        color: $white;
        margin-right: .4rem;
    }

    &__button:hover {
        color: rgb(236, 233, 233);
        transition: all .2s ease-in
    }
}


</style>
