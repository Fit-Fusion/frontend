<template>
    <section class="services">
        <div 
            v-for="(service, index) in areaOfConcentration"
            :key="service.id"
            :style="{ 
                'background': `
                    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                    url(${getImageUrl(index)})`,
                'background-size': 'cover'
            }"
            class="service"
            :ref="el => addToRefs(el, index)"
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

    @Prop() public areaOfConcentration!: AreaOfConcentration[];

    private serviceRefs: (HTMLElement | null)[] = [];

    getImageUrl(index: number) {
        return this.servicesImageUrl[index % this.servicesImageUrl.length];
    }

    addToRefs(el: HTMLElement | null, index: number) {
        if (el) {
            this.serviceRefs[index] = el;
        }
    }
    
    mounted() {
        setTimeout(() => {
            const options = {
                root: null,
                threshold: 0.1
            };

            const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            };

            const observer = new IntersectionObserver(callback, options);

            this.$nextTick(() => {
                this.serviceRefs.forEach(service => {
                    if (service) {
                        observer.observe(service);
                    }
                });
            });
        }, 100);
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
    margin: 5rem 1rem;
    background-size: cover;
    height: 65vh;
    opacity: 0.5;
    transition: opacity 3s, transform 3s;

    &.visible {
        opacity: 1;
    }

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
        font-size: 3rem;
        margin-bottom: 5rem;
        opacity: 0;
        transform: translateY(-10rem); 
        transition: opacity 4s, transform 4s;
    }

    &__description {
        position: absolute;
        width: 50%;
        top: 50%;
        text-align: center;
        font-size: 1.5rem;
        transform: translateY(-50%) translateX(100%);
        opacity: 0;
        transition: opacity 4s, transform 4s;
    }

    &.visible .service__title,
    &.visible .service__description {
        opacity: 1;
        transform: translateY(0) translateX(0);
    }
    
}

</style>