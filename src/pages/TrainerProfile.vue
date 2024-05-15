<template>
    <div class="trainer-profile">
        <div class="trainer">
            <div class="trainer__bio-wrapper">
                <img
                    src="/assets/images/profile_pic.webp"
                    class="trainer__image"
                    alt="trainer"
                />

                <div class="client__bio">
                    <h3 class="trainer__name">{{ fullname }}</h3>
                    <p class="trainer__email">{{ email }}</p>
                </div>
            </div>

            <div class="trainer-info">
                <div class="trainer-info__item">
                    <!-- improve -->
                    <!-- Get icons for each of these data -->
                    <i class="trainer-info__icon"><i class="fas fa-map-marker-alt"></i></i>
                    <div class="trainer-info__wrapper">
                        <p class="trainer__basic-info">{{ gender }}</p>
                        <p class="trainer__basic-info-title">Gender</p>
                    </div>
                </div>

                <div class="trainer-info__item">
                    <i class="trainer-info__icon"><i class="fas fa-map-marker-alt"></i></i>
                    <div class="trainer-info__wrapper">
                        <p class="trainer__basic-info">{{ age }}</p>
                        <p class="trainer__basic-info-title">Age</p>
                    </div>
                </div>

                <div class="trainer-info__item">
                    <i class="trainer-info__icon"><i class="fas fa-map-marker-alt"></i></i>
                    <div class="trainer-info__wrapper">
                        <p class="trainer__basic-info">{{ weight }}</p>
                        <p class="trainer__basic-info-title">Weight</p>
                    </div>
                </div>

                <div class="trainer-info__item">
                    <i class="trainer-info__icon"><i class="fas fa-map-marker-alt"></i></i>
                    <div class="trainer-info__wrapper">
                        <p class="trainer__basic-info">{{ height }}</p>
                        <p class="trainer__basic-info-title">Height</p>
                    </div>
                </div>

                <div class="trainer-info__item">
                    <i class="trainer-info__icon"><i class="fas fa-map-marker-alt"></i></i>
                    <div class="trainer-info__wrapper">
                        <p class="trainer__basic-info">{{ phoneNumber }}</p>
                        <p class="trainer__basic-info-title">Phone</p>
                    </div>
                </div>

                <div class="trainer-info__item">
                    <i class="trainer-info__icon"><i class="fas fa-map-marker-alt"></i></i>
                    <div class="trainer-info__wrapper">
                        <p class="trainer__basic-info">{{ areaOfConcentration }}</p>
                        <p class="trainer__basic-info-title">Field</p>
                    </div>
                </div>                
            </div>

            <UserClasses 
                :userClasses="userClasses"
                role="trainer"
                @showAddClass="showAddClass"
            />

            <h3 class="trainer__actions-title">Actions</h3>

            <div class="actions">
                <button class="actions__button">Edit Profile</button>
                <button class="actions__button">Rate Client</button>
                <button class="actions__button">Rate FitFusion</button>
            </div>
        </div>

        <AddClass
            v-if="showAddClassModal" 
            :trainerId="trainerId"
            :className="areaOfConcentration"
            @close="hideAddClass"
        />
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserClasses from '../components/UserClasses.vue';
import AddClass from '../components/AddClass.vue';

@Component({
    components: {
        UserClasses,
        AddClass
    }
})
export default class TrainerProfile extends Vue {
    public name = 'TrainerProfile'; 

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

    private showAddClassModal = false;

    @Prop({ required: true }) trainerId: string;

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

    showAddClass() {
        this.showAddClassModal = true;
    }

    hideAddClass() {
        this.showAddClassModal = false;
    }

    // improve
    initiateUser(user: any) {
        this.fullname = this.getFullName(user.firstname, user.lastname);
        this.email = user.email;
        this.planStatus = user.subscription_status;
        this.gender = user.gender;
        this.age = this.calculateAge(user.date_of_birth);
        this.weight = user.weight;
        this.height = user.height;
        this.phoneNumber = user.phone_number;
        this.areaOfConcentration = user.areas_of_concentration;
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
                instructorName: this.fullname,
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
            let response = await axios.get(`http://localhost:5555/users/profile/trainer/${this.trainerId}`);
            return response.data.trainer[0];
        } catch (error) {
            console.error('Error fetching user data:', error);
            return null;
        }
    }

    async getClasses() {
        try {
            let response = await axios.get(`http://localhost:5555/classes/profile/trainer/${this.trainerId}`);
            return response.data.trainerClasses;
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

    mounted() {
        this.initializeData();
    }
}

</script>

<style lang="scss" scoped>
@import '../scss/styles';

.trainer-profile {
    @include size($width: 100%);
    padding: 2rem 4rem;
    // improve
    background: linear-gradient(to bottom, #0c2647, #1b3f72, #25608a, #218d9d, #1ec7b0, #20f2c3);
    // background: linear-gradient(to bottom, rgb(32, 39, 55), rgb(96, 160, 40));

    color: $white;
}

.trainer {
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

.trainer-info {
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