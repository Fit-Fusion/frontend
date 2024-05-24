<template>
    <section class="founder">
        <div class="founder-quote">
            <p class="founder-quote__text">
                "Having been active in sports all my life, 
                I clearly understand that it makes us stronger,
                fitter and wiser in every sense. 
                I am sure that in FitFusion you will achieve a great feeling 
                both physically and emotionally. 
                And we will do everything to ensure that you achieve 
                your intended goal as comfortably, safely and quickly as possible."
            </p>
            <div class="founder-quote__author"> 
                <p class="founder-quote__name"> 
                    <i class="founder-quote__hypen">--</i> 
                        Alexander Gurchanov 
                    <i class="founder-quote__hypen">--</i>
                </p>
                <p class="founder-quote__title">Founder FitFusion</p>
            </div>
        </div>
        
        <img 
            src="assets/images/founder.webp" 
            class="founder__img" 
            alt="founder image"
        />
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component 
export default class Founder extends Vue {
    public name = 'Founder';
}

</script>

<style lang="scss" scoped>
@import '../../scss/styles';

.founder {
    background: $theme-background;
    display: flex;
    align-items: center;
    padding: 2rem 0;

    &__img {
        width: 30%;
        margin-right: 5rem;
        border-radius: 50%;
        border: .2rem solid $theme-color;
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