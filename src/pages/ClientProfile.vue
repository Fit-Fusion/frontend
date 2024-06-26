<template>
    <div class="client-profile">
        <div class="client">
            <div class="client__bio-wrapper">
                <!--  improve -->
                <!--  Add functionality to save profile pic in DB -->

                <img 
                    src="/assets/images/profile_pic.webp" 
                    class="client__image" 
                    alt="client" 
                />
            
                <div class="client__bio">
                    <h3 class="client__name">{{ fullname }}</h3>
                    <p class="client__email">{{ email }}</p>
                    <p class="client__subscription-status">{{ planStatus }}</p>
                </div>
            </div>
            <div class="client-info">
                <div class="client-info__item">
                    <!-- improve -->
                    <!-- Get icons for each of these data -->
                    <i class="client-info__icon"><i class="fas fa-map-marker-alt"></i></i>
                    <div class="client-info__wrapper">
                        <p class="client__basic-info">{{ gender }}</p>
                        <p class="client__basic-info-title">Gender</p>
                    </div>
                </div>
                <div class="client-info__item">
                    <i class="client-info__icon"><i class="fas fa-map-marker-alt"></i></i>
                    <div class="client-info__wrapper">
                        <p class="client__basic-info">{{ age }}</p>
                        <p class="client__basic-info-title">Age</p>
                    </div>
                </div>
                <div class="client-info__item">
                    <i class="client-info__icon"><i class="fas fa-map-marker-alt"></i></i>
                    <div class="client-info__wrapper">
                        <p class="client__basic-info">{{ weight }}kg</p>
                        <p class="client__basic-info-title">Weight</p>
                    </div>
                </div>
                <div class="client-info__item">
                    <i class="client-info__icon"><i class="fas fa-map-marker-alt"></i></i>
                    <div class="client-info__wrapper">
                        <p class="client__basic-info">{{ height }}cm</p>
                        <p class="client__basic-info-title">Height</p>
                    </div>
                </div>
                <div class="client-info__item">
                    <i class="client-info__icon"><i class="fas fa-map-marker-alt"></i></i>
                    <div class="client-info__wrapper">
                        <p class="client__basic-info">{{ phoneNumber }}</p>
                        <p class="client__basic-info-title">Phone</p>
                    </div>
                </div>
                <div class="client-info__item">
                    <i class="client-info__icon"><i class="fas fa-map-marker-alt"></i></i>
                    <div class="client-info__wrapper">
                        <p class="client__basic-info">{{ areaOfConcentration }}</p>
                        <p class="client__basic-info-title">Goal</p>
                    </div>
                </div>
            </div>

            <!-- <p class="client__attendance"> Attendance: 65% </p> -->

            <UserClasses 
                :userClasses="userClasses"
                role="client"
            />

            <h3 class="client__actions-title">Actions:</h3>

            <div class="actions">
                <button class="actions__button" @click="showEditProfile">Edit Profile</button>
                <button class="actions__button" @click="showEditClientEmailPassword">Reset Email/Password</button>
                <button class="actions__button" @click="showRateFitFusion">Rate FitFusion</button>
            </div>

            <p class="client__advert">
                Upgrade your gym kit today in our 
                <router-link 
                    class="client__advert-link" 
                    to="/store"
                > 
                    online store
                </router-link>
            </p>
        </div>

        <EditClientModal
            v-if="showEditProfileModal"
            :clientId="clientId"
            @close="hideEditProfileModal"
            @refreshUsers="refreshUsers"
        />
        
        <ResetClientEmailPassword
            v-if="showEditClientEmailPasswordModal"
            :clientId="clientId"
            @close="hideEditClientEmailPasswordModal"
            @refreshUsers="refreshUsers"
        />

        <RateFitFusionModal 
            v-if="showRateFitFusionModal"
            :reviewerId="clientId"
            reviewerRole='client'
            @close="hideRateFitFusionModal"
        />
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserClasses from '../components/UserClasses.vue';
import EditClientModal from '../components/EditClientModal.vue';
import ResetClientEmailPassword from '../components/ResetClientEmailPassword.vue';
import RateFitFusionModal from '../components/RateFitFusionModal.vue';

@Component({
    components: {
        UserClasses,
        EditClientModal,
        ResetClientEmailPassword,
        RateFitFusionModal
    }
})
export default class ClientProfile extends Vue {
    public name = 'ClientProfile';

    public fullname = '';
    public email = '';
    public planStatus = '';
    public gender = '';
    public age = 0;
    public weight = 0;
    public height = 0;
    public phoneNumber = '';
    public areaOfConcentration = '';
    public userClasses = [];

    private showEditProfileModal = false;
    private showEditClientEmailPasswordModal = false;
    private showRateFitFusionModal = false;

    @Prop({ required: true }) clientId: string;

    async initializeData() {
        try {
            const user = await this.getUser();
            this.initiateUser(user);

            const classes = await this.getClasses();
            this.initiateClasses(classes);    
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // improve
    initiateUser(user: any) {
        this.fullname = this.getFullName(user.firstname, user.lastname);
        this.email = user.email;
        this.planStatus = user.subscription_status;
        this.gender = user.gender;
        this.age = user.age;
        this.weight = user.weight;
        this.height = user.height;
        this.phoneNumber = user.phone_number;
        this.areaOfConcentration = user.area_of_concentration;
    }

    private getFullName(firstname: string, lastname: string) {
        return `${firstname.charAt(0).toUpperCase()}${firstname.slice(1)} ${lastname.charAt(0).toUpperCase()}${lastname.slice(1)}`;
    }

    initiateClasses(classes: any) {
        this.userClasses = classes.map((classe: any) => {
            return {
                date: this.formatDate(classe.date),
                name: classe.name,
                start: classe.start_time,
                end:classe.end_time,
                instructorName: classe.trainer_firstname + ' ' + classe.trainer_lastname,
            }
        });
    }

    formatDate(dateString: string|number|Date) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        let month = date.getMonth() + 1; 
        let day = date.getDate();

        month = month < 10 ? 0 + month : month;
        day = day < 10 ? 0 + day : day;

        return `${day}/${month}/${year}`;
    }

    async getUser() {
        try {
            let response = await axios.get(`http://localhost:5555/users/profile/client/${this.clientId}`);
            
            return response.data.client[0];
        } catch (error) {
            console.error('Error fetching user data:', error);
            return null;
        }
    }

    async getClasses() {
        try {
            let response = await axios.get(`http://localhost:5555/classes/profile/client/${this.clientId}`);
            return response.data.clientClasses;
        } catch (error) {
            console.error('Error fetching class data:', error);
            return null;
        }
    }

    calculateAge(dateOfBirth: string): number {
        const dob = new Date(dateOfBirth);
        const today = new Date();
    
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        return age;
    }

    showEditProfile() {
        this.showEditProfileModal = true; 
    }

    showEditClientEmailPassword() {
        this.showEditClientEmailPasswordModal = true; 
    }

    showRateFitFusion() {
        this.showRateFitFusionModal = true; 
    }

    hideEditProfileModal() {
        this.showEditProfileModal = false; 
    }

    hideEditClientEmailPasswordModal() {
        this.showEditClientEmailPasswordModal = false; 
    }

    hideRateFitFusionModal() {
        this.showRateFitFusionModal = false; 
    }

    async refreshUsers() {    
        this.initializeData();
    }
    
    mounted() {
        this.initializeData();
    }
}

</script>

<style lang="scss" scoped>
@import '../scss/styles';

.client-profile {
    @include size($width: 100%);
    padding: 2rem 4rem;
    background: linear-gradient(to bottom, rgb(32, 39, 55), rgb(21, 138, 151));

    color: $white;
}

.client {
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

    &__subscription-status {
        font-size: .8rem;
        background: #46B84B;
        padding: .2rem;
        border-radius: .5rem;
        width: 3rem;
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

    &__advert {
        text-align: center;
        color: $black;
        font-size: 1.5rem;        
    }

    &__advert-link {
        font-style: italic;
        text-decoration: none;
    }
}

.client-info {
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