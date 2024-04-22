<template>
    <div>
        <Founder />
        <Directors />
        <Trainers />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Founder from '../components/sections/Founder.vue';
import Directors from '../components/sections/Directors.vue';
import Trainers from '../components/sections/Trainers.vue';

@Component({
    components: {
        Founder,
        Directors,
        Trainers
    }
})
export default class About extends Vue {
    public name = 'About';
}

</script>

<style lang="scss" scoped>
@import '../scss/styles';

.founder {
    background: $theme-background;
    display: flex;
    align-items: center;

    &__img {
        width: 30%;
        margin-right: 5rem;
        border-radius: 50%;
    }
}

.founder-quote {
    flex-direction: column;
    width: 60%;
    margin: 5rem;
    font-size: 1.2rem;
    
    &__text {
        font-style: italic;
        font-weight: 600;
        color: rgb(197, 194, 194); 
        margin-bottom: 1rem;   
    }
    
    &__hypen {
        color: $theme-color;
    }

    &__author {
        text-align: right;
        color: $white;
    }

    &__title {
        color: $theme-color;
        margin-right: 1.5rem;
    }
}

</style>