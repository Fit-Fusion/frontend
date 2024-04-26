<template>
    <section class="store">
        <h2 class="store__title">OUR FITNESS STORE</h2>
        <ProteinList />
        <GloveList />
        <BeltList />
        <BottleList />
    </section> 
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import ProteinList from '../components/store-items/ProteinList.vue';
import GloveList from '../components/store-items/GloveList.vue';
import BeltList from '../components/store-items/BeltList.vue';
import BottleList from '../components/store-items/BottleList.vue';

@Component({
    components: {
        ProteinList,
        GloveList,
        BeltList,
        BottleList
    }
})
export default class Store extends Vue {
    public name = 'Store';   
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.store {
    background: $black;
    color: $white;

    &__title {
        text-align: center;
        padding: 2rem;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
}
</style>