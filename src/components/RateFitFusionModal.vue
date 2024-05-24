<template>
    <div class="rate-fitfusion-modal">
        <form 
            class="rate-fitfusion-modal__form"
            @submit.prevent="sendReview"
            @click.stop
        >
            <h4 class="rate-fitfusion-modal__form-title">Let us know what you think of us</h4>

            <textarea 
                class="rate-fitfusion-modal__form-input"
                type="text" 
                v-model="description" 
                placeholder="Write your review" 
                required
            />

            <select 
                class="rate-fitfusion-modal__form-input"
                v-model="rating" 
                required
            >
                <option value="" disabled>Rate us</option>
                <option value="1">1 - ( Extremely Unsatisfied)</option>
                <option value="2">2 - (Unsatisfied)</option>
                <option value="3">3 - (Neutral)</option>
                <option value="4">4 - (Satisfied)</option>
                <option value="5">5 - (Extremely Satisfied)</option>
            </select>

            <button 
                type="submit" 
                class="rate-fitfusion-modal__form-button"
            >
                Send Review
            </button>
            <button 
                class="rate-fitfusion-modal__form-close-button"
                @click="close"
            >
                X
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Review } from 'abstracts/Interfaces';
import { Role } from 'abstracts/Enum';

@Component
export default class RateFitFusionModal extends Vue {
    public name = 'RateFitFusionModal';

    public description = '';
    public rating = 0;

    @Prop({ required: true }) reviewerId: number;
    @Prop({ required: true }) reviewerRole: Role.client | Role.trainer;


    async sendReview() {
        try {
            const newReview: Review = {
                description: this.description,
                rating: this.rating,
                reviewerId: this.reviewerId,
                reviewerType: this.reviewerRole,
                reviewDate: this.getCurrentFormattedDate()
            };

            await axios.post('http://localhost:5555/review', newReview);
        } catch(error) {
            console.error('Error Posting Review:', error);
        }

        this.clearForm();
        this.close();
    }

    getCurrentFormattedDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
        const day = String(date.getDate()).padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    }

    clearForm() {
        this.description = '';
        this.rating = 0;
    }

    close() {
        this.$emit('close');
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.rate-fitfusion-modal {
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

