<template>
    <ul class="belt-list">
        <li class="belt">
            <img 
                src="assets/images/belt1.webp" 
                class="belt__image" 
                alt="belt"
            />
            <h4 class="belt__title">WHEY PROTEIN (vanilla)</h4>
            <div class="belt__price-make">
                <span class="belt__price">$15.00</span>
                <span class="belt__make">GOLD</span>
            </div>
            <div class="belt__buttons">
                <button class="belt__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="belt__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
        <li class="belt">
            <img 
                src="assets/images/belt2.webp" 
                class="belt__image" 
                alt="belt"
            />
            <h4 class="belt__title">WHEY ISOLATE</h4>
            <div class="belt__price-make">
                <span class="belt__price">$25.00</span>
                <span class="belt__make">MUSCLE MILK</span>
            </div>
            <div class="belt__buttons">
                <button class="belt__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="belt__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
        <li class="belt">
            <img 
                src="assets/images/belt3.webp" 
                class="belt__image" 
                alt="belt"
            />
            <h4 class="belt__title">ORGANIC PROTEIN</h4>
            <div class="belt__price-make">
                <span class="belt__price">$19.99</span>
                <span class="belt__make">VEST</span>
            </div>
            <div class="belt__buttons">
                <button class="belt__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="belt__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
        <li class="belt">
            <img 
                src="assets/images/belt4.webp" 
                class="belt__image" 
                alt="belt"
            />
            <h4 class="belt__title">ADVANCED WHEY PROTEIN</h4>
            <div class="belt__price-make">
                <span class="belt__price">$14.99</span>
                <span class="belt__make">BODY FORTRESS</span>
            </div>
            <div class="belt__buttons">
                <button class="belt__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="belt__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
        <li class="belt">
            <img 
                src="assets/images/belt5.webp" 
                class="belt__image" 
                alt="belt"
            />
            <h4 class="belt__title">100% WHEY PROTEIN</h4>
            <div class="belt__price-make">
                <span class="belt__price">$17.00</span>
                <span class="belt__make">MUSASHI</span>
            </div>
            <div class="belt__buttons">
                <button class="belt__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="belt__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';

@Component
export default class BeltList extends Vue {
    public name = 'BeltList';   
}
</script>

<style lang="scss" scoped>
@import '../../scss/styles';

.belt-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style: none;
    padding-bottom: 3rem;
}

.belt {
    width: 15rem;
    padding: .4rem;
    border: .1rem solid rgb(88, 86, 86);
    border-radius: .7rem;
    margin: .6rem;

    &__image {
        width: 100%;
        height: 17rem;
        border-radius: .7rem;
    }

    &__title {
        margin: 1rem 0 .5rem 0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    &__price-make {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    &__price {
        color: $theme-color;
        font-weight: 600;
    }

    &__make {
        font-weight: 600;
        color: rgb(255,215,0);
    }

    &__buttons {
        display: flex;
        align-content: center;
    }

    &__button {
        width: 85%;
        height: 1.7rem;
        background: $theme-color;
        cursor: pointer;
        color: $black;
        border: .1rem solid $theme-color;
        border-radius: .4rem;
        padding: .3rem;
        margin: 0 .3rem .5rem 0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: 600;
    }

    &__button:hover {
        background-color: $theme-color-hover;
        transition: all .2s ease-in
    }

    &__shopping-bag {
        height: 1.7rem;
        border-radius: .4rem;
        cursor: pointer;
    }
}

</style>