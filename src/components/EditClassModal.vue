<template>
    <div class="edit-class-modal" @click="close">
        <form 
            class="edit-class-modal__form"
            @submit.prevent="saveEdit"
            @click.stop
        >
            <h4 class="edit-class-modal__form-title">Update Selected Class</h4>

            <label class="edit-class-modal__form-label">Name:</label>
            <input 
                class="edit-class-modal__form-input"
                type="text" 
                v-model="className" 
                readonly
            />
        
            <label class="edit-class-modal__form-label">Date:</label>
            <input 
                class="edit-class-modal__form-input"
                type="date" 
                v-model="classDate" 
                placeholder="Date" 
                required 
            />
            <label class="edit-class-modal__form-label">Start Time:</label>
            <input 
                class="edit-class-modal__form-input"
                type="time" 
                v-model="classStartTime" 
                placeholder="Start Time" 
                required 
            />
            <label class="edit-class-modal__form-label">End Time:</label>
            <input 
                class="edit-class-modal__form-input"
                type="time" 
                v-model="classEndTime" 
                placeholder="End Time" 
                required 
            />
            <button 
                type="submit" 
                class="edit-class-modal__form-button"
            >
                Save Changes
            </button>
            <button 
                class="edit-class-modal__form-close-button"
                @click="close"
            >
                X
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue, Prop } from 'vue-property-decorator';
import CLASS_DESCRIPTION from '../abstracts/ClassDescription';

@Component
export default class EditClassModal extends Vue {
    @Prop({ required: true }) classData: any;

    public className = '';
    public classDate = '';
    public classStartTime = '';
    public classEndTime = '';

    async saveEdit() {
        try {
            const editedClass = {
                id: this.classData.id,
                name: this.className,
                date: this.classDate,
                description: this.getClassDescription(),
                start_time: this.classStartTime,
                end_time: this.classEndTime,
                trainer_id: this.classData.trainerId
            };

            await axios.put(`http://localhost:5555/classes/${editedClass.id}`, editedClass);
            this.$emit('refreshClasses');
        } catch(error) {
            console.error('Error Updating class:', error);
        }

        this.clearForm();
        this.close();
    }

    getClassDescription() {
        return CLASS_DESCRIPTION[this.className];
    }

    clearForm() {
        this.className = '';
        this.classDate = '';
        this.classStartTime = '';
        this.classEndTime = '';
    }

    close() {
        this.$emit('close');
    }

    initializeFormData() {
        this.className = this.classData.name;
        this.classDate = this.formatDate(this.classData.date);
        this.classStartTime = this.classData.start;
        this.classEndTime = this.classData.end;
    }

    formatDate(dateString: string): string {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    created() {
        this.initializeFormData();
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.edit-class-modal {
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

    &__form {
        position: relative;
        display: flex;
        flex-direction: column;
        background: $black;
        border-radius: 1rem;
        width: 25rem;
        padding: 2rem;
        margin: 0 auto;

        &-title {
            padding-bottom: 1rem;
            text-align: center;
        }

        &-input {
            margin-bottom: 1rem;
            border-radius: .4rem;
            padding: .4rem;
            outline: none;
        }

        &-button {
            background-color: $theme-color;
            font-weight: 600;
            width: 10rem;
            margin: 0 auto;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            padding: 0.5rem 1rem;
            border: none;
            cursor: pointer;
            border-radius: 0.3rem;
        }

        &-button:hover {
            background-color: $theme-color-hover;
            transition: all .2s ease-in
        }

        &-close-button {
            position: absolute;
            top: .5rem;
            right: .5rem;
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 1.5rem;
            color: $red;
        }
    }    
}
</style>
