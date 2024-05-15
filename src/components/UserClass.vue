<template>
    <div class="user-class">
        <span class="user-class__data">{{ userClass.date }} &nbsp;</span>
        <span class="user-class__data">{{ userClass.start }} - {{ userClass.end }}</span>
        
        <template v-if="role === 'client'">
            <span class="user-class__data">{{ userClass.instructorName }}</span>
            <!-- Upcoming | Ongoing | Completed | Cancelled  -->
            <span class="user-class__data">Upcoming</span>
        </template>
        <template v-else>
            <button class="user-class__button user-class__button_edit">Edit</button>
            <button class="user-class__button user-class__button_delete">Delete</button>
        </template>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserClass extends Vue {
    public name = 'UserClass';

    @Prop({ required: true}) userClass: any;
    @Prop({required: true}) role: string;
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.user-class {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid $white;
    font-weight: 600;
    color: $black;

    &__data {
        flex: 1;
    }

    &__button {
        background-color: $theme-color;
        border: none;
        border-radius: .4rem;
        color: black;
        padding: .4rem 1rem;
        font-size: 1rem;
        margin: .2rem;
        cursor: pointer;
    }

    &__button_delete {
        background: $red;
    }
}
</style>