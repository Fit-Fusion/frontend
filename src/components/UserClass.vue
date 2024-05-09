<template>
    <div class="client-class">
        <span class="client-class__date">{{ userClass.date }} &nbsp;</span>
        <span class="client-class__time">{{ userClass.start }} - {{ userClass.end }}</span>
        <span class="client-class__name">{{ userClass.name }}</span>
        <span class="client-class__instructor">{{ userClass.instructorName }}</span>
        <!-- Upcoming | Ongoing | Completed | Cancelled | Missed -->
        <span class="client-class__status">Upcoming</span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserClass extends Vue {
    public name = 'UserClass';

    @Prop() userClass!: any;
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.client-class {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #ddd;

    &__time, &__name, &__instructor {
        flex: 1;
    }

    &__button {
        background-color: #4caf50; /* Green */
        border: none;
        color: white;
        padding: 10px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
}
</style>