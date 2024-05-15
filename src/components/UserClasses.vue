<template>
    <div class="user-classes">
        <h3 class="user-classes__title">Classes</h3>
        <ul class="user-classes__list">
            <li 
                v-for="userClass in userClasses" 
                :key="userClass.id"
                class="user-classes__item"
            >
                <UserClass 
                    :userClass="userClass"
                    :role="role"
                />
            </li>
        </ul>

        <template v-if="role === 'trainer'">
            <button 
                class="user-classes__button"
                @click="showAddClass"
            >
                Add Class
            </button>
        </template>
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

    @Prop({ required: true }) userClasses: [];
    @Prop({ required: true }) role: string;


    showAddClass() {
        this.$emit('showAddClass');
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.user-classes {
    margin: 2rem 0;

    &__title {
        text-align: center;
        font-size: 2rem;
        text-decoration: underline;
    }

    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    &__button {
        display: block;
        margin: 1rem auto;
        padding: .4rem 1rem;
        background-color: $theme-background;
        color: $white;
        border: none;
        border-radius: .4rem;
        font-size: 1rem;
        cursor: pointer;
    }
}

</style>