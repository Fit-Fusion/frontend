<template>
    <div class="client-classes">
        <h3 class="client-classes__title">Classes</h3>
        <ul class="client-classes__list">
            <li 
                v-for="userClass in userClasses" 
                :key="userClass.id"
                class="client-classes__item"
            >
                <UserClass :userClass="userClass"/>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserClass from './UserClass.vue';


@Component({
    components: {
        UserClass
    }
})
export default class UserClasses extends Vue {
    public name = 'UserClasses';

    @Prop() userClasses!: any;
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.client-classes {
    margin: 2rem 0;
    color: $black;

    &__list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
}

</style>