<template>
    <div class="messages-table">
        <h1 class="messages-table__title">Messages Table</h1>
        <table class="messages-table__content">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email Of Sender</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="message in messages" :key="message.id">
                    <td>{{ message.id }}</td>
                    <td>{{ message.sender_email }}</td>
                    <td>{{ message.message }}</td>
                    <td>{{ message.date }}</td>
                    <td class="messages-table__icons">
                        <img
                            src="/assets/icons/delete-icon.svg"
                            @click="showDeleteMessage(message.id)"
                            class="messages-table__icon"
                            alt="delete icon"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <button 
            class="messages-table__close-button"
            @click="close"
        >
            Close
        </button>

        <DeleteMessageModal
            v-if="showDeleteMessageModal"
            :messageId="selectedMessage"
            @close="hideDeleteMessageModal"
            @refreshMessages="refreshMessages"
        />
    </div>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import DeleteMessageModal from './DeleteMessageModal.vue';

@Component({
    components: {
        DeleteMessageModal
    }
})
export default class MessagesTable extends Vue {
    public name = 'MessagesTable';

    @Prop({ required: true }) messages: Array<any>;

    private showDeleteMessageModal = false;
    private selectedMessage: any = null;

    showDeleteMessage(messageId: number) {
        this.selectedMessage = messageId;
        this.showDeleteMessageModal = true;
    }

    hideDeleteMessageModal() {
        this.showDeleteMessageModal = false;
    }

    close() {
        this.$emit('close');
    }

    refreshMessages() {
        this.$emit('refreshMessages');
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.messages-table {
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
    max-height: 30rem;
    background-color: $white;
    overflow: scroll;

    &__title {
        padding-bottom: 1rem;
        text-align: center;
        color: $black;
    }

    &__content {
        width: 100%;
        border-collapse: collapse;
        color: $black;

        th, td {
            text-align: center;
            border: 1px solid $black;
            padding: 0.5rem;
            white-space: nowrap;
        }

        th {
            background-color: $black;
            color: $white;
        }
    }

    &__close-button {
        background-color: $black;
        font-weight: 600;
        width: 10rem;
        margin: 1rem auto;
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
        border-radius: 0.3rem;
        color: $white;
    }

    &__icon {
        width: 1rem;
        height: 1rem;
        cursor: pointer;
    }

    &__icons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>
