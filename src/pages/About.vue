<template>
    <p> this is the about page </p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component 
export default class About extends Vue {
    public name = 'About';
}

</script>
