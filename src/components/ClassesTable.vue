<template>
    <div class="classes-table">
        <h1 class="classes-table__title">Classes Table</h1>
        <table class="classes-table__content">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Trainer Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="classe in classes" :key="classe.id">
                    <td>{{ classe.id }}</td>
                    <td>{{ classe.trainer_id }}</td>
                    <td>{{ classe.name }}</td>
                    <td>{{ classe.description }}</td>
                    <td>{{ classe.date }}</td>
                    <td>{{ classe.start_time }}</td>
                    <td>{{ classe.end_time }}</td>
                    <td class="classes-table__icons">
                        <img
                            src="/assets/icons/edit-icon.svg"
                            @click="showEditClass(classe)"
                            class="classes-table__icon"
                            alt="edit icon"
                        />
                        <img
                            src="/assets/icons/delete-icon.svg"
                            @click="showDeleteClass(classe.id)"
                            class="classes-table__icon"
                            alt="delete icon"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <button 
            class="classes-table__button"
            @click="close"
        >
            Close
        </button>

        <button 
            class="classes-table__button"
            @click="showCreateClass"
        >
            Create New Class
        </button>

        <AdminEditClassModal
            v-if="showEditClassModal"
            :classData="selectedClass"
            @close="hideEditClassModal"
            @refreshClasses="refreshClasses"
        />
        <DeleteClassModal
            v-if="showDeleteClassModal"
            :classId="selectedClass"
            @close="hideDeleteClassModal"
            @refreshClasses="refreshClasses"
        />
        <CreateClassModal
            v-if="showCreateClassModal"
            @close="hideCreateClassModal"
            @refreshClasses="refreshClasses"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AdminEditClassModal from './AdminEditClassModal.vue';
import DeleteClassModal from './DeleteClassModal.vue';
import CreateClassModal from './CreateClassModal.vue';

@Component({
    components: {
        AdminEditClassModal,
        DeleteClassModal,
        CreateClassModal
    }
})
export default class ClassesTable extends Vue {
    public name = 'ClassesTable';

    @Prop({ required: true }) classes: Array<any>;

    private showEditClassModal = false;
    private showDeleteClassModal = false;
    private showCreateClassModal = false;
    private selectedClass: any = null;

    showEditClass(classData: any) {
        this.selectedClass = classData;
        this.showEditClassModal = true;
    }

    hideEditClassModal() {
        this.showEditClassModal = false;
    }

    showDeleteClass(classId: number) {
        this.selectedClass = classId;
        this.showDeleteClassModal = true;
    }

    hideDeleteClassModal() {
        this.showDeleteClassModal = false;
    }

    showCreateClass() {
        this.showCreateClassModal = true;
    }

    hideCreateClassModal() {
        this.showCreateClassModal = false;
    }

    close() {
        this.$emit('close');
    }

    refreshClasses() {
        this.$emit('refreshClasses');
    }
}
</script>


<style lang="scss" scoped>
@import '../scss/styles';

.classes-table {
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
