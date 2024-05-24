<template>
    <div class="mission-vision-values">
        <div class="mission-vision-values__item">
            <h2 class="mission-vision-values__header">Our Mission</h2>
            <p class="mission-vision-values__content">
                Empowering individuals of all backgrounds and fitness levels to achieve their unique health and wellness goals through a supportive and motivating environment.
            </p>
        </div>
        <div class="mission-vision-values__item">
            <h2 class="mission-vision-values__header">Our Values</h2>
            <p class="mission-vision-values__content">
                <strong class="mission-vision-values__strong">Empowerment:</strong> <em>We believe in providing the tools and knowledge individuals need to take charge of their fitness journey.</em><br>
                <br />
                <strong class="mission-vision-values__strong">Inclusivity:</strong> <em>Our gym is a welcoming space for everyone, regardless of experience or ability.</em><br>
                <br />
                <strong class="mission-vision-values__strong">Support:</strong> <em>We foster a community that motivates and encourages each other to reach their full potential.</em><br>
                <br />
                <strong class="mission-vision-values__strong">Results:</strong> <em>We are dedicated to helping you achieve your fitness goals in a safe and sustainable way.</em>
            </p>
        </div>
        <div class="mission-vision-values__item">
            <h2 class="mission-vision-values__header">Our Vision</h2>
            <p class="mission-vision-values__content">
                To become a leading community hub for fitness, fostering a culture of inclusivity, self-improvement, and overall well-being.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MissionVisionValues extends Vue {
    public name = 'MissionVisionValues';
}
</script>

<style lang="scss" scoped>

@import '../scss/styles';

.mission-vision-values {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 7rem;
    background: rgb(46, 54, 71);
    color: white;
    
    &__item {
        text-align: center;
        flex: 1;
        margin: 1rem;
    }
   
    &__header {
        font-weight: bold;
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    &__content {
        font-style: italic;
        text-align: left;
    }

    &__strong {
        font-style: normal;
        color: $theme-color;
    }
}
</style>
