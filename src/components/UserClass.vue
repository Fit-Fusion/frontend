<template>
    <tr>
        <td class="user-class__td">{{ userClass.date }}</td>
        <td class="user-class__td">{{ userClass.start }} - {{ userClass.end }}</td>
        <template v-if="role === 'client'">
            <td class="user-class__td">{{ userClass.instructorName }}</td>
            <td class="user-class__td">Upcoming</td>
        </template>
        <template v-else>
            <td class="user-class__td">
                <button 
                    class="user-class__button user-class__button_edit"
                    @click="editClass"
                >
                    Edit
                </button>
                <button 
                    class="user-class__button user-class__button_delete"
                    @click="deleteClass"
                >
                    Delete
                </button>
            </td>
        </template>
    </tr>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserClass extends Vue {
    public name = 'UserClass';

    @Prop({ required: true}) userClass: any;
    @Prop({required: true}) role: string;

    editClass() {
        this.$emit('editClass', this.userClass);
    }

    deleteClass() {
        this.$emit('deleteClass', this.userClass);
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.user-class {
    &__td {
        border: 1px solid $white;
        padding: 1rem;
        background-color: rgba(255, 255, 255, 0.05);
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
