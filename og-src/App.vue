<template>
    <div id="app">
        <h1>{{ title }}</h1>
        <h3>{{ perfonInfo }}</h3>
        <hr>
        <BookComponent :bookcat="category" @passData="GetData($event)" />
    </div>
</template>

<script>
import BookComponent from './BookComponent.vue'
export default {
    name: 'App',
    components: {
        BookComponent,
    },
    data() {
        return {
            title: 'Demonstration of passing data between components,style demo',
            category: 'Technology',
            selectedbook: 'None',
            perfonInfo: '',
        };
    },
    methods: {
        GetData(data) {
            this.perfonInfo = 'Recently Added Book :' + ' ' + data;
        }
    }
};
</script>

<style scoped>
h1 {
    color: brown;
}

h3 {
    color: magenta;
}
</style>
