<template>
    <div class="manage-users-modal">
        <div 
            class="manage-users-modal__content"
            @click.stop
        >
            <h4 class="manage-users-modal__title">Manage Users</h4>
            <table class="manage-users-modal__table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.firstname }}</td>
                        <td>{{ user.lastname }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone_number }}</td>
                    </tr>
                </tbody>
            </table>
            <button 
                class="manage-users-modal__close-button"
                @click="close"
            >
                Close
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ManageUsersModal extends Vue {
    public name = 'ManageUsersModal';

    public users: Array<any> = [];

    async initializeData() {
        try {
            const response = await axios.get('http://localhost:5555/users');
            this.users = response.data.users;
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    close() {
        this.$emit('close');
    }

    mounted() {
        this.initializeData();
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.manage-users-modal {
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

    &__content {
        position: relative;
        display: flex;
        flex-direction: column;
        background: $black;
        border-radius: 1rem;
        width: 50rem;
        padding: 2rem;
        margin: 0 auto;
    }

    &__title {
        padding-bottom: 1rem;
        text-align: center;
        color: $white;
    }

    &__table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 1rem;
        color: $white;

        th, td {
            padding: 0.75rem;
            text-align: left;
            border: 1px solid $white;
        }

        th {
            background-color: $theme-color;
        }
    }

    &__close-button {
        background-color: $theme-color;
        font-weight: 600;
        width: 10rem;
        margin: 0 auto;
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
        border-radius: 0.3rem;
        color: $white;
    }

    &__close-button:hover {
        background-color: $theme-color-hover;
        transition: all .2s ease-in;
    }
}
</style>
