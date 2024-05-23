<template>
    <div class="delete-class-modal" @click="close">
        <div class="delete-class-modal__content">
            <p>Are you sure you want to delete this class?</p>
            <div class="delete-class-modal__buttons">
                <button class="delete-class-modal__button delete-class-modal__button-cancel" @click="close">Cancel</button>
                <button class="delete-class-modal__button delete-class-modal__button-confirm" @click="deleteClass">Delete</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class DeleteClassModal extends Vue {
    @Prop({ required: true }) classId: string;

    async deleteClass() {
        try {
            await axios.delete(`http://localhost:5555/classes/${this.classId}`);
            this.$emit('refreshClasses');
        } catch(error) {
            console.error('Error Deleting class:', error);
        }

        this.close();
    }

    close() {
        this.$emit('close');
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.delete-class-modal {
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
        background-color: $black;
        padding: 2rem;
        border-radius: 1rem;
        text-align: center;

        p {
            margin-bottom: 1rem;
            color: $white;
        }
    }

    &__buttons {
        display: flex;
        justify-content: center;
        color: $black;
    }

    &__button {
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        width: 6rem;
        border: none;
        cursor: pointer;
        border-radius: 0.3rem;
        font-weight: bold;
    }

    &__button-cancel {
        background-color: $theme-color;        
    }

    &__button-confirm {
        background-color: $red;
    }
}
</style>
