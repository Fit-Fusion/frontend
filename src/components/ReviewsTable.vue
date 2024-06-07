<template>
    <div class="reviews-table">
        <h1 class="reviews-table__title">Reviews Table</h1>
        <table class="reviews-table__content">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th>Reviewer ID</th>
                    <th>Reviewer Type</th>
                    <th>Review Date</th>
                    <th>Action</th>
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
                    <td class="reviews-table__icons">
                        <img
                            src="/assets/icons/delete-icon.svg"
                            @click="showDeleteReview(review.id)"
                            class="reviews-table__icon"
                            alt="delete icon"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <button 
            class="reviews-table__close-button"
            @click="close"
        >
            Close
        </button>

        <DeleteReviewModal 
            v-if="showDeleteReviewModal"
            :reviewId="selectedReview"
            @close="hideDeleteReviewModal"
            @refreshReviews="refreshReviews"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import DeleteReviewModal from './DeleteReviewModal.vue';

@Component({
    components: {
        DeleteReviewModal
    }
})
export default class ReviewsTable extends Vue {
    public name = 'ReviewsTable';

    @Prop({ required: true })reviews: Array<any>;

    private showDeleteReviewModal = false;
    private selectedReview: any = null;


    showDeleteReview(reviewId: number) {
        this.selectedReview = reviewId;
        this.showDeleteReviewModal = true;
    }

    hideDeleteReviewModal() {
        this.showDeleteReviewModal = false;
    }

    close() {
        this.$emit('close');
    }

    refreshReviews() {
        this.$emit('refreshReviews');
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.reviews-table {
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

    &__close-button {
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
