<template>
    <section class="classes-section">
        <h2 class="classes-section__title">OUR CLASSES</h2>
        <ul class="classes">
            <li 
                v-for="(description, className) in classDescriptions"
                :key="className"
                class=" class"
            >
                <button 
                    @click="subscribeToClass(className)"
                    class="class__subscribe-button"
                >
                    Subscribe
                </button>
                <img 
                    :src="`${getImageUrl(className)}`" 
                    class="class__image" 
                    alt="deadlift"
                />
                <h4 class="class__title">{{ className }}</h4>
                <p class="class__description">{{ description }}</p> 
            </li>
        </ul>
    </section> 
</template>

<script lang="ts">
import axios from 'axios';
import { Vue, Component} from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import CLASS_DESCRIPTION from '../abstracts/ClassDescription';

@Component
export default class Classes extends Vue {
    public name = 'Classes';  

    private classesImageUrl: { [key: string]: string } = {
        'Boxing': 'assets/images/boxing.webp',
        'Cardio': 'assets/images/cardio.webp',
        'Spa': 'assets/images/spa.webp',
        'Weight Lifting': 'assets/images/deadlift.webp',
        'Strength Training': 'assets/images/strength-training.webp'
    };

    @Getter('isLoggedIn') isLoggedIn: boolean;
    @Getter('loggedInUserId') loggedInUserId: string;

    get classDescriptions() {
        return CLASS_DESCRIPTION;
    }
    
    getImageUrl(className: number) {
        return this.classesImageUrl[className] || 'assets/images/bodybuilder.webp';
    }

    // Improve
    subscribeToClass(className: string) {
        if (this.isLoggedIn) {
            this.$router.push({ 
                name: 'ClientProfile',
                params: { 
                    clientId: this.loggedInUserId.toString()
                }
            });
        } else {
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.classes-section {
    background: $black;
    color: $white;

    &__title {
        text-align: center;
        padding: 2rem;
    }
}

.classes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style: none;
    padding-bottom: 2rem;
}

.class {
    width: 20rem;
    height: 20rem;
    margin: 1rem;

    &__image {
        width: 100%;
        height: 75%;
        border: .1rem solid $theme-color;
        border-radius: 1rem;
        margin-bottom: .5rem;
    }

    &__title {
        display: inline-block;
        border-bottom: .1rem solid $theme-color;
        margin-bottom: .3rem;
    }

    &__description {
        color: rgb(142, 140, 140);
        font-size: 1rem;
    }

    &__subscribe-button {
        position: relative;
        top: 12%;
        left: 72%;
        background-color: $theme-color;
        color: $black;
        padding: 0.3rem 0.6rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        z-index: 1; 
    }

    &__subscribe-button:hover {
        background-color: $theme-color-hover;  
        transition: all .2s ease-in;
    }
}

</style>