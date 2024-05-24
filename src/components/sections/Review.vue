<template>
    <section class="review-section">
        <h3 class="review-section__header">What our customers think of us</h3>
        <ul class="reviews">
            <li 
                v-for="review in reviews" 
                :key="review.id" 
                class="review"
            >
                <p class="review__description">
                   {{ review.description}}
                </p>
                
                <div class="reviewer">
                    <img
                        src="assets/images/roberto.webp"
                        class="reviewer__img"
                        alt="reviewer image"
                    />
                    <p class="reviewer__name">
                       {{ getReviewerName(review.reviewer_id) }} ({{ review.reviewer_type}}) <br />
                        <span class="rating">
                            <img 
                                src="assets/icons/star.svg" 
                                class="rating__star" 
                                alt="star"
                            />
                            <img 
                                src="assets/icons/star.svg" 
                                class="rating__star" 
                                alt="star"
                            />
                            <img 
                                src="assets/icons/star.svg" 
                                class="rating__star" 
                                alt="star"
                            />
                            <img 
                                src="assets/icons/star.svg" 
                                class="rating__star" 
                                alt="star"
                            />
                            <img 
                                src="assets/icons/star.svg" 
                                class="rating__star" 
                                alt="star"
                            />
                        </span>
                    </p>
                    
                </div>
            </li>   
        </ul>
    </section>
</template>

<script lang="ts">
import axios from 'axios';
import { Vue, Component, Prop} from 'vue-property-decorator';
import { DbUser, Review } from '../../abstracts/Interfaces.js';

@Component
export default class ReviewSection extends Vue {
    public name = 'ReviewSection'; 
    
    private users: DbUser[] = [];

    @Prop() public reviews!: Review[];

    async fetchUserData(reviewerId: number) {
        try {
            const response = await axios.get(`http://localhost:5555/users/${reviewerId}`);

            return response.data.user[0]; 
        } catch (error) {
            console.error('Error fetching user data:', error);
            return {};
        }
    }

    getReviewerName(reviewerId: number) {
        const user = this.users.find(user => user.id === reviewerId) as DbUser;

        return user.firstname + ' ' + user.lastname;
    }

    async getUsers() {
        try {
            const response = await axios.get('http://localhost:5555/users');
            return response.data.users;
        } catch (error) {
            console.error('Error fetching users:', error);
            return [];
        }
    }

    getUserImageUrl(reviewerId: number) {
        // :src="getUserImageUrl(review.reviewer_id)"
    }

    async mounted() {
        this.users = await this.getUsers();
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/styles';

.review-section {
    background-size: cover;
    padding-bottom: 1rem;
    margin-bottom: 3.5rem;
    height: auto;
    margin-top: 4rem;

    &__header {
        text-align: center;
        color: $white;
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
}

.reviews {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style-type: none;
}

.review {
    background: rgb(16, 16, 16);
    border-radius: 2rem  0 2rem 0;
    text-align: center;
    width: 25rem;
    margin: 1rem;
    

    &__description {   
        color: rgb(149, 147, 147);
        font-size: 1rem;
        padding: 1rem 0 1rem 0;
        width: 70%;
        font-style: italic;
        margin: 0 auto;
    }
}

.reviewer {
    @include flex($align-items: center);
    
    &__name {
        @include text-format($weight: 600, $size: 1.2rem);
    }
    
    &__img {
        display: block;
        width: 4rem;
        height: 100%;
        margin: 1rem;
        border: .2rem solid $theme-color;
        border-radius: 50%;
    }
}

.rating {
    display: flex;

    &__star {
        width: 1rem;
        height: 1rem;
        margin-top: .1rem;
    }
}

</style>