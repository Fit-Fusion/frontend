<template>
    <section class="directors-section">
        <h1 class="directors-section__title">Directors</h1>
        <ul class="directors">
            <li class="director">
                <img 
                    src="assets/images/director1.webp" 
                    class="director__image" 
                    alt="Alexander Alexandrovich"
                />
                <p class="director__name">Alexander Alexandrovich</p>
                <p class="director__title">Executive Director</p>
            </li>
            <li class="director">
                <img 
                    src="assets/images/director2.webp" 
                    class="director__image" 
                    alt="Kirill Avgustinovich"
                />
                <p class="director__name">Kirill Avgustinovich</p>
                <p class="director__title">Managing Director</p>
            </li>
            <li class="director">
                <img 
                    src="assets/images/director3.webp" 
                    class="director__image" 
                    alt="katya Maximovich"
                />
                <p class="director__name">katya Maximovich</p>
                <p class="director__title">Finance Director</p>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component 
export default class DirectorsSection extends Vue {
    public name = 'DirectorsSection';
}

</script>

<style lang="scss" scoped>
@import '../../scss/styles';

.directors-section {
    background: rgb(46, 54, 71);
    padding-bottom: 3rem;

    &__title {
        text-align: center;
        color: $white;
        padding: 2rem;
        font-size: 2.5rem;

    }
}

.directors {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style-type: none;
}

.director {
    text-align: center;

    &__image {
        width: 25rem;
        height: 25rem;
        margin: 1rem;
        border: .2rem solid $theme-color;
    }

    &__name {   
        color: $white;
        font-size: 1.5rem;
    }

    &__title {
        color: $theme-color;
    }
}
</style>