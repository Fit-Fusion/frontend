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

            <h3 class="admin__actions-title">Actions</h3>

            <div class="actions">
                <button class="actions__button" @click="showEditProfile">Edit Profile</button>
                <button class="actions__button" @click="toggleTable('users')">Manage Users</button>
                <button class="actions__button" @click="toggleTable('classes')">Manage Classes</button>
                <button class="actions__button" @click="toggleTable('reviews')">Manage Reviews</button>
                <button class="actions__button" @click="toggleTable('messages')">View Messages</button>
            </div>
        </div>

        <EditAdminModal
            v-if="showEditProfileModal"
            :adminId="adminId"
            @close="hideEditProfileModal"
            @refreshUsers="refreshUsers"
        />  
        <UsersTable
            v-if="showUsersTable"
            :users="users"
            @close="hideUsersTable"
            @refreshUsers="initializeUsers"
        /> 
        <ClassesTable
            v-if="showClassesTable"
            :classes="classes"
            @close="hideClassesTable"
            @refreshClasses="initializeClasses"
        /> 
        <ReviewsTable
            v-if="showReviewsTable"
            :reviews="reviews"
            @close="hideReviewsTable"
            @refreshReviews="initializeReviews"
        />
        <MessagesTable
            v-if="showMessagesTable"
            :messages="messages"
            @close="hideMessagesTable"
            @refreshMessages="initializeMessages"
        />
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue, Prop } from 'vue-property-decorator';
import EditAdminModal from '../components/EditAdminModal.vue';
import ClassesTable from '../components/ClassesTable.vue';
import ReviewsTable from '../components/ReviewsTable.vue';
import UsersTable from '../components/UsersTable.vue';
import MessagesTable from '../components/MessagesTable.vue';

@Component({
    components: {
        EditAdminModal,
        UsersTable,
        ClassesTable,
        ReviewsTable,
        MessagesTable
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
    private showUsersTable = false;
    private showClassesTable = false;
    private showReviewsTable = false;
    private showMessagesTable = false;

    private classes: any[] = [];
    private users: any[] = [];
    private reviews: any[] = [];
    private messages: any[] = [];

    @Prop({ required: true }) adminId: string;

    async initializeData() { 
        try {
            const admin = await this.getAdmin();
            this.initiateAdmin(admin);

            await this.initializeClasses();
            await this.initializeUsers();
            await this.initializeReviews();
            await this.initializeMessages();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async initializeClasses() {
        try {
            const response = await axios.get('http://localhost:5555/classes');
            const classes = response.data.classes;

            this.classes = classes.map((classe: any) => {
                return {
                    ...classe,
                    date: this.formatDate(classe.date)
                };
            });
        } catch (error) {
            console.error('Error fetching classes:', error);
        }
    }

    formatDate(dateString: string): string {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    async initializeUsers() {
        try {
            const response = await axios.get('http://localhost:5555/users');
            this.users = response.data.users;
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    async initializeReviews() {
        try {
            const response = await axios.get('http://localhost:5555/reviews');
            this.reviews = response.data.reviews;
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    }

    async initializeMessages() {
        try {
            const response = await axios.get('http://localhost:5555/messages');
            this.messages = response.data.messages;
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    }
    
    initiateAdmin(user: any) {
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

    toggleTable(table: string) {
        this.showUsersTable = table === 'users' ? !this.showUsersTable : false;
        this.showClassesTable = table === 'classes' ? !this.showClassesTable : false;
        this.showReviewsTable = table === 'reviews' ? !this.showReviewsTable : false;
        this.showMessagesTable = table === 'messages' ? !this.showMessagesTable : false;
    }

    hideUsersTable() {
        this.showUsersTable = false;
    }   

    hideClassesTable() {
        this.showClassesTable = false;
    }

    hideReviewsTable() {
        this.showReviewsTable = false;
    }

    hideMessagesTable() {
        this.showMessagesTable = false; 
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
    margin-bottom: 2rem;

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
    margin-bottom: 6rem;

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
