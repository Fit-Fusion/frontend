<template>
    <div class="alert" @click="close">
        <div class="alert-message">
            {{ message }}
        </div>
        <button class="close-button">×</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Alert extends Vue {
    @Prop(String) message!: string;

    close() {
        this.$emit('close');
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.alert {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.alert-message {
    background-color: #f9f5f5;
    color: $black;
    padding: 20px;
    border-radius: 5px;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #000;
}
</style>
