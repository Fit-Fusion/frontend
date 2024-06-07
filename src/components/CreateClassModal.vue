<template>
    <div class="create-class" @click="close">
        <form 
            class="create-class__form"
            @submit.prevent="createClass"
            @click.stop
        >
            <h4 class="create-class__form-title">Fill and submit the form below</h4>
            
            <label class="create-class__form-label">Trainer ID:</label>
            <input 
                class="create-class__form-input"
                type="number" 
                v-model="trainerId" 
                required
            />
            <label class="create-class__form-label">Name:</label>
            <input 
                class="create-class__form-input"
                type="text" 
                v-model="className" 
                required
            />
            <label class="create-class__form-label">Date:</label>
            <input 
                class="create-class__form-input"
                type="date" 
                v-model="classDate"  
                required 
            />
            <label class="create-class__form-label">Start Time:</label>
            <input 
                class="create-class__form-input"
                type="time" 
                v-model="classStartTime" 
                placeholder="Start Time" 
                required 
            />
            <label class="create-class__form-label">End Time:</label>
            <input 
                class="create-class__form-input"
                type="time" 
                v-model="classEndTime" 
                placeholder="End Time" 
                required 
            />
            <button 
                type="submit" 
                class="create-class__form-button"
            >
                Create Class
            </button>
            <button 
                class="create-class__form-close-button"
                @click="close"
            >
                X
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import CLASS_DESCRIPTION from '../abstracts/ClassDescription';

@Component
export default class CreateClassModal extends Vue {
    public name = 'CreateClassModal';
    
    public trainerId = '';
    public className = '';
    public classDate = '';
    public classStartTime = '';
    public classEndTime = '';
    public classDescription = '';

    async createClass() {
        try{
            const newClass = this.createNewClass();
            await axios.post('http://localhost:5555/class', newClass);
            
            this.$emit('refreshClasses');
        } catch(error) {
            console.error('Error adding class:', error);
        }

        this.clearForm();
        this.close();
    }

    clearForm() {
        this.trainerId = '';
        this.className = '';
        this.classDate = '';
        this.classStartTime = '';
        this.classEndTime = '';
        this.classDescription = '';
    }

    createNewClass() {
        return {
            trainer_id: this.trainerId,
            name: this.className,
            description: this.getClassDescription(),
            date: this.classDate,
            start_time: this.classStartTime,
            end_time: this.classEndTime
        }
    }

    getClassDescription() {
        return CLASS_DESCRIPTION[this.className];
    }
    close() {
        this.$emit('close');
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.create-class {
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
        border-radius: 1rem 0 1rem 0;
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

        &-input:focus {
            border: .2rem solid $theme-color;
        }

        &-close-button {
            position: absolute;
            top: .2rem;
            right: .2rem;
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 1.5rem;
            color: $red;
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
    }    
}
</style>
