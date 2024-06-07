<template>
    <div class="user-classes">
        <h3 class="user-classes__title">Classes</h3>
        <div class="user-classes__table-container">
            <table class="user-classes__table">
                <thead>
                    <tr>
                        <th class="user-classes__table-header">Date</th>
                        <th class="user-classes__table-header">Time</th>
                        <template v-if="role === 'client'">
                            <th class="user-classes__table-header">Instructor</th>
                            <th class="user-classes__table-header">Status</th>
                        </template>
                        <template v-else>
                            <th class="user-classes__table-header">Actions</th>
                        </template>
                    </tr>
                </thead>
                <tbody>
                    <UserClass 
                        v-for="userClass in userClasses" 
                        :key="userClass.id"
                        :userClass="userClass"
                        :role="role"
                        @editClass="handleEditClass"
                        @deleteClass="handleDeleteClass"
                    />
                </tbody>
            </table>
        </div>

        <template v-if="role === 'trainer'">
            <button 
                class="user-classes__button"
                @click="handleAddClass"
            >
                Add Class
            </button>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserClass from './UserClass.vue';


@Component({
    components: {
        UserClass
    }
})
export default class UserClasses extends Vue {
    public name = 'UserClasses';

    @Prop({ required: true }) userClasses: [];
    @Prop({ required: true }) role: string;

    handleEditClass(userClass: any) {
        this.$emit('editClass', userClass);
    }

    handleDeleteClass(userClass: any) {
        this.$emit('deleteClass', userClass);
    }

    handleAddClass() {
        this.$emit('addClass');
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.user-classes {
    margin: 2rem 0;

    &__title {
        text-align: center;
        font-size: 2rem;
    }

    &__table-container {
        overflow-x: auto;
        margin-top: 1rem;
    }

    &__table {
        width: 100%;
        border-collapse: collapse;
        color: $white;
        table-layout: fixed; /* Ensures even distribution of columns */
    }

    th, td {
        padding: 1rem;
        border: 1px solid $white;
        text-align: left;
    }

    th {
        background-color: rgba(68, 91, 112, 0.1);
    }

    td {
        background-color: rgba(255, 255, 255, 0.05);
    }

    &__table-header {
        width: 25%; /* Ensures each column takes up an equal width */
    }

    &__button {
        display: block;
        margin: 1rem auto;
        padding: .4rem 1rem;
        background-color: $theme-background;
        color: $white;
        border: none;
        border-radius: .4rem;
        font-size: 1rem;
        cursor: pointer;
    }
}
</style>
