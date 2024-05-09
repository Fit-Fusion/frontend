<template>
    <section class="services">
        <div 
            v-for="(service, index) in areasOfConcentration"
            class="service"
            :key="service.id"
            :style="{ 
                'background': `
                    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                    url(${getImageUrl(index)})`,
                'background-size': 'cover'
            }"
        >
            <h3 class="service__title">{{ service.title }} </h3>
            <p class="service__description"> {{ service.description }}</p>
        </div>
  </section>
</template>

<script lang="ts">
import { AreaOfConcentration } from '../../abstracts/Interfaces';
import { Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class ServicesSection extends Vue {
    public name = 'ServicesSection';  

    private servicesImageUrl = [
        'assets/images/deadlift.webp',
        'assets/images/boxing.webp',
        'assets/images/cardio.webp',
        'assets/images/spa.webp',
        'assets/images/strength-training.webp'
    ]

    @Prop() public areasOfConcentration!: AreaOfConcentration[];

    getImageUrl(index: number) {
        return this.servicesImageUrl[index % this.servicesImageUrl.length];
    }
    
}
</script>

<style lang="scss" scoped>
@import '../../scss/styles';

.service {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1.5rem auto;
    background-size: cover;
    height: 65vh;

    &__image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__title {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 5rem;
        animation: fade-in 1s ease-in-out forwards;
    }

    &__description {
        position: absolute;
        width: 50%;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        transform: translateX(100%); /* Slides description in from right */
        animation: slide-in-right 4s ease-in-out forwards;
    }
    
}

@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slide-in-right {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
}

</style>