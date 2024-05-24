<template>
    <div 
        class="manage-reviews-modal"
        @click="close"
    >
        <div 
            class="manage-reviews-modal__content"
            @click.stop
        >
            <h4 class="manage-reviews-modal__title">Manage Reviews</h4>
            <div class="manage-reviews-modal__table-wrapper">
                <table class="manage-reviews-modal__table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Reviewer ID</th>
                            <th>Reviewer Type</th>
                            <th>Review Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="review in reviews" :key="review.id">
                            <td>{{ review.id }}</td>
                            <td>{{ review.description }}</td>
                            <td>{{ review.rating }}</td>
                            <td>{{ review.reviewer_id }}</td>
                            <td>{{ review.reviewer_type }}</td>
                            <td>{{ review.review_date }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button 
                class="manage-reviews-modal__close-button"
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
export default class ManageReviewsModal extends Vue {
    public name = 'ManageReviewsModal';

    public reviews: Array<any> = [];

    async initializeData() {
        try {
            const response = await axios.get('http://localhost:5555/reviews');

            this.reviews = response.data.reviews;
        } catch (error) {
            console.error('Error fetching reviews:', error);
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

.manage-reviews-modal {
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
        border-radius: .5rem;
        width: 80%;
        height: 80%;
        padding: 1rem;
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
        color: $white;
        min-width: 100rem;

        th, td {
            text-align: center;
            border: 1px solid $white;
            padding: 0.5rem;
            white-space: nowrap;
        }

        th {
            background-color: $grey;
            color: $black;
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
        color: $black;
    }

    &__close-button:hover {
        background-color: $theme-color-hover;
        transition: all .2s ease-in;
    }
}
</style>
