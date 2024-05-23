<template>
    <Modal @close="close">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this class?</p>
        <button @click="confirmDelete">Proceed</button>
        <button @click="close">Cancel</button>
    </Modal>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Modal from './Modal.vue';

@Component({
    components: {
        Modal
    }
})
export default class ConfirmDeleteModal extends Vue {
    @Prop({ required: true }) classId!: string;

    confirmDelete() {
        this.$emit('deleteClass', this.classId);
        this.$emit('close');
    }

    close() {
        this.$emit('close');
    }
}
</script>

<style scoped>
button {
    margin-right: 1rem;
}
</style>
