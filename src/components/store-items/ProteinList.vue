<template>
    <ul class="protein-list">
        <li class="protein">
            <img 
                src="assets/images/protein1.webp" 
                class="protein__image" 
                alt="protein"
            />
            <h4 class="protein__title">WHEY PROTEIN (vanilla)</h4>
            <div class="protein__price-make">
                <span class="protein__price">$15.00</span>
                <span class="protein__make">GOLD</span>
            </div>
            <div class="protein__buttons">
                <button class="protein__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="protein__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
        <li class="protein">
            <img 
                src="assets/images/protein2.webp" 
                class="protein__image" 
                alt="protein"
            />
            <h4 class="protein__title">WHEY ISOLATE</h4>
            <div class="protein__price-make">
                <span class="protein__price">$25.00</span>
                <span class="protein__make">MUSCLE MILK</span>
            </div>
            <div class="protein__buttons">
                <button class="protein__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="protein__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
        <li class="protein">
            <img 
                src="assets/images/protein3.webp" 
                class="protein__image" 
                alt="protein"
            />
            <h4 class="protein__title">ORGANIC PROTEIN</h4>
            <div class="protein__price-make">
                <span class="protein__price">$19.99</span>
                <span class="protein__make">VEST</span>
            </div>
            <div class="protein__buttons">
                <button class="protein__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="protein__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
        <li class="protein">
            <img 
                src="assets/images/protein4.webp" 
                class="protein__image" 
                alt="protein"
            />
            <h4 class="protein__title">ADVANCED WHEY PROTEIN</h4>
            <div class="protein__price-make">
                <span class="protein__price">$14.99</span>
                <span class="protein__make">BODY FORTRESS</span>
            </div>
            <div class="protein__buttons">
                <button class="protein__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="protein__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
        <li class="protein">
            <img 
                src="assets/images/protein5.webp" 
                class="protein__image" 
                alt="protein"
            />
            <h4 class="protein__title">100% WHEY PROTEIN</h4>
            <div class="protein__price-make">
                <span class="protein__price">$17.00</span>
                <span class="protein__make">MUSASHI</span>
            </div>
            <div class="protein__buttons">
                <button class="protein__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="protein__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
        <li class="protein">
            <img 
                src="assets/images/protein6.webp" 
                class="protein__image" 
                alt="protein"
            />
            <h4 class="protein__title">NAKED WHEY (strawberry)</h4>
            <div class="protein__price-make">
                <span class="protein__price">$15.00</span>
                <span class="protein__make">INLIFE</span>
            </div>
            <div class="protein__buttons">
                <button class="protein__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="protein__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
        <li class="protein">
            <img 
                src="assets/images/protein7.webp" 
                class="protein__image" 
                alt="protein"
            />
            <h4 class="protein__title">WHEY PROTEIN (chocolate)</h4>
            <div class="protein__price-make">
                <span class="protein__price">$20.00</span>
                <span class="protein__make">GNARLY</span>
            </div>
            <div class="protein__buttons">
                <button class="protein__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="protein__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
        <li class="protein">
            <img 
                src="assets/images/protein8.webp" 
                class="protein__image" 
                alt="protein"
            />
            <h4 class="protein__title">PLANT BASED PROTEIN</h4>
            <div class="protein__price-make">
                <span class="protein__price">$15.00</span>
                <span class="protein__make">EVOLVE</span>
            </div>
            <div class="protein__buttons">
                <button class="protein__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="protein__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
        <li class="protein">
            <img 
                src="assets/images/protein9.webp" 
                class="protein__image" 
                alt="protein"
            />
            <h4 class="protein__title">WHEY ISOLATE</h4>
            <div class="protein__price-make">
                <span class="protein__price">$11.00</span>
                <span class="protein__make">BLOOM</span>
            </div>
            <div class="protein__buttons">
                <button class="protein__button">BUY NOW</button>
                <img 
                    src="assets/images/shopping-bag.png" 
                    class="protein__shopping-bag"
                    alt="shopping-bag"
                />
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';

@Component
export default class ProteinList extends Vue {
    public name = 'ProteinList';   

    // make api for payment possibility. possibly charge 0.00
}
</script>

<style lang="scss" scoped>
@import '../../scss/styles';

.protein-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style: none;
    padding-bottom: 3rem;
}

.protein {
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