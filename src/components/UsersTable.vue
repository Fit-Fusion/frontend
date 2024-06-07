<template>
    <div class="users-table">
            <h1 class="users-table__title">Users Table</h1>
            <table class="users-table__content">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Password</th>
                        <th>Email</th>  
                        <th>Phone Number</th>
                        <th>Area of Concentration</th>
                        <th>Weight</th>
                        <th>Height</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Plan ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.firstname }}</td>
                        <td>{{ user.lastname }}</td>
                        <td>{{ user.password }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone_number }}</td>
                        <td>{{ user.area_of_concentration }}</td>
                        <td>{{ user.weight }}</td>
                        <td>{{ user.height }}</td>
                        <td>{{ user.age }}</td>
                        <td>{{ user.gender }}</td>
                        <td>{{ user.role }}</td>
                        <td>{{ user.plan_id }}</td>
                        <td class="users-table__icons">
                            <img
                                src="/assets/icons/edit-icon.svg"
                                @click="showEditUser(user)"
                                class="users-table__icon"
                                alt="edit icon"
                            />
                            <img
                                src="/assets/icons/delete-icon.svg"
                                @click="showDeleteUser(user.id)"
                                class="users-table__icon"
                                alt="delete icon"
                            />
                    </td>
                    </tr>
                </tbody>
            </table>
            <button 
                class="users-table__button"
                @click="close"
            >
                Close
            </button>

            <button 
                class="users-table__button"
                @click="showCreateUser"
            >
                Create New User
            </button>

        <AdminEditUserModal
            v-if="showEditUserModal"
            :userData="selectedUser"
            @close="hideEditUserModal"
            @refreshUsers="refreshUsers"
        />
        <DeleteUserModal
            v-if="showDeleteUserModal"
            :userId="selectedUser"
            @close="hideDeleteUserModal"
            @refreshUsers="refreshUsers"
        />
        <CreateUserModal
            v-if="showCreateUserModal"
            @close="hideCreateUserModal"
            @refreshUsers="refreshUsers"
        />    
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AdminEditUserModal from './AdminEditUserModal.vue';
import DeleteUserModal from './DeleteUserModal.vue';
import CreateUserModal from './CreateUserModal.vue';    

@Component({
    components: {
        AdminEditUserModal,
        DeleteUserModal,
        CreateUserModal
    }
})
export default class UsersTable extends Vue {
    public name = 'UsersTable';

    @Prop({ required: true }) users: Array<any>;

    private showEditUserModal = false;
    private showDeleteUserModal = false;
    private showCreateUserModal = false;
    private selectedUser: any = null;

    showEditUser(userData: any) {
        this.selectedUser = userData;
        this.showEditUserModal = true;
    }

    hideEditUserModal() {
        this.showEditUserModal = false;
    }

    showDeleteUser(userId: number) {
        this.selectedUser = userId;
        this.showDeleteUserModal = true;
    }

    hideDeleteUserModal() {
        this.showDeleteUserModal = false;
    }

    showCreateUser() {
        this.showCreateUserModal = true;
    }

    hideCreateUserModal() { 
        this.showCreateUserModal = false;
    }

    close() {
        this.$emit('close');
    }

    refreshUsers() {
        this.$emit('refreshUsers');
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.users-table {
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
    max-height: 30rem;
    background-color: $white;
    overflow: scroll;

    &__title {
        padding-bottom: 1rem;
        text-align: center;
        color: $black;
    }

    &__content {
        width: 100%;
        border-collapse: collapse;
        color: $black;

        th, td {
            text-align: center;
            border: 1px solid $black;
            padding: 0.5rem;
            white-space: nowrap;
        }

        th {
            background-color: $black;
            color: $white;
        }
    }

    &__button {
        background-color: $black;
        font-weight: 600;
        width: 10rem;
        margin: 1rem auto;
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
        border-radius: 0.3rem;
        color: $white;
    }

    &__icon {
        width: 1rem;
        height: 1rem;
        cursor: pointer;
    }

    &__icons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>
