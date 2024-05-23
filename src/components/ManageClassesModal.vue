<template>
    <div class="manage-classes-modal">
        <div 
            class="manage-classes-modal__content"
            @click.stop
        >
            <h4 class="manage-classes-modal__title">Manage Classes</h4>
            <div class="manage-classes-modal__table-wrapper">
                <table class="manage-classes-modal__table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Trainer Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Start</th>
                            <th>End</th>
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
                        </tr>
                    </tbody>
                </table>
            </div>
            <button 
                class="manage-classes-modal__close-button"
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
export default class ManageClassesModal extends Vue {
    public name = 'ManageClassesModal';

    public classes: Array<any> = [];

    async initializeData() {
        try {
            const response = await axios.get('http://localhost:5555/classes');
            this.classes = response.data.classes;
        } catch (error) {
            console.error('Error fetching classes:', error);
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

.manage-classes-modal {
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
        width: 90%;
        max-width: 50rem;
        height: 90%;
        padding: 2rem;
        margin: 0 auto;
        overflow: hidden;
    }

    &__title {
        padding-bottom: 1rem;
        text-align: center;
        color: $white;
    }

    &__table-wrapper {
        flex-grow: 1;
        overflow: auto;
    }

    &__table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 1rem;
        color: $white;
        table-layout: fixed;

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
