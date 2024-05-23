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
                <div class="trainer-info__item" v-for="(info, index) in trainerInfo" :key="index">
                    <!-- improve -->
                    <!-- Get icons for each of these data -->
                    <i class="trainer-info__icon"><i :class="info.icon"></i></i>
                    <div class="trainer-info__wrapper">
                        <p class="trainer__basic-info">{{ info.value }}</p>
                        <p class="trainer__basic-info-title">{{ info.label }}</p>
                    </div>
                </div>                
            </div>

            <UserClasses 
                :userClasses="userClasses"
                role="trainer"
                @addClass="showAddClass"
                @editClass="showEditClass"
                @deleteClass="showDeleteClass"
            />

            <h3 class="trainer__actions-title">Actions</h3>

            <div class="actions">
                <button class="actions__button" @click="showEditProfile">Edit Profile</button>
                <button class="actions__button" @click="showEditTrainerEmailPassword">Reset Email/Password</button>
                <button class="actions__button">Rate Client</button>
                <button class="actions__button">Rate FitFusion</button>
            </div>
        </div>

        <AddClass
            v-if="showAddClassModal" 
            :trainerId="trainerId"
            :className="areaOfConcentration"
            @close="hideAddClass"
            @refreshClasses="refreshClasses"
        />
        <EditClassModal
            v-if="showEditClassModal"
            :classData="selectedClass"
            @close="hideEditClassModal"
            @refreshClasses="refreshClasses"
        />
        <DeleteClassModal
            v-if="showDeleteClassModal"
            :classId="selectedClass.id"
            @close="hideDeleteClassModal"
            @refreshClasses="refreshClasses"
        />
        <EditTrainerModal
            v-if="showEditProfileModal"
            :trainerId="trainerId"
            @close="hideEditProfileModal"
            @refreshUsers="refreshUsers"
        />        
        <ResetTrainerEmailPassword
            v-if="showEditTrainerEmailPasswordModal"
            :trainerId="trainerId"
            @close="hideEditTrainerEmailPasswordModal"
            @refreshUsers="refreshUsers"
        />
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserClasses from '../components/UserClasses.vue';
import AddClass from '../components/AddClass.vue';
import EditClassModal from '../components/EditClassModal.vue';
import DeleteClassModal from '../components/DeleteClassModal.vue';
import EditTrainerModal from '../components/EditTrainerModal.vue';
import ResetTrainerEmailPassword from '../components/ResetTrainerEmailPassword.vue';

@Component({
    components: {
        UserClasses,
        AddClass,
        EditClassModal,
        DeleteClassModal,
        EditTrainerModal,
        ResetTrainerEmailPassword        
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
    private showEditClassModal = false;
    private showDeleteClassModal = false;
    private selectedClass: any = null;

    private showEditProfileModal = false;
    private showEditTrainerEmailPasswordModal = false;

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

    showEditClass(classData: any) {
        this.selectedClass = classData;
        this.showEditClassModal = true;
    }

    showDeleteClass(classData: any) {
        this.selectedClass = classData;
        this.showDeleteClassModal = true;
    }

    hideEditClassModal() {
        this.showEditClassModal = false;
    }

    hideDeleteClassModal() {
        this.showDeleteClassModal = false;
    }

    async refreshClasses() {
        await this.initializeData();
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
                id: classe.id,
                date: this.formatDate(classe.date),
                name: classe.name,
                start: classe.start_time,
                end:classe.end_time,
                instructorName: this.fullname,
                trainerId: this.trainerId
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

    showEditProfile() {
        this.showEditProfileModal = true; 
    }

    showEditTrainerEmailPassword() {
        this.showEditTrainerEmailPasswordModal = true; 
    }

    hideEditProfileModal() {
        this.showEditProfileModal = false; 
    }

    hideEditTrainerEmailPasswordModal() {
        this.showEditTrainerEmailPasswordModal = false; 
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

    get trainerInfo() {
        return [
            { label: 'Gender', value: this.gender, icon: 'fas fa-venus-mars' },
            { label: 'Age', value: this.age, icon: 'fas fa-calendar' },
            { label: 'Weight', value: this.weight, icon: 'fas fa-weight' },
            { label: 'Height', value: this.height, icon: 'fas fa-ruler-vertical' },
            { label: 'Phone', value: this.phoneNumber, icon: 'fas fa-phone' },
            { label: 'Field', value: this.areaOfConcentration, icon: 'fas fa-dumbbell' },
        ];
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

.trainer-profile {
    @include size($width: 100%);
    padding: 2rem 4rem;
    background: linear-gradient(to bottom, rgb(32, 39, 55), rgb(21, 138, 151));

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